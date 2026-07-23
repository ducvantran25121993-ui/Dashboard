import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Calendar, Filter, TrendingUp, Zap, Target, DollarSign, Activity } from 'lucide-react';
import { DailyRecord } from '../services/googleSheetsService';
import { formatVND } from '../utils/formatters';

interface DailyDataChartProps {
  dailyRecords: DailyRecord[];
  activeMonth: number;
  monthLabel: string;
}

export const DailyDataChart: React.FC<DailyDataChartProps> = ({
  dailyRecords,
  activeMonth,
  monthLabel,
}) => {
  const [selectedService, setSelectedService] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [metric, setMetric] = useState<'leadTho' | 'leadChatLuong' | 'budgetVnd'>('leadTho');
  const [chartType, setChartType] = useState<'area' | 'line' | 'bar'>('area');

  // Filter records for active month
  const monthRecords = dailyRecords.filter((r) => r.monthNum === activeMonth);

  // Extract unique services and regions for filters
  const uniqueServices = Array.from(new Set(monthRecords.map((r) => r.service))).sort();
  const uniqueRegions = Array.from(new Set(monthRecords.map((r) => r.region))).sort();

  // Apply filters
  const filteredRecords = monthRecords.filter((r) => {
    const matchSvc = selectedService === 'all' || r.service === selectedService;
    const matchReg = selectedRegion === 'all' || r.region === selectedRegion;
    return matchSvc && matchReg;
  });

  // Group by day of month (e.g. Day 1, Day 2, ... Day 31)
  const dayMap: Record<number, { day: number; dateStr: string; leadTho: number; leadChatLuong: number; budgetVnd: number; services: Record<string, number> }> = {};

  filteredRecords.forEach((r) => {
    if (!dayMap[r.dayNum]) {
      dayMap[r.dayNum] = {
        day: r.dayNum,
        dateStr: `${r.dayNum}/${r.monthNum}`,
        leadTho: 0,
        leadChatLuong: 0,
        budgetVnd: 0,
        services: {},
      };
    }

    dayMap[r.dayNum].leadTho += r.leadTho || 0;
    dayMap[r.dayNum].leadChatLuong += r.leadChatLuong || 0;
    dayMap[r.dayNum].budgetVnd += r.budgetVnd || 0;

    if (!dayMap[r.dayNum].services[r.service]) {
      dayMap[r.dayNum].services[r.service] = 0;
    }
    dayMap[r.dayNum].services[r.service] += r.leadTho || 0;
  });

  const chartData = Object.values(dayMap).sort((a, b) => a.day - b.day);

  // Calculate totals for KPIs
  const totalLeadsTho = chartData.reduce((sum, d) => sum + d.leadTho, 0);
  const totalLeadsChatLuong = chartData.reduce((sum, d) => sum + d.leadChatLuong, 0);
  const totalBudget = chartData.reduce((sum, d) => sum + d.budgetVnd, 0);
  const avgLeadsPerDay = chartData.length > 0 ? Math.round(totalLeadsTho / chartData.length) : 0;
  const peakDayObj = [...chartData].sort((a, b) => b.leadTho - a.leadTho)[0];

  const getMetricLabel = () => {
    if (metric === 'leadTho') return 'Lead Thô (Data Ngày)';
    if (metric === 'leadChatLuong') return 'Lead Chất Lượng';
    return 'Ngân Sách (VNĐ)';
  };

  const getMetricColor = () => {
    if (metric === 'leadTho') return '#06b6d4';
    if (metric === 'leadChatLuong') return '#10b981';
    return '#f59e0b';
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 border border-slate-700 p-3.5 rounded-xl shadow-xl text-xs space-y-1.5 z-50 min-w-[210px]">
          <p className="font-bold text-white text-sm border-b border-slate-800 pb-1 flex items-center justify-between">
            <span>Ngày {data.dateStr}</span>
            <span className="text-cyan-400 font-semibold">{monthLabel}</span>
          </p>
          <div className="flex justify-between items-center text-slate-300 pt-1">
            <span className="text-cyan-400 font-medium">Data / Lead Thô:</span>
            <span className="font-bold text-cyan-300 text-sm">
              {data.leadTho.toLocaleString('vi-VN')} data
            </span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span className="text-emerald-400 font-medium">Lead Chất Lượng:</span>
            <span className="font-bold text-emerald-300">
              {data.leadChatLuong.toLocaleString('vi-VN')}
            </span>
          </div>
          {data.budgetVnd > 0 && (
            <div className="flex justify-between items-center text-slate-300 border-t border-slate-800/80 pt-1">
              <span className="text-amber-400 font-medium">Ngân Sách Ngày:</span>
              <span className="font-bold text-amber-300">
                {formatVND(data.budgetVnd)}
              </span>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-5">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Activity className="w-4 h-4" />
            </div>
            <span>Data Ngày Theo Từng Dịch Vụ ({monthLabel})</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Chi tiết biến động Data ngày từ sheet <strong className="text-teal-400">Data Ngày</strong> • {chartData.length} ngày trong tháng
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Service Selector */}
          <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700/80 px-2.5 py-1 rounded-xl text-xs">
            <span className="text-slate-400 font-medium">Dịch vụ:</span>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
            >
              <option value="all" className="bg-slate-900 text-white">Tất cả ({uniqueServices.length})</option>
              {uniqueServices.map((svc) => (
                <option key={svc} value={svc} className="bg-slate-900 text-white">
                  {svc}
                </option>
              ))}
            </select>
          </div>

          {/* Region Selector */}
          <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700/80 px-2.5 py-1 rounded-xl text-xs">
            <span className="text-slate-400 font-medium">Khu vực:</span>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
            >
              <option value="all" className="bg-slate-900 text-white">Tất cả khu vực</option>
              {uniqueRegions.map((reg) => (
                <option key={reg} value={reg} className="bg-slate-900 text-white">
                  {reg}
                </option>
              ))}
            </select>
          </div>

          {/* Metric Selector */}
          <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setMetric('leadTho')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                metric === 'leadTho'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Lead Thô
            </button>
            <button
              onClick={() => setMetric('leadChatLuong')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                metric === 'leadChatLuong'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Chất Lượng
            </button>
            <button
              onClick={() => setMetric('budgetVnd')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                metric === 'budgetVnd'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ngân Sách
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards for Daily Data */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3">
          <span className="text-[11px] text-slate-400 font-medium uppercase">Tổng Lead Thô (Data)</span>
          <p className="text-xl font-bold text-cyan-400 mt-1">
            {totalLeadsTho.toLocaleString('vi-VN')}
          </p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3">
          <span className="text-[11px] text-slate-400 font-medium uppercase">Lead Chất Lượng</span>
          <p className="text-xl font-bold text-emerald-400 mt-1">
            {totalLeadsChatLuong.toLocaleString('vi-VN')}
          </p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3">
          <span className="text-[11px] text-slate-400 font-medium uppercase">TB Data / Ngày</span>
          <p className="text-xl font-bold text-blue-400 mt-1">
            {avgLeadsPerDay.toLocaleString('vi-VN')} data/ngày
          </p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3">
          <span className="text-[11px] text-slate-400 font-medium uppercase">Peak Cao Nhất</span>
          <p className="text-xl font-bold text-amber-400 mt-1">
            {peakDayObj ? `${peakDayObj.leadTho} data (Ngày ${peakDayObj.day})` : '0'}
          </p>
        </div>
      </div>

      {/* Main Time Series Chart */}
      {chartData.length === 0 ? (
        <div className="py-12 text-center text-slate-500 text-sm bg-slate-800/30 rounded-xl border border-slate-800">
          Chưa có dữ liệu Data Ngày cho {monthLabel} (hoặc bộ lọc được chọn không có kết quả).
        </div>
      ) : (
        <div className="h-[360px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'area' ? (
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <defs>
                  <linearGradient id="metricGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={getMetricColor()} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={getMetricColor()} stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="dateStr" stroke="#cbd5e1" fontSize={11} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} width={45} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey={metric}
                  name={getMetricLabel()}
                  stroke={getMetricColor()}
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#metricGradient)"
                />
              </AreaChart>
            ) : chartType === 'line' ? (
              <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="dateStr" stroke="#cbd5e1" fontSize={11} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} width={45} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey={metric}
                  name={getMetricLabel()}
                  stroke={getMetricColor()}
                  strokeWidth={3}
                  dot={{ r: 3, fill: getMetricColor() }}
                />
              </LineChart>
            ) : (
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="dateStr" stroke="#cbd5e1" fontSize={11} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} width={45} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey={metric} name={getMetricLabel()} fill={getMetricColor()} radius={[4, 4, 0, 0]} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};
