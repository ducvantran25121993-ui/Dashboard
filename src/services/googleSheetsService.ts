import { MonthDataset, RegionData, ServiceData, MONTHLY_DATA } from '../data/revenueData';

export interface DailyRecord {
  date: string;          // e.g. '1/3/26'
  dayNum: number;        // e.g. 1
  monthNum: number;      // e.g. 3
  yearNum: number;       // e.g. 2026
  region: string;        // e.g. 'Bình Dương'
  service: string;       // e.g. 'IMP', 'NIỀNG', 'SỨ', 'TQ', 'Việt Kiều'
  totalBudget: number;
  budgetVnd: number;
  leadTho: number;
  leadChatLuong: number;
  cpl: number;
}

export interface SheetFetchResult {
  monthlyData: MonthDataset[];
  dailyData: DailyRecord[];
  lastUpdated: Date;
  isLive: boolean;
  sourceUrl: string;
}

export const DEFAULT_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1P5TRZCUnGjQEb1pg4pBhzTqOZZ3_M104v2N7C5AHx5w/edit?gid=918582651#gid=918582651';

// Helper to extract Spreadsheet ID from Google Sheet URL
export function extractSpreadsheetId(url: string): string {
  const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : '1P5TRZCUnGjQEb1pg4pBhzTqOZZ3_M104v2N7C5AHx5w';
}

// Parse CSV string safely respecting quoted cells
function parseCSV(csv: string): string[][] {
  const lines: string[] = [];
  let currentLine = '';
  let inQuotes = false;

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    if (char === '"') inQuotes = !inQuotes;
    if (char === '\n' && !inQuotes) {
      lines.push(currentLine);
      currentLine = '';
    } else if (char !== '\r') {
      currentLine += char;
    }
  }
  if (currentLine) lines.push(currentLine);

  return lines.map(l => {
    const row: string[] = [];
    let cell = '';
    let q = false;
    for (let j = 0; j < l.length; j++) {
      const c = l[j];
      if (c === '"') {
        if (q && l[j + 1] === '"') { cell += '"'; j++; }
        else { q = !q; }
      } else if (c === ',' && !q) {
        row.push(cell.trim());
        cell = '';
      } else {
        cell += c;
      }
    }
    row.push(cell.trim());
    return row;
  });
}

// Parse numbers with Vietnamese formatting (e.g. 21.147.878 or 10,98% or 200.814 đ)
function parseNumber(val: string | undefined): number {
  if (!val) return 0;
  const clean = val
    .replace(/[đ%]/gi, '')
    .replace(/\./g, '')
    .replace(/,/g, '.')
    .replace(/\s/g, '');
  const num = parseFloat(clean);
  return isNaN(num) ? 0 : num;
}

// Parse 'Doanh Thu Theo Tháng' sheet
export function parseMonthlySheet(csvText: string): MonthDataset[] {
  const rows = parseCSV(csvText);
  if (rows.length < 2) return MONTHLY_DATA;

  const defaults = [
    { month: 1, label: 'Tháng 1', regionCol: 0, svcCol: 1, cpSvcCol: 2, cpTongCol: 3, vatCol: 4, revCol: 5, pctCol: 6, svcDataCol: 7, regDataCol: 8 },
    { month: 2, label: 'Tháng 2', regionCol: 9, svcCol: 10, cpSvcCol: 11, cpTongCol: 12, vatCol: 13, revCol: 14, pctCol: 15, svcDataCol: 16, regDataCol: 17 },
    { month: 3, label: 'Tháng 3', regionCol: 18, svcCol: 19, cpSvcCol: 20, cpTongCol: -1, vatCol: 21, revCol: 22, pctCol: 23, svcDataCol: 24, regDataCol: 25 },
    { month: 4, label: 'Tháng 4', regionCol: 26, svcCol: 27, cpSvcCol: 28, cpTongCol: -1, vatCol: 29, revCol: 30, pctCol: 31, svcDataCol: 32, regDataCol: 33 },
    { month: 5, label: 'Tháng 5', regionCol: 34, svcCol: 35, cpSvcCol: 36, cpTongCol: -1, vatCol: 37, revCol: 38, pctCol: 39, svcDataCol: 40, regDataCol: 41 },
    { month: 6, label: 'Tháng 6', regionCol: 42, svcCol: 43, cpSvcCol: 44, cpTongCol: -1, vatCol: 45, revCol: 46, pctCol: 47, svcDataCol: 48, regDataCol: 49 },
    { month: 7, label: 'Tháng 7', regionCol: 50, svcCol: 51, cpSvcCol: 52, cpTongCol: -1, vatCol: 53, revCol: 54, pctCol: 55, svcDataCol: 56, regDataCol: 57 },
  ];

  // Try to dynamically detect month column headers in row 0 & 1
  const monthConfigs = defaults.map((def) => {
    let foundCol = -1;
    const targetLabel = `Tháng ${def.month}`.toLowerCase();

    for (let r = 0; r < Math.min(3, rows.length); r++) {
      const row = rows[r];
      if (!row) continue;
      for (let c = 0; c < row.length; c++) {
        const cell = row[c] ? row[c].trim().toLowerCase() : '';
        if (cell === targetLabel || cell === `thang ${def.month}` || cell === `t${def.month}`) {
          foundCol = c;
          break;
        }
      }
      if (foundCol !== -1) break;
    }

    if (foundCol !== -1) {
      return {
        ...def,
        regionCol: foundCol,
        svcCol: foundCol + 1,
        cpSvcCol: foundCol + 2,
        cpTongCol: -1,
        vatCol: foundCol + 3,
        revCol: foundCol + 4,
        pctCol: foundCol + 5,
        svcDataCol: foundCol + 6,
        regDataCol: foundCol + 7,
      };
    }
    return def;
  });

  const datasets: MonthDataset[] = [];

  const getCell = (row: string[], colIdx: number) =>
    colIdx >= 0 && colIdx < row.length ? row[colIdx] : '';

  monthConfigs.forEach((cfg) => {
    let currentRegion: RegionData | null = null;
    const regions: RegionData[] = [];

    for (let r = 1; r < rows.length; r++) {
      const row = rows[r];
      if (!row) continue;

      let regName = getCell(row, cfg.regionCol).trim();
      if (
        !regName &&
        getCell(row, 0).trim() &&
        (getCell(row, cfg.regDataCol) ||
          getCell(row, cfg.svcDataCol) ||
          getCell(row, cfg.vatCol) ||
          getCell(row, cfg.revCol))
      ) {
        regName = getCell(row, 0).trim();
      }

      let svcName = getCell(row, cfg.svcCol).trim();
      if (
        !svcName &&
        getCell(row, 1).trim() &&
        (getCell(row, cfg.svcDataCol) || getCell(row, cfg.cpSvcCol))
      ) {
        svcName = getCell(row, 1).trim();
      }

      const vat = parseNumber(getCell(row, cfg.vatCol));
      const rev = parseNumber(getCell(row, cfg.revCol));
      const regDataCount = parseNumber(getCell(row, cfg.regDataCol));
      const svcCp = parseNumber(getCell(row, cfg.cpSvcCol));
      const svcDataCount = parseNumber(getCell(row, cfg.svcDataCol));

      if (
        regName &&
        regName !== 'Tổng' &&
        regName !== 'TỔNG' &&
        !regName.includes('Tổng Tất Cả') &&
        !regName.toLowerCase().startsWith('tháng')
      ) {
        currentRegion = {
          name: regName,
          costVAT: vat,
          revenue: rev,
          cpDichVu: parseNumber(getCell(row, cfg.cpSvcCol)),
          cpTong: cfg.cpTongCol >= 0 ? parseNumber(getCell(row, cfg.cpTongCol)) : 0,
          totalData: regDataCount,
          dataChatLuong: regDataCount,
          services: [],
        };
        regions.push(currentRegion);
      }

      if (currentRegion && svcName && svcName !== 'Tổng' && svcName !== 'TỔNG') {
        currentRegion.services.push({
          name: svcName,
          cp: svcCp,
          dataCount: svcDataCount,
        });
      }
    }

    if (regions.length > 0) {
      datasets.push({
        month: cfg.month,
        label: cfg.label,
        regions,
      });
    }
  });

  return datasets.length > 0 ? datasets : MONTHLY_DATA;
}

function normalizeServiceName(raw: string): string {
  if (!raw) return 'Khác';
  const s = raw.trim();
  const upper = s.toUpperCase();
  if (upper === 'IMP' || upper === 'IMPLANT') return 'Implant';
  if (upper === 'NIỀNG' || upper === 'NIENG') return 'Niềng';
  if (upper === 'SỨ' || upper === 'SU') return 'Sứ';
  if (upper === 'TH' || upper === 'TQ' || upper === 'TỔNG HỢP' || upper === 'TONG HOP') return 'TH';
  if (upper === 'VIỆT KIỀU' || upper === 'VIET KIEU' || upper === 'VK') return 'Việt Kiều';
  return s;
}

// Parse 'Data Ngày' sheet
function parseDailySheet(csvText: string): DailyRecord[] {
  const rows = parseCSV(csvText);
  if (rows.length < 2) return [];

  const records: DailyRecord[] = [];
  let lastDate = '';
  let lastRegion = '';

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row || row.length < 3) continue;

    const [dateCell, regionCell, serviceCell, totalBudgetCell, budgetVndCell, leadThoCell, leadChatLuongCell, cplCell] = row;

    if (dateCell && dateCell.trim()) {
      lastDate = dateCell.trim();
    }
    if (regionCell && regionCell.trim()) {
      lastRegion = regionCell.trim();
    }

    if (!lastDate || !serviceCell || !serviceCell.trim()) continue;

    const dateParts = lastDate.split('/');
    if (dateParts.length < 2) continue;

    const dayNum = parseInt(dateParts[0], 10);
    const monthNum = parseInt(dateParts[1], 10);
    const yearSuffix = dateParts[2] ? parseInt(dateParts[2], 10) : 26;
    const yearNum = yearSuffix < 100 ? 2000 + yearSuffix : yearSuffix;

    if (isNaN(dayNum) || isNaN(monthNum)) continue;

    records.push({
      date: lastDate,
      dayNum,
      monthNum,
      yearNum,
      region: lastRegion || 'Tổng',
      service: normalizeServiceName(serviceCell),
      totalBudget: parseNumber(totalBudgetCell),
      budgetVnd: parseNumber(budgetVndCell),
      leadTho: parseNumber(leadThoCell),
      leadChatLuong: parseNumber(leadChatLuongCell),
      cpl: parseNumber(cplCell)
    });
  }

  return records;
}

// Fetch live Google Sheet data
export async function fetchGoogleSheetData(sheetUrl: string = DEFAULT_SHEET_URL): Promise<SheetFetchResult> {
  const spreadsheetId = extractSpreadsheetId(sheetUrl);
  const cacheBust = Date.now();

  // Multiple fallback endpoints with cache-busting to prevent browser caching stale CSVs
  const monthCsvUrls = [
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&gid=918582651&_t=${cacheBust}`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent('Doanh Thu Theo Tháng')}&_t=${cacheBust}`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=918582651&_t=${cacheBust}`
  ];

  const dailyCsvUrls = [
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent('Data Ngày')}&_t=${cacheBust}`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&sheet=${encodeURIComponent('Data Ngày')}&_t=${cacheBust}`
  ];

  const fetchOptions: RequestInit = {
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
    }
  };

  let monthText = '';
  for (const url of monthCsvUrls) {
    try {
      const res = await fetch(url, fetchOptions);
      if (res.ok) {
        const text = await res.text();
        if (text && !text.includes('<!DOCTYPE html>') && !text.includes('Error') && text.length > 50) {
          monthText = text;
          break;
        }
      }
    } catch {
      // try next fallback URL
    }
  }

  let dailyText = '';
  for (const url of dailyCsvUrls) {
    try {
      const res = await fetch(url, fetchOptions);
      if (res.ok) {
        const text = await res.text();
        if (text && !text.includes('<!DOCTYPE html>') && !text.includes('Error') && text.length > 50) {
          dailyText = text;
          break;
        }
      }
    } catch {
      // try next fallback URL
    }
  }

  try {
    let monthlyData = MONTHLY_DATA;
    let dailyData: DailyRecord[] = [];
    let isLive = false;

    if (monthText) {
      const parsed = parseMonthlySheet(monthText);
      if (parsed && parsed.length > 0) {
        monthlyData = parsed;
        isLive = true;
      }
    }

    if (dailyText) {
      dailyData = parseDailySheet(dailyText);
    }

    return {
      monthlyData,
      dailyData,
      lastUpdated: new Date(),
      isLive,
      sourceUrl: sheetUrl,
    };
  } catch (error) {
    console.error('Failed to parse live Google Sheet data:', error);
    return {
      monthlyData: MONTHLY_DATA,
      dailyData: [],
      lastUpdated: new Date(),
      isLive: false,
      sourceUrl: sheetUrl,
    };
  }
}
