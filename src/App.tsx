import React, { useState, useEffect, useCallback } from 'react';
import { MONTHLY_DATA, MonthDataset } from './data/revenueData';
import { MonthTab, DisplayUnit } from './types';
import { Header } from './components/Header';
import { KPISummary } from './components/KPISummary';
import { CostChart } from './components/CostChart';
import { RevenueChart } from './components/RevenueChart';
import { RegionDataChart } from './components/RegionDataChart';
import { ServiceDataChart } from './components/ServiceDataChart';
import { DailyDataChart } from './components/DailyDataChart';
import { CombinedChart } from './components/CombinedChart';
import { RegionalDetailTable } from './components/RegionalDetailTable';
import { SixMonthOverview } from './components/SixMonthOverview';
import { SheetStatusBanner } from './components/SheetStatusBanner';
import {
  fetchGoogleSheetData,
  DEFAULT_SHEET_URL,
  DailyRecord,
} from './services/googleSheetsService';

export default function App() {
  const [activeTab, setActiveTab] = useState<MonthTab>(1);
  const [displayUnit, setDisplayUnit] = useState<DisplayUnit>('full');

  // Google Sheet live synchronization state
  const [sheetUrl, setSheetUrl] = useState<string>(DEFAULT_SHEET_URL);
  const [monthlyDatasets, setMonthlyDatasets] = useState<MonthDataset[]>(MONTHLY_DATA);
  const [dailyRecords, setDailyRecords] = useState<DailyRecord[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState<boolean>(true);

  // Fetch live Google Sheet data
  const loadSheetData = useCallback(async (url: string = sheetUrl) => {
    setIsFetching(true);
    const result = await fetchGoogleSheetData(url);
    if (result.monthlyData && result.monthlyData.length > 0) {
      setMonthlyDatasets(result.monthlyData);
    }
    setDailyRecords(result.dailyData);
    setLastUpdated(result.lastUpdated);
    setIsLive(result.isLive);
    setIsFetching(false);
  }, [sheetUrl]);

  // Initial load
  useEffect(() => {
    loadSheetData(sheetUrl);
  }, [sheetUrl, loadSheetData]);

  // Periodic Auto Refresh (every 30 seconds for live updates when Google Sheet changes)
  useEffect(() => {
    if (!autoRefreshEnabled) return;
    const interval = setInterval(() => {
      loadSheetData(sheetUrl);
    }, 30000);
    return () => clearInterval(interval);
  }, [autoRefreshEnabled, sheetUrl, loadSheetData]);

  // Find dataset for active month
  const currentMonthNum = typeof activeTab === 'number' ? activeTab : 1;
  const currentMonthData = monthlyDatasets.find((m) => m.month === currentMonthNum) || monthlyDatasets[0] || MONTHLY_DATA[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white pb-12">
      {/* Top sticky header & month tabs navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        displayUnit={displayUnit}
        onSelectUnit={setDisplayUnit}
      />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Live Google Sheet Status Banner */}
        <SheetStatusBanner
          isLive={isLive}
          isFetching={isFetching}
          lastUpdated={lastUpdated}
          sheetUrl={sheetUrl}
          onRefresh={() => loadSheetData(sheetUrl)}
          onUpdateSheetUrl={(newUrl) => {
            setSheetUrl(newUrl);
            loadSheetData(newUrl);
          }}
          autoRefreshEnabled={autoRefreshEnabled}
          onToggleAutoRefresh={() => setAutoRefreshEnabled(!autoRefreshEnabled)}
        />

        {activeTab === 'overview' ? (
          /* 6-Month Combined Overview View */
          <SixMonthOverview displayUnit={displayUnit} monthlyData={monthlyDatasets} />
        ) : currentMonthData ? (
          /* Individual Month View (Tháng 1 - Tháng 6) */
          <div className="space-y-6">
            {/* Top KPI Cards */}
            <KPISummary
              monthData={currentMonthData}
              displayUnit={displayUnit}
            />

            {/* Grid 1: Chi Phí (VAT) & Doanh Thu */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chart 1: Chi Phí (VAT) Theo Khu Vực */}
              <CostChart
                regions={currentMonthData.regions}
                monthLabel={currentMonthData.label}
                displayUnit={displayUnit}
              />

              {/* Chart 2: Doanh Thu Theo Khu Vực */}
              <RevenueChart
                regions={currentMonthData.regions}
                monthLabel={currentMonthData.label}
                displayUnit={displayUnit}
              />
            </div>

            {/* Grid 2: Data Tháng Theo Khu Vực & Data Tháng Theo Dịch Vụ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chart 3: Data Tháng Theo Từng Khu Vực (Cột Data) */}
              <RegionDataChart
                regions={currentMonthData.regions}
                monthLabel={currentMonthData.label}
              />

              {/* Chart 4: Data Tháng Theo Từng Dịch Vụ (Cột Data Dịch Vụ) */}
              <ServiceDataChart
                regions={currentMonthData.regions}
                monthLabel={currentMonthData.label}
                displayUnit={displayUnit}
              />
            </div>

            {/* Chart 5: Data Ngày Theo Từng Dịch Vụ & Từng Tháng (từ sheet Data Ngày) */}
            <DailyDataChart
              dailyRecords={dailyRecords}
              activeMonth={currentMonthNum}
              monthLabel={currentMonthData.label}
            />

            {/* Combined Comparison Chart: Revenue vs Cost VAT side-by-side */}
            <CombinedChart
              regions={currentMonthData.regions}
              monthLabel={currentMonthData.label}
              displayUnit={displayUnit}
            />

            {/* Detailed Data Table */}
            <RegionalDetailTable
              regions={currentMonthData.regions}
              monthLabel={currentMonthData.label}
              displayUnit={displayUnit}
            />
          </div>
        ) : null}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>Báo Cáo Doanh Thu Theo Tháng, Chi Phí (VAT) & Data Dịch Vụ Theo Ngày</p>
          <p className="text-slate-600">
            Tự động đồng bộ với Google Sheet • Tháng 1 đến Tháng 6
          </p>
        </div>
      </footer>
    </div>
  );
}
