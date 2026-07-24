import React from 'react';
import { Calendar, DollarSign, TrendingUp, Layers, Building2, BarChart2 } from 'lucide-react';
import { MonthTab, DisplayUnit } from '../types';

interface HeaderProps {
  activeTab: MonthTab;
  onSelectTab: (tab: MonthTab) => void;
  displayUnit: DisplayUnit;
  onSelectUnit: (unit: DisplayUnit) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  displayUnit,
  onSelectUnit,
}) => {
  const months: { id: MonthTab; label: string }[] = [
    { id: 1, label: 'Tháng 1' },
    { id: 2, label: 'Tháng 2' },
    { id: 3, label: 'Tháng 3' },
    { id: 4, label: 'Tháng 4' },
    { id: 5, label: 'Tháng 5' },
    { id: 6, label: 'Tháng 6' },
    { id: 7, label: 'Tháng 7' },
    { id: 'overview', label: 'Tổng Quan' },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Top bar: Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <BarChart2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Báo Cáo Doanh Thu Theo Tháng
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 mt-0.5">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                Phân Tích Doanh Thu & Chi Phí (VAT) Theo Khu Vực & Dịch Vụ
              </p>
            </div>
          </div>

          {/* Controls: Display Unit Selector */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
            <span className="text-xs text-slate-400 px-2.5 font-medium flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-slate-400" /> Đơn vị:
            </span>
            <button
              onClick={() => onSelectUnit('full')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                displayUnit === 'full'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              VNĐ
            </button>
            <button
              onClick={() => onSelectUnit('million')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                displayUnit === 'million'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              Triệu VNĐ
            </button>
            <button
              onClick={() => onSelectUnit('billion')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                displayUnit === 'billion'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              Tỷ VNĐ
            </button>
          </div>
        </div>

        {/* Month Navigation Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pt-3 pb-1 no-scrollbar">
          {months.map((m) => {
            const isActive = activeTab === m.id;
            const isOverview = m.id === 'overview';
            return (
              <button
                key={m.id}
                onClick={() => onSelectTab(m.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? isOverview
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-teal-900/30 border border-teal-500/30'
                      : 'bg-blue-600 text-white shadow-md shadow-blue-900/30 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent'
                }`}
              >
                {isOverview ? (
                  <TrendingUp className="w-4 h-4 text-emerald-300" />
                ) : (
                  <Calendar className="w-4 h-4 text-slate-400" />
                )}
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
