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
function parseMonthlySheet(csvText: string): MonthDataset[] {
  const rows = parseCSV(csvText);
  if (rows.length < 2) return MONTHLY_DATA;

  const monthConfigs = [
    { month: 1, label: 'Tháng 1', regionCol: 0, svcCol: 1, cpSvcCol: 2, cpTongCol: 3, vatCol: 4, revCol: 5, pctCol: 6, svcDataCol: 7, regDataCol: 8 },
    { month: 2, label: 'Tháng 2', regionCol: 9, svcCol: 10, cpSvcCol: 11, cpTongCol: 12, vatCol: 13, revCol: 14, pctCol: 15, svcDataCol: 16, regDataCol: 17 },
    { month: 3, label: 'Tháng 3', regionCol: 18, svcCol: 19, cpSvcCol: 20, cpTongCol: -1, vatCol: 21, revCol: 22, pctCol: 23, svcDataCol: 24, regDataCol: 25 },
    { month: 4, label: 'Tháng 4', regionCol: 26, svcCol: 27, cpSvcCol: 28, cpTongCol: -1, vatCol: 29, revCol: 30, pctCol: 31, svcDataCol: 32, regDataCol: 33 },
    { month: 5, label: 'Tháng 5', regionCol: 34, svcCol: 35, cpSvcCol: 36, cpTongCol: -1, vatCol: 37, revCol: 38, pctCol: 39, svcDataCol: 40, regDataCol: 41 },
    { month: 6, label: 'Tháng 6', regionCol: 42, svcCol: 43, cpSvcCol: 44, cpTongCol: -1, vatCol: 45, revCol: 46, pctCol: 47, svcDataCol: 48, regDataCol: 49 },
  ];

  const datasets: MonthDataset[] = [];

  monthConfigs.forEach(cfg => {
    let currentRegion: RegionData | null = null;
    const regions: RegionData[] = [];

    for (let r = 1; r < rows.length; r++) {
      const row = rows[r];
      if (!row || row.length <= cfg.regionCol) continue;

      const regName = row[cfg.regionCol] ? row[cfg.regionCol].trim() : '';
      const svcName = row[cfg.svcCol] ? row[cfg.svcCol].trim() : '';
      const vat = parseNumber(row[cfg.vatCol]);
      const rev = parseNumber(row[cfg.revCol]);
      const regDataCount = parseNumber(row[cfg.regDataCol]);
      const svcCp = parseNumber(row[cfg.cpSvcCol]);
      const svcDataCount = parseNumber(row[cfg.svcDataCol]);

      if (regName && regName !== 'Tổng' && regName !== 'TỔNG' && !regName.includes('Tổng Tất Cả')) {
        currentRegion = {
          name: regName,
          costVAT: vat,
          revenue: rev,
          cpDichVu: parseNumber(row[cfg.cpSvcCol]),
          cpTong: cfg.cpTongCol >= 0 ? parseNumber(row[cfg.cpTongCol]) : 0,
          totalData: regDataCount,
          services: []
        };
        regions.push(currentRegion);
      }

      if (currentRegion && svcName && svcName !== 'Tổng' && svcName !== 'TỔNG') {
        currentRegion.services.push({
          name: svcName,
          cp: svcCp,
          dataCount: svcDataCount
        });
      }
    }

    if (regions.length > 0) {
      datasets.push({
        month: cfg.month,
        label: cfg.label,
        regions
      });
    }
  });

  return datasets.length > 0 ? datasets : MONTHLY_DATA;
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
      service: serviceCell.trim(),
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

  // Fetch 'Doanh Thu Theo Tháng' (gid=918582651 or sheet name)
  const monthCsvUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&gid=918582651`;
  const dailyCsvUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent('Data Ngày')}`;

  try {
    const [monthRes, dailyRes] = await Promise.all([
      fetch(monthCsvUrl).catch(() => null),
      fetch(dailyCsvUrl).catch(() => null),
    ]);

    let monthlyData = MONTHLY_DATA;
    let dailyData: DailyRecord[] = [];
    let isLive = false;

    if (monthRes && monthRes.ok) {
      const monthText = await monthRes.text();
      if (monthText && !monthText.includes('<!DOCTYPE html>') && !monthText.includes('Error')) {
        monthlyData = parseMonthlySheet(monthText);
        isLive = true;
      }
    }

    if (dailyRes && dailyRes.ok) {
      const dailyText = await dailyRes.text();
      if (dailyText && !dailyText.includes('<!DOCTYPE html>') && !dailyText.includes('Error')) {
        dailyData = parseDailySheet(dailyText);
      }
    }

    return {
      monthlyData,
      dailyData,
      lastUpdated: new Date(),
      isLive,
      sourceUrl: sheetUrl,
    };
  } catch (error) {
    console.error('Failed to fetch live Google Sheet data:', error);
    return {
      monthlyData: MONTHLY_DATA,
      dailyData: [],
      lastUpdated: new Date(),
      isLive: false,
      sourceUrl: sheetUrl,
    };
  }
}
