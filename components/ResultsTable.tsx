import React from 'react';
import { MonthlyData } from '../types';
import { formatCurrency } from '../utils/formatters';

interface ResultsTableProps {
  data: MonthlyData[];
}

export const ResultsTable: React.FC<ResultsTableProps> = ({ data }) => {
  return (
    <div className="mt-8">
      <h3 className="text-center font-bold text-xl text-[#1877F2] mb-4">Tabela:</h3>
      <div className="bg-white rounded-lg shadow-sm border border-[#1877F2]/20 overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar max-h-[500px]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#1877F2] text-white font-semibold sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-center">Mês</th>
                <th className="px-6 py-3 text-right">Juros</th>
                <th className="px-6 py-3 text-right">Total Investido</th>
                <th className="px-6 py-3 text-right">Total Juros</th>
                <th className="px-6 py-3 text-right">Total Acumulado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row) => (
                <tr key={row.month} className="hover:bg-[#1877F2]/5 transition-colors duration-150">
                  <td className="px-6 py-4 text-center font-medium text-gray-600">{row.month}</td>
                  <td className="px-6 py-4 text-right text-gray-600">{formatCurrency(row.interest)}</td>
                  <td className="px-6 py-4 text-right text-gray-600">{formatCurrency(row.totalInvested)}</td>
                  <td className="px-6 py-4 text-right text-gray-600">
                      {formatCurrency(row.totalInterest)}
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-[#1877F2]">{formatCurrency(row.totalAccumulated)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};