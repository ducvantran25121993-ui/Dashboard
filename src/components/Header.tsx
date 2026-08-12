import React from 'react';
import { Calendar, DollarSign, TrendingUp, Building2, BarChart2, Lock, KeyRound, ShieldCheck, Users } from 'lucide-react';
import { MonthTab, DisplayUnit } from '../types';

interface HeaderProps {
  activeTab: MonthTab;
  onSelectTab: (tab: MonthTab) => void;
  displayUnit: DisplayUnit;
  onSelectUnit: (unit: DisplayUnit) => void;
  userRole?: 'admin' | 'staff' | null;
  onLockDashboard?: () => void;
  onChangePassword?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  displayUnit,
  onSelectUnit,
  userRole,
  onLockDashboard,
  onChangePassword,
}) => {
  const months: { id: MonthTab; label: string }[] = [
    { id: 1, label: 'Tháng 1' },
    { id: 2, label: 'Tháng 2' },
    { id: 3, label: 'Tháng 3' },
    { id: 4, label: 'Tháng 4' },
    { id: 5, label: 'Tháng 5' },
    { id: 6, label: 'Tháng 6' },
    { id: 7, label: 'Tháng 7' },
    { id: 8, label: 'Tháng 8' },
    { id: 9, label: 'Tháng 9' },
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
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Dashboard Báo Cáo Doanh Thu
                </h1>
                {userRole === 'admin' && (
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Admin
                  </span>
                )}
                {userRole === 'staff' && (
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-sky-500/15 text-sky-400 border border-sky-500/30 flex items-center gap-1">
                    <Users className="w-3 h-3" /> Nhân viên
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 mt-0.5">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                Phân Tích Doanh Thu & Chi Phí (VAT) Theo Khu Vực & Dịch Vụ
              </p>
            </div>
          </div>

          {/* Controls: Display Unit Selector & Security Lock */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {/* Unit Selector */}
            <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
              <span className="text-xs text-slate-400 px-2 font-medium flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-slate-400" /> Đơn vị:
              </span>
              <button
                onClick={() => onSelectUnit('full')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  displayUnit === 'full'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                VNĐ
              </button>
              <button
                onClick={() => onSelectUnit('million')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  displayUnit === 'million'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                Triệu VNĐ
              </button>
              <button
                onClick={() => onSelectUnit('billion')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  displayUnit === 'billion'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                Tỷ VNĐ
              </button>
            </div>

            {/* Change Pass & Lock buttons */}
            <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
              {onChangePassword && userRole === 'admin' && (
                <button
                  onClick={onChangePassword}
                  className="px-2.5 py-1 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-700/60 rounded-lg flex items-center gap-1 transition-all"
                  title="Thay đổi mật khẩu truy cập (Admin & Staff)"
                >
                  <KeyRound className="w-3.5 h-3.5 text-purple-400" />
                  <span className="hidden sm:inline">Đổi MK</span>
                </button>
              )}
              {onLockDashboard && (
                <button
                  onClick={onLockDashboard}
                  className="px-2.5 py-1 text-xs font-semibold text-rose-300 hover:text-rose-200 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-lg flex items-center gap-1 transition-all"
                  title="Đăng xuất khỏi Dashboard"
                >
                  <Lock className="w-3.5 h-3.5 text-rose-400" />
                  <span>Đăng xuất</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Month Navigation Tabs - Ultra 3D Tactile Floating Bar */}
        <div className="pt-3 pb-1.5 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-slate-950/80 rounded-2xl border border-slate-800/90 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7)] backdrop-blur-md max-w-full overflow-x-auto no-scrollbar">
            {months.map((m) => {
              const isActive = activeTab === m.id;
              const isOverview = m.id === 'overview';
              const shortLabel = typeof m.id === 'number' ? `T${m.id}` : 'Tổng Quan';

              if (isOverview) {
                return (
                  <React.Fragment key={m.id}>
                    {/* 3D Divider */}
                    <div className="h-6 w-px bg-slate-800/90 shadow-[1px_0_0_rgba(255,255,255,0.05)] mx-1 shrink-0" />
                    <button
                      onClick={() => onSelectTab(m.id)}
                      className={`relative flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-extrabold rounded-xl whitespace-nowrap transition-all duration-200 shrink-0 select-none ${
                        isActive
                          ? 'bg-gradient-to-b from-emerald-400 via-emerald-600 to-teal-700 text-white border-t border-emerald-200/70 border-b border-teal-900/90 shadow-[0_6px_16px_rgba(16,185,129,0.45),inset_0_1px_1px_rgba(255,255,255,0.5)] -translate-y-0.5 scale-[1.04] ring-1 ring-emerald-300/40'
                          : 'text-emerald-400/90 hover:text-emerald-300 hover:bg-emerald-500/10 hover:-translate-y-0.5 active:translate-y-0 border border-transparent'
                      }`}
                    >
                      <TrendingUp className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-emerald-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]' : 'text-emerald-400'}`} />
                      <span className={isActive ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]' : ''}>{m.label}</span>
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-200 shadow-[0_0_8px_#a7f3d0] animate-pulse" />
                      )}
                    </button>
                  </React.Fragment>
                );
              }

              return (
                <button
                  key={m.id}
                  onClick={() => onSelectTab(m.id)}
                  title={m.label}
                  className={`relative flex items-center justify-center px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition-all duration-200 shrink-0 select-none ${
                    isActive
                      ? 'bg-gradient-to-b from-blue-400 via-blue-600 to-indigo-700 text-white border-t border-cyan-200/70 border-b border-indigo-950/90 shadow-[0_6px_16px_rgba(37,99,235,0.45),inset_0_1px_1px_rgba(255,255,255,0.5)] -translate-y-0.5 scale-[1.04] ring-1 ring-cyan-300/40'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 hover:-translate-y-0.5 active:translate-y-0 border border-transparent'
                  }`}
                >
                  <span className={`sm:hidden ${isActive ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]' : ''}`}>{shortLabel}</span>
                  <span className={`hidden sm:inline ${isActive ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]' : ''}`}>{m.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9] animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
