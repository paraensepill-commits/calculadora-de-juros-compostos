import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { MonthlyData } from '../types';
import { formatCurrency } from '../utils/formatters';

interface ResultsChartProps {
  data: MonthlyData[];
}

export const ResultsChart: React.FC<ResultsChartProps> = ({ data }) => {
  const displayData = data.length > 50 
    ? data.filter((_, index) => index % Math.ceil(data.length / 30) === 0 || index === data.length - 1)
    : data;

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-sm border border-[#00bd56]/20">
      <h3 className="text-center font-bold text-lg text-[#00bd56] mb-6">Gráfico de Evolução Patrimonial</h3>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={displayData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f3f4f6" vertical={false} />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 12, fill: '#666' }}
            tickLine={false}
            axisLine={{ stroke: '#e5e7eb' }}
            label={{ value: 'Tempo (meses)', position: 'insideBottomRight', offset: -10, fontSize: 12 }}
          />
          <YAxis 
            tickFormatter={(value) => {
              if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
              if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
              return value;
            }}
            tick={{ fontSize: 12, fill: '#666' }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip 
            formatter={(value: number) => [formatCurrency(value), '']}
            labelFormatter={(label) => `Mês ${label}`}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          
          {/* Total Invested - Neutral Gray Line for contrast against the single green */}
          <Line
            type="monotone"
            dataKey="totalInvested"
            name="Valor Investido"
            stroke="#374151" // gray-700
            strokeWidth={2}
            dot={{ r: 4, fill: '#fff', stroke: '#374151', strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />

          {/* Total Accumulated - The Single Green Color */}
          <Line
            type="monotone"
            dataKey="totalAccumulated"
            name="Total Acumulado"
            stroke="#00bd56" 
            strokeWidth={3}
            dot={{ r: 4, fill: '#fff', stroke: '#00bd56', strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />

          {/* Interest area fill */}
          <Area 
            type="monotone" 
            dataKey="totalInterest" 
            name="Total em Juros (Área)" 
            fill="#00bd56" 
            stroke="none" 
            opacity={0.15} 
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
