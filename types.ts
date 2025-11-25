export type PeriodType = 'months' | 'years';
export type RateType = 'monthly' | 'yearly';

export interface CalculationInput {
  initialValue: number;
  monthlyValue: number;
  interestRate: number;
  interestRateType: RateType;
  period: number;
  periodType: PeriodType;
}

export interface MonthlyData {
  month: number;
  interest: number; // Interest earned this month
  totalInvested: number; // Cumulative principle
  totalInterest: number; // Cumulative interest
  totalAccumulated: number; // totalInvested + totalInterest
}

export interface CalculationResult {
  monthlyData: MonthlyData[];
  summary: {
    totalInvested: number;
    totalInterest: number;
    totalAccumulated: number;
  };
}