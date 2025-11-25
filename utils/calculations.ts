import { CalculationInput, CalculationResult, MonthlyData } from '../types';

export const calculateCompoundInterest = (input: CalculationInput): CalculationResult => {
  const { initialValue, monthlyValue, interestRate, interestRateType, period, periodType } = input;

  // 1. Normalize Period to Months
  const totalMonths = periodType === 'years' ? period * 12 : period;

  // 2. Normalize Interest Rate to Monthly
  // Formula for Annual to Monthly: (1 + annual_rate)^(1/12) - 1
  let monthlyRate = 0;
  if (interestRateType === 'yearly') {
    monthlyRate = Math.pow(1 + interestRate / 100, 1 / 12) - 1;
  } else {
    monthlyRate = interestRate / 100;
  }

  const monthlyData: MonthlyData[] = [];
  
  let currentBalance = initialValue; 
  let totalInterest = 0;

  // We iterate from 0 to totalMonths - 1.
  // Row "0" represents the status after the 1st month of interest has been applied.
  // The logic is: 
  // 1. Calculate Interest on Start Balance.
  // 2. Add Interest to Balance.
  // 3. Record State (This is the end of Month i+1 relative to start, labeled "i").
  // 4. Add Monthly Deposit to Balance (for next month's calculation).
  
  for (let i = 0; i < totalMonths; i++) {
    const interestEarned = currentBalance * monthlyRate;
    const accumulatedInterest = totalInterest + interestEarned;
    const rowAccumulated = currentBalance + interestEarned;
    
    // In the reference table:
    // Row 0 Invested = Initial. 
    // Row 1 Invested = Initial + 1 Monthly Deposit.
    // So Row i Invested = Initial + i * Monthly.
    const rowInvested = initialValue + (i * monthlyValue);

    monthlyData.push({
      month: i,
      interest: interestEarned,
      totalInvested: rowInvested,
      totalInterest: accumulatedInterest,
      totalAccumulated: rowAccumulated,
    });

    // Prepare for next month
    totalInterest = accumulatedInterest;
    currentBalance = rowAccumulated + monthlyValue;
  }

  return {
    monthlyData,
    summary: {
      // The total invested includes the final monthly deposit which happens at the end of the last period
      totalInvested: initialValue + (totalMonths * monthlyValue),
      totalInterest: totalInterest,
      // The final accumulated balance includes the last monthly deposit
      totalAccumulated: currentBalance,
    },
  };
};