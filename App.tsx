import React, { useState, useEffect } from 'react';
import { CalculationInput, CalculationResult, PeriodType, RateType } from './types';
import { calculateCompoundInterest } from './utils/calculations';
import { formatCurrency } from './utils/formatters';
import { InfoSection } from './components/InfoSection';
import { ResultsChart } from './components/ResultsChart';
import { ResultsTable } from './components/ResultsTable';
import { Calculator, DollarSign, Eraser, TrendingUp } from 'lucide-react';

function App() {
  const [input, setInput] = useState<CalculationInput>({
    initialValue: 0,
    monthlyValue: 0,
    interestRate: 8,
    interestRateType: 'yearly',
    period: 1,
    periodType: 'years',
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculate = () => {
    const res = calculateCompoundInterest(input);
    setResult(res);
  };

  const reset = () => {
    setInput({
      initialValue: 0,
      monthlyValue: 0,
      interestRate: 8,
      interestRateType: 'yearly',
      period: 1,
      periodType: 'years',
    });
    setResult(null);
  };

  useEffect(() => {
    // Optional: Pre-fill with a demo scenario
  }, []);

  const handleInputChange = (field: keyof CalculationInput, value: any) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">
      {/* Header */}
      <header className="bg-[#00bd56] text-white shadow-lg sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-6 h-6" />
            <h1 className="text-xl font-bold tracking-wide">Simulador de Juros Compostos</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Input Card */}
        <div className="bg-white rounded-xl shadow-md border border-[#00bd56]/20 p-6 mb-10">
            <div className="flex items-center space-x-2 mb-6 border-b border-[#00bd56]/20 pb-4">
                <Calculator className="text-[#00bd56] w-6 h-6" />
                <h2 className="text-xl font-bold text-[#00bd56]">Parâmetros da Simulação</h2>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Initial Value */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">Valor Inicial</label>
              <div className="relative rounded-md shadow-sm group">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">R$</span>
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="block w-full rounded-md border-gray-300 pl-10 py-3 focus:border-[#00bd56] focus:ring-[#00bd56] sm:text-lg bg-gray-50 border transition-colors outline-none"
                  placeholder="0,00"
                  value={input.initialValue || ''}
                  onChange={(e) => handleInputChange('initialValue', parseFloat(e.target.value) || 0)}
                />
              </div>
            </div>

            {/* Monthly Value */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">Valor Mensal</label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">R$</span>
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="block w-full rounded-md border-gray-300 pl-10 py-3 focus:border-[#00bd56] focus:ring-[#00bd56] sm:text-lg bg-gray-50 border transition-colors outline-none"
                  placeholder="0,00"
                  value={input.monthlyValue || ''}
                  onChange={(e) => handleInputChange('monthlyValue', parseFloat(e.target.value) || 0)}
                />
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">Taxa de Juros</label>
              <div className="flex rounded-md shadow-sm">
                 <div className="relative flex-grow focus-within:z-10">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">%</span>
                    </div>
                    <input
                    type="number"
                    min="0"
                    step="0.01"
                    className="block w-full rounded-l-md border-gray-300 pl-8 py-3 focus:border-[#00bd56] focus:ring-[#00bd56] sm:text-lg bg-gray-50 border border-r-0 outline-none"
                    placeholder="0.00"
                    value={input.interestRate || ''}
                    onChange={(e) => handleInputChange('interestRate', parseFloat(e.target.value) || 0)}
                    />
                 </div>
                <select
                  className="inline-flex items-center rounded-r-md border border-gray-300 bg-gray-100 px-3 text-gray-600 sm:text-sm focus:border-[#00bd56] focus:ring-[#00bd56] outline-none cursor-pointer hover:bg-gray-200"
                  value={input.interestRateType}
                  onChange={(e) => handleInputChange('interestRateType', e.target.value as RateType)}
                >
                  <option value="monthly">Mensal</option>
                  <option value="yearly">Anual</option>
                </select>
              </div>
            </div>

            {/* Period */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">Período</label>
              <div className="flex rounded-md shadow-sm">
                <input
                  type="number"
                  min="1"
                  className="block w-full flex-grow rounded-l-md border-gray-300 px-4 py-3 focus:border-[#00bd56] focus:ring-[#00bd56] sm:text-lg bg-gray-50 border border-r-0 outline-none"
                  value={input.period || ''}
                  onChange={(e) => handleInputChange('period', parseFloat(e.target.value) || 0)}
                />
                <select
                  className="inline-flex items-center rounded-r-md border border-gray-300 bg-gray-100 px-3 text-gray-600 sm:text-sm focus:border-[#00bd56] focus:ring-[#00bd56] outline-none cursor-pointer hover:bg-gray-200"
                  value={input.periodType}
                  onChange={(e) => handleInputChange('periodType', e.target.value as PeriodType)}
                >
                  <option value="months">Meses</option>
                  <option value="years">Anos</option>
                </select>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#00bd56]/20 pt-6">
            <button
              onClick={calculate}
              className="w-full sm:w-auto px-8 py-3 bg-[#00bd56] hover:brightness-110 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-lg flex items-center justify-center gap-2"
            >
              <DollarSign className="w-5 h-5" />
              Calcular
            </button>

            <button
                onClick={reset}
                className="w-full sm:w-auto text-gray-500 hover:text-[#00bd56] font-medium transition-colors flex items-center justify-center gap-2 px-4 py-2"
            >
                <Eraser className="w-4 h-4" />
                Limpar campos
            </button>
          </div>
        </div>

        {/* Results Section */}
        {result && (
            <div className="space-y-10 animate-fade-in-up">
                
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Final Total */}
                    <div className="bg-[#00bd56] rounded-xl p-6 text-white shadow-xl transform transition hover:scale-105">
                        <p className="text-green-50 font-medium mb-1">Valor Total Final</p>
                        <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">
                            {formatCurrency(result.summary.totalAccumulated)}
                        </h3>
                    </div>

                    {/* Invested */}
                    <div className="bg-white rounded-xl p-6 border border-[#00bd56]/30 shadow-md">
                        <p className="text-[#00bd56] font-medium mb-1">Total Investido</p>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                            {formatCurrency(result.summary.totalInvested)}
                        </h3>
                    </div>

                    {/* Interest */}
                    <div className="bg-white rounded-xl p-6 border border-[#00bd56]/30 shadow-md">
                        <p className="text-[#00bd56] font-medium mb-1">Total em Juros</p>
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#00bd56]">
                            {formatCurrency(result.summary.totalInterest)}
                        </h3>
                    </div>
                </div>

                {/* Chart Section */}
                <ResultsChart data={result.monthlyData} />

                {/* Table Section */}
                <ResultsTable data={result.monthlyData} />

            </div>
        )}

        {/* Educational Content */}
        <InfoSection />

      </main>

      <footer className="bg-[#00bd56] text-white py-8 mt-20 text-center">
        <div className="max-w-6xl mx-auto px-4">
            <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Simulador de Juros Compostos. Todos os direitos reservados.</p>
            <p className="text-xs mt-2 text-white/80">Os cálculos são estimativas e não garantem rentabilidade futura.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
