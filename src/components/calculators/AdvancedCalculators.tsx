
import React from 'react';
import { Calculator } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

interface CalculatorConfig {
  title: string;
  fields: {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    min?: number;
    max?: number;
    step?: number;
    useSlider?: boolean;
    options?: Array<{value: string; label: string}>;
  }[];
  calculate: (values: { [key: string]: string | number | boolean }) => number | { [key: string]: number };
  formatResult?: (result: number | { [key: string]: number }) => React.ReactNode;
}

const calculatorConfigs: { [key: string]: CalculatorConfig } = {
  gst: {
    title: 'GST Calculator',
    fields: [
      { id: 'amount', label: 'Amount', type: 'number', placeholder: 'Enter amount' },
      { id: 'gstRate', label: 'GST Rate (%)', type: 'number', placeholder: 'Enter GST rate', useSlider: true, min: 0, max: 28, step: 1 },
    ],
    calculate: (values) => {
      const amount = parseFloat(values.amount as string) || 0;
      const rate = (parseFloat(values.gstRate as string) || 0) / 100;
      const gstAmount = amount * rate;
      return {
        gstAmount,
        totalAmount: amount + gstAmount
      };
    },
    formatResult: (result) => {
      const res = result as { gstAmount: number, totalAmount: number };
      return (
        <div>
          <p className="font-semibold">GST Amount: ₹{res.gstAmount.toFixed(2)}</p>
          <p className="font-semibold mt-2">Total Amount: ₹{res.totalAmount.toFixed(2)}</p>
        </div>
      );
    }
  },
  hra: {
    title: 'HRA Calculator',
    fields: [
      { id: 'basicSalary', label: 'Basic Salary', type: 'number', placeholder: 'Enter basic salary' },
      { id: 'hraReceived', label: 'HRA Received', type: 'number', placeholder: 'Enter HRA received' },
      { id: 'rentPaid', label: 'Rent Paid', type: 'number', placeholder: 'Enter rent paid' },
      { id: 'isMetro', label: 'Metro City', type: 'checkbox', placeholder: 'Is Metro City?' },
    ],
    calculate: (values) => {
      const basic = parseFloat(values.basicSalary as string) || 0;
      const hraReceived = parseFloat(values.hraReceived as string) || 0;
      const rentPaid = parseFloat(values.rentPaid as string) || 0;
      const isMetro = Boolean(values.isMetro);
      
      // HRA exemption calculation
      const actualHRA = hraReceived;
      const rentMinusBasic = rentPaid - (basic * 0.1);
      const basicPercent = basic * (isMetro ? 0.5 : 0.4);
      
      const exemption = Math.min(actualHRA, rentMinusBasic, basicPercent);
      return Math.max(0, exemption);
    }
  },
  lumpsum: {
    title: 'Lumpsum Calculator',
    fields: [
      { id: 'principal', label: 'Investment Amount', type: 'number', placeholder: 'Enter investment amount' },
      { id: 'rate', label: 'Expected Return (%)', type: 'number', placeholder: 'Enter expected return', useSlider: true, min: 1, max: 20, step: 0.5 },
      { id: 'years', label: 'Time Period (Years)', type: 'number', placeholder: 'Enter time period', useSlider: true, min: 1, max: 30, step: 1 },
    ],
    calculate: (values) => {
      const p = parseFloat(values.principal as string) || 0;
      const r = (parseFloat(values.rate as string) || 0) / 100;
      const t = parseFloat(values.years as string) || 0;
      return p * Math.pow(1 + r, t);
    }
  },
  nps: {
    title: 'NPS Calculator',
    fields: [
      { id: 'monthlyContribution', label: 'Monthly Contribution', type: 'number', placeholder: 'Enter monthly contribution' },
      { id: 'age', label: 'Current Age', type: 'number', placeholder: 'Enter current age', useSlider: true, min: 18, max: 60, step: 1 },
      { id: 'expectedReturn', label: 'Expected Return (%)', type: 'number', placeholder: 'Enter expected return', useSlider: true, min: 1, max: 20, step: 0.5 },
    ],
    calculate: (values) => {
      const monthly = parseFloat(values.monthlyContribution as string) || 0;
      const age = parseFloat(values.age as string) || 0;
      const returnRate = (parseFloat(values.expectedReturn as string) || 0) / 100;
      const monthlyRate = returnRate / 12;
      const months = (60 - age) * 12;
      
      let corpus = 0;
      for (let i = 0; i < months; i++) {
        corpus = (corpus + monthly) * (1 + monthlyRate);
      }
      
      return corpus;
    }
  },
  rd: {
    title: 'RD Calculator',
    fields: [
      { id: 'monthlyInvestment', label: 'Monthly Investment', type: 'number', placeholder: 'Enter monthly investment' },
      { id: 'rate', label: 'Interest Rate (%)', type: 'number', placeholder: 'Enter interest rate', useSlider: true, min: 1, max: 10, step: 0.25 },
      { id: 'years', label: 'Time Period (Years)', type: 'number', placeholder: 'Enter time period', useSlider: true, min: 1, max: 10, step: 1 },
    ],
    calculate: (values) => {
      const p = parseFloat(values.monthlyInvestment as string) || 0;
      const r = (parseFloat(values.rate as string) || 0) / 100 / 12;
      const n = (parseFloat(values.years as string) || 0) * 12;
      
      return p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    }
  },
  businessSetup: {
    title: 'Business Setup Calculator',
    fields: [
      { id: 'setupCost', label: 'Setup Cost', type: 'number', placeholder: 'Enter setup cost' },
      { id: 'monthlyExpense', label: 'Monthly Expense', type: 'number', placeholder: 'Enter monthly expense' },
      { id: 'bufferMonths', label: 'Buffer Months', type: 'number', placeholder: 'Enter buffer months', useSlider: true, min: 1, max: 12, step: 1 },
    ],
    calculate: (values) => {
      const setupCost = parseFloat(values.setupCost as string) || 0;
      const monthlyExpense = parseFloat(values.monthlyExpense as string) || 0;
      const bufferMonths = parseFloat(values.bufferMonths as string) || 0;
      
      return setupCost + (monthlyExpense * bufferMonths);
    }
  },
  retirementPlanning: {
    title: 'Retirement Planning Calculator',
    fields: [
      { id: 'currentAge', label: 'Current Age', type: 'number', placeholder: 'Enter current age', useSlider: true, min: 20, max: 60, step: 1 },
      { id: 'retirementAge', label: 'Retirement Age', type: 'number', placeholder: 'Enter retirement age', useSlider: true, min: 40, max: 80, step: 1 },
      { id: 'monthlyExpense', label: 'Monthly Expense', type: 'number', placeholder: 'Enter current monthly expense' },
      { id: 'inflation', label: 'Inflation Rate (%)', type: 'number', placeholder: 'Enter inflation rate', useSlider: true, min: 1, max: 10, step: 0.5 },
      { id: 'returnRate', label: 'Investment Return (%)', type: 'number', placeholder: 'Enter expected return', useSlider: true, min: 1, max: 15, step: 0.5 },
    ],
    calculate: (values) => {
      const currentAge = parseFloat(values.currentAge as string) || 0;
      const retirementAge = parseFloat(values.retirementAge as string) || 0;
      const monthlyExpense = parseFloat(values.monthlyExpense as string) || 0;
      const inflation = (parseFloat(values.inflation as string) || 0) / 100;
      const returnRate = (parseFloat(values.returnRate as string) || 0) / 100;
      
      const yearsToRetirement = retirementAge - currentAge;
      const lifeExpectancy = 85;
      const retirementYears = lifeExpectancy - retirementAge;
      
      // Future monthly expense at retirement
      const futureMonthlyExpense = monthlyExpense * Math.pow(1 + inflation, yearsToRetirement);
      
      // Corpus needed for retirement
      const monthlyRate = returnRate / 12;
      const inflationAdjustedReturn = (1 + returnRate) / (1 + inflation) - 1;
      const monthlyInflationAdjustedRate = inflationAdjustedReturn / 12;
      const retirementMonths = retirementYears * 12;
      
      let corpus = 0;
      if (monthlyInflationAdjustedRate > 0) {
        corpus = futureMonthlyExpense * (1 - Math.pow(1 + monthlyInflationAdjustedRate, -retirementMonths)) / monthlyInflationAdjustedRate;
      } else {
        corpus = futureMonthlyExpense * retirementMonths;
      }
      
      // Monthly investment needed
      const monthlySaving = corpus / ((Math.pow(1 + monthlyRate, yearsToRetirement * 12) - 1) / monthlyRate);
      
      return {
        corpus,
        monthlySaving
      };
    },
    formatResult: (result) => {
      const res = result as { corpus: number, monthlySaving: number };
      return (
        <div>
          <p className="font-semibold">Corpus Needed: ₹{res.corpus.toFixed(2)}</p>
          <p className="font-semibold mt-2">Monthly Investment: ₹{res.monthlySaving.toFixed(2)}</p>
        </div>
      );
    }
  },
  mutualFund: {
    title: 'Mutual Fund Returns Calculator',
    fields: [
      { id: 'investment', label: 'Investment Amount', type: 'number', placeholder: 'Enter investment amount' },
      { id: 'expectedReturn', label: 'Expected Return (%)', type: 'number', placeholder: 'Enter expected return', useSlider: true, min: 1, max: 25, step: 0.5 },
      { id: 'years', label: 'Time Period (Years)', type: 'number', placeholder: 'Enter time period', useSlider: true, min: 1, max: 30, step: 1 },
    ],
    calculate: (values) => {
      const investment = parseFloat(values.investment as string) || 0;
      const returnRate = (parseFloat(values.expectedReturn as string) || 0) / 100;
      const years = parseFloat(values.years as string) || 0;
      
      const futureValue = investment * Math.pow(1 + returnRate, years);
      const gain = futureValue - investment;
      
      return {
        futureValue,
        absoluteReturn: (gain / investment) * 100,
        gain
      };
    },
    formatResult: (result) => {
      const res = result as { futureValue: number, absoluteReturn: number, gain: number };
      return (
        <div>
          <p className="font-semibold">Future Value: ₹{res.futureValue.toFixed(2)}</p>
          <p className="font-semibold mt-2">Absolute Return: {res.absoluteReturn.toFixed(2)}%</p>
          <p className="font-semibold mt-2">Gain: ₹{res.gain.toFixed(2)}</p>
        </div>
      );
    }
  },
  simpleCompound: {
    title: 'Simple Compound Interest Calculator',
    fields: [
      { id: 'principal', label: 'Principal Amount', type: 'number', placeholder: 'Enter principal amount' },
      { id: 'rate', label: 'Interest Rate (%)', type: 'number', placeholder: 'Enter interest rate', useSlider: true, min: 1, max: 20, step: 0.5 },
      { id: 'years', label: 'Time Period (Years)', type: 'number', placeholder: 'Enter time period', useSlider: true, min: 1, max: 30, step: 1 },
      { id: 'frequency', label: 'Compounding Frequency', type: 'select', placeholder: 'Select frequency', options: [
        { value: '1', label: 'Annually' },
        { value: '2', label: 'Semi-Annually' },
        { value: '4', label: 'Quarterly' },
        { value: '12', label: 'Monthly' },
      ]},
    ],
    calculate: (values) => {
      const p = parseFloat(values.principal as string) || 0;
      const r = (parseFloat(values.rate as string) || 0) / 100;
      const t = parseFloat(values.years as string) || 0;
      const n = parseFloat(values.frequency as string) || 1;
      
      const simpleInterest = p * r * t;
      const compoundAmount = p * Math.pow(1 + r/n, n*t);
      const compoundInterest = compoundAmount - p;
      
      return {
        simpleInterest,
        compoundInterest,
        difference: compoundInterest - simpleInterest
      };
    },
    formatResult: (result) => {
      const res = result as { simpleInterest: number, compoundInterest: number, difference: number };
      return (
        <div>
          <p className="font-semibold">Simple Interest: ₹{res.simpleInterest.toFixed(2)}</p>
          <p className="font-semibold mt-2">Compound Interest: ₹{res.compoundInterest.toFixed(2)}</p>
          <p className="font-semibold mt-2">Difference: ₹{res.difference.toFixed(2)}</p>
        </div>
      );
    }
  },
  payCommission: {
    title: 'Pay Commission of India Calculator',
    fields: [
      { id: 'basicPay', label: 'Basic Pay', type: 'number', placeholder: 'Enter basic pay' },
      { id: 'payLevel', label: 'Pay Level', type: 'number', placeholder: 'Enter pay level', min: 1, max: 18 },
    ],
    calculate: (values) => {
      const basicPay = parseFloat(values.basicPay as string) || 0;
      const payLevel = parseFloat(values.payLevel as string) || 0;
      
      // Simplified 7th Pay Commission calculation
      const da = basicPay * 0.31; // 31% DA as of 2023
      const hra = basicPay * (payLevel > 8 ? 0.24 : 0.16); // 24% for level 9 and above, 16% for level 8 and below
      const ta = 3600; // Transport Allowance (fixed)
      
      return {
        da,
        hra,
        ta,
        grossSalary: basicPay + da + hra + ta
      };
    },
    formatResult: (result) => {
      const res = result as { da: number, hra: number, ta: number, grossSalary: number };
      return (
        <div>
          <p className="font-semibold">Dearness Allowance: ₹{res.da.toFixed(2)}</p>
          <p className="font-semibold mt-2">House Rent Allowance: ₹{res.hra.toFixed(2)}</p>
          <p className="font-semibold mt-2">Transport Allowance: ₹{res.ta.toFixed(2)}</p>
          <p className="font-semibold mt-2">Gross Salary: ₹{res.grossSalary.toFixed(2)}</p>
        </div>
      );
    }
  }
};

const CalculatorDialog = ({ type }: { type: string }) => {
  const [values, setValues] = React.useState<{ [key: string]: string | number | boolean }>({});
  const [result, setResult] = React.useState<number | { [key: string]: number } | null>(null);
  const config = calculatorConfigs[type];

  const handleCalculate = () => {
    const calculatedResult = config.calculate(values);
    setResult(calculatedResult);
  };

  const handleSliderChange = (id: string, newValue: number[]) => {
    setValues((prev) => ({ ...prev, [id]: newValue[0] }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full text-left justify-start">
          <Calculator className="mr-2 h-4 w-4" />
          {config.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{config.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {config.fields.map((field) => (
            <div key={field.id} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={field.id} className="text-right">
                {field.label}
              </Label>
              <div className="col-span-3">
                {field.useSlider ? (
                  <div className="space-y-2">
                    <Slider 
                      defaultValue={[field.min || 0]} 
                      min={field.min} 
                      max={field.max} 
                      step={field.step}
                      onValueChange={(value) => handleSliderChange(field.id, value)}
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{field.min}</span>
                      <Input
                        id={field.id}
                        type="number"
                        value={values[field.id] as string || ''}
                        onChange={(e) => setValues((prev) => ({ ...prev, [field.id]: e.target.value }))}
                        className="w-20"
                        placeholder={field.placeholder}
                      />
                      <span className="text-sm text-muted-foreground">{field.max}</span>
                    </div>
                  </div>
                ) : field.type === 'checkbox' ? (
                  <div className="flex items-center">
                    <Input
                      id={field.id}
                      type="checkbox"
                      checked={Boolean(values[field.id])}
                      onChange={(e) => setValues((prev) => ({ ...prev, [field.id]: e.target.checked }))}
                      className="w-4 h-4 mr-2"
                    />
                    <Label htmlFor={field.id}>{field.placeholder}</Label>
                  </div>
                ) : field.type === 'select' && field.options ? (
                  <select
                    id={field.id}
                    value={values[field.id] as string || ''}
                    onChange={(e) => setValues((prev) => ({ ...prev, [field.id]: e.target.value }))}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base"
                  >
                    <option value="" disabled>Select option</option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                ) : (
                  <Input
                    id={field.id}
                    type={field.type}
                    value={values[field.id] as string || ''}
                    onChange={(e) => setValues((prev) => ({ ...prev, [field.id]: e.target.value }))}
                    className="col-span-3"
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            </div>
          ))}
          <Button onClick={handleCalculate} className="w-full mt-4">
            Calculate
          </Button>
          {result !== null && (
            <div className="text-center mt-4">
              {config.formatResult ? 
                config.formatResult(result) : 
                <p className="font-semibold">Result: ₹{(result as number).toFixed(2)}</p>
              }
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const AdvancedCalculators = () => {
  return (
    <div className="space-y-2">
      {Object.keys(calculatorConfigs).map((type) => (
        <CalculatorDialog key={type} type={type} />
      ))}
    </div>
  );
};

export default AdvancedCalculators;
