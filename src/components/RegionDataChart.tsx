import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Users, ArrowUpDown, BarChart2, LayoutList } from 'lucide-react';
import { RegionData } from '../data/revenueData';
import { formatPercent } from '../utils/formatters';

interface RegionDataChartProps {
  regions: RegionData[];
  monthLabel: string;
}

export const RegionDataChart: React.FC<RegionDataChartProps> = ({
  regions,
  monthLabel,
}) => {
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc' | 'alpha'>('desc');
  const [isHorizontal, setIsHorizontal] = useState(false);

  // Compute total data for the region (use region.totalData or sum of services dataCount)
  const getRegionDataCount = (r: RegionData): number => {
    if (r.totalData !== undefined && r.totalData > 0) return r.totalData;
    return r.services.reduce((acc, s) => acc + (s.dataCount || 0), 0);
  };

  const grandTotalData = regions.reduce((acc, r) => acc + getRegionDataCount(r), 0);

  // Prepare and sort chart data
  const chartData = [...regions]
    .map((r) => {
      const dataCount = getRegionDataCount(r);
      return {
        name: r.name,
        dataCount,
        costVAT: r.costVAT || 0,
        revenue: r.revenue || 0,
        sharePercent: grandTotalData > 0 ? (dataCount / grandTotalData) * 100 : 0,
        services: r.services,
      };
    })
    .sort((a, b) => {
      if (sortOrder === 'desc') return b.dataCount - a.dataCount;
      if (sortOrder === 'asc') return a.dataCount - b.dataCount;
      return a.name.localeCompare(b.name);
    });

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 border border-slate-700 p-3.5 rounded-xl shadow-xl text-xs space-y-1.5 z-50 min-w-[210px]">
          <p className="font-bold text-white text-sm border-b border-slate-800 pb-1 flex items-center justify-between">
            <span>{data.name}</span>
            <span className="text-cyan-400 font-semibold">{monthLabel}</span>
          </p>
          <div className="flex justify-between items-center text-slate-300 pt-1">
            <span className="text-cyan-400 font-medium">Tổng Data:</span>
            <span className="font-bold text-cyan-300 text-sm">
              {data.dataCount.toLocaleString('vi-VN')} data
            </span>
          </div>
          <div className="flex justify-between items-center text-slate-400">
            <span>Tỷ trọng Data:</span>
            <span className="font-semibold text-slate-200">
              {formatPercent(data.sharePercent)}
            </span>
          </div>
          {data.services && data.services.length > 0 && (
            <div className="border-t border-slate-800/80 pt-1 mt-1 space-y-1">
              <span className="text-slate-400 font-medium text-[11px]">Chi tiết dịch vụ:</span>
              <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[11px]">
                {data.services.map((s: any, idx: number) => (
                  <div key={idx} className="flex justify-between text-slate-300">
                    <span className="text-slate-400">{s.name}:</span>
                    <span className="font-semibold">{s.dataCount}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Users className="w-4 h-4" />
            </div>
            <span>Data Tháng Theo Từng Khu Vực (Cột Data)</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {monthLabel} • Tổng lượng Data toàn hệ thống:{' '}
            <strong className="text-cyan-400">{grandTotalData.toLocaleString('vi-VN')} data</strong>
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setIsHorizontal(false)}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-all ${
                !isHorizontal
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Cột đứng"
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Đứng</span>
            </button>
            <button
              onClick={() => setIsHorizontal(true)}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-all ${
                isHorizontal
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Cột ngang"
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ngang</span>
            </button>
          </div>

          <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() =>
                setSortOrder((prev) =>
                  prev === 'desc' ? 'asc' : prev === 'asc' ? 'alpha' : 'desc'
                )
              }
              className="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white font-medium flex items-center gap-1.5"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                {sortOrder === 'desc'
                  ? 'Giảm dần'
                  : sortOrder === 'asc'
                  ? 'Tăng dần'
                  : 'Tên A-Z'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {isHorizontal ? (
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{ top: 10, right: 30, left: 60, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
              <XAxis
                type="number"
                stroke="#94a3b8"
                fontSize={11}
              />
              <YAxis
                type="category"
                dataKey="name"
                stroke="#cbd5e1"
                fontSize={11}
                tickLine={false}
                width={85}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
              <Bar dataKey="dataCount" name="Số lượng Data" radius={[0, 6, 6, 0]}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? '#06b6d4' : '#0891b2'}
                    opacity={index === 0 ? 1 : 0.85}
                  />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 10, left: 10, bottom: 45 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis
                dataKey="name"
                stroke="#cbd5e1"
                fontSize={11}
                interval={0}
                angle={-35}
                textAnchor="end"
                tickLine={false}
              />
              <YAxis
                stroke="#94a3b8"
                fontSize={11}
                width={50}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
              <Bar dataKey="dataCount" name="Số lượng Data" radius={[6, 6, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? '#06b6d4' : '#0891b2'}
                    opacity={index === 0 ? 1 : 0.85}
                  />
                ))}
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};
