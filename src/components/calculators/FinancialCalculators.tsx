
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

interface CalculatorConfig {
  title: string;
  fields: {
    id: string;
    label: string;
    type: string;
    placeholder: string;
  }[];
  calculate: (values: { [key: string]: string }) => number;
}

const calculatorConfigs: { [key: string]: CalculatorConfig } = {
  pf: {
    title: 'PF Calculator',
    fields: [
      { id: 'basicSalary', label: 'Basic Salary', type: 'number', placeholder: 'Enter basic salary' },
      { id: 'employeeContribution', label: 'Employee Contribution (%)', type: 'number', placeholder: '12' },
    ],
    calculate: (values) => {
      const basicSalary = parseFloat(values.basicSalary) || 0;
      const contribution = (parseFloat(values.employeeContribution) || 12) / 100;
      return basicSalary * contribution;
    }
  },
  ppf: {
    title: 'PPF Calculator',
    fields: [
      { id: 'investment', label: 'Yearly Investment', type: 'number', placeholder: 'Enter yearly investment' },
      { id: 'years', label: 'Time Period (Years)', type: 'number', placeholder: '15' },
    ],
    calculate: (values) => {
      const investment = parseFloat(values.investment) || 0;
      const years = parseFloat(values.years) || 15;
      const rate = 0.071; // 7.1% current PPF rate
      return investment * ((Math.pow(1 + rate, years) - 1) / rate);
    }
  },
  tds: {
    title: 'TDS Calculator',
    fields: [
      { id: 'amount', label: 'Payment Amount', type: 'number', placeholder: 'Enter payment amount' },
      { id: 'tdsRate', label: 'TDS Rate (%)', type: 'number', placeholder: 'Enter TDS rate' },
    ],
    calculate: (values) => {
      const amount = parseFloat(values.amount) || 0;
      const rate = (parseFloat(values.tdsRate) || 0) / 100;
      return amount * rate;
    }
  },
  gratuity: {
    title: 'Gratuity Calculator',
    fields: [
      { id: 'lastSalary', label: 'Last Drawn Salary', type: 'number', placeholder: 'Enter last salary' },
      { id: 'yearsOfService', label: 'Years of Service', type: 'number', placeholder: 'Enter years of service' },
    ],
    calculate: (values) => {
      const salary = parseFloat(values.lastSalary) || 0;
      const years = parseFloat(values.yearsOfService) || 0;
      return (salary * 15 * years) / 26;
    }
  },
  homeLoan: {
    title: 'Home Loan EMI Calculator',
    fields: [
      { id: 'loanAmount', label: 'Loan Amount', type: 'number', placeholder: 'Enter loan amount' },
      { id: 'interestRate', label: 'Interest Rate (%)', type: 'number', placeholder: 'Enter interest rate' },
      { id: 'tenure', label: 'Loan Tenure (Years)', type: 'number', placeholder: 'Enter tenure in years' },
    ],
    calculate: (values) => {
      const p = parseFloat(values.loanAmount) || 0;
      const r = (parseFloat(values.interestRate) || 0) / 12 / 100;
      const n = (parseFloat(values.tenure) || 0) * 12;
      return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
  },
  sip: {
    title: 'SIP Calculator',
    fields: [
      { id: 'monthlyInvestment', label: 'Monthly Investment', type: 'number', placeholder: 'Enter monthly investment' },
      { id: 'years', label: 'Investment Period (Years)', type: 'number', placeholder: 'Enter years' },
      { id: 'expectedReturn', label: 'Expected Return (%)', type: 'number', placeholder: 'Enter expected return' },
    ],
    calculate: (values) => {
      const p = parseFloat(values.monthlyInvestment) || 0;
      const t = parseFloat(values.years) || 0;
      const r = (parseFloat(values.expectedReturn) || 0) / 12 / 100;
      const n = t * 12;
      return p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    }
  },
  fd: {
    title: 'FD Calculator',
    fields: [
      { id: 'principal', label: 'Principal Amount', type: 'number', placeholder: 'Enter principal amount' },
      { id: 'rate', label: 'Interest Rate (%)', type: 'number', placeholder: 'Enter interest rate' },
      { id: 'tenure', label: 'Tenure (Years)', type: 'number', placeholder: 'Enter tenure in years' },
    ],
    calculate: (values) => {
      const p = parseFloat(values.principal) || 0;
      const r = (parseFloat(values.rate) || 0) / 100;
      const t = parseFloat(values.tenure) || 0;
      return p * (1 + r * t);
    }
  },
  salary: {
    title: 'Salary Calculator',
    fields: [
      { id: 'basicSalary', label: 'Basic Salary', type: 'number', placeholder: 'Enter basic salary' },
      { id: 'hra', label: 'HRA (%)', type: 'number', placeholder: 'Enter HRA percentage' },
      { id: 'da', label: 'DA (%)', type: 'number', placeholder: 'Enter DA percentage' },
    ],
    calculate: (values) => {
      const basic = parseFloat(values.basicSalary) || 0;
      const hra = basic * ((parseFloat(values.hra) || 0) / 100);
      const da = basic * ((parseFloat(values.da) || 0) / 100);
      return basic + hra + da;
    }
  },
  incomeTax: {
    title: 'Income Tax Calculator',
    fields: [
      { id: 'annualIncome', label: 'Annual Income', type: 'number', placeholder: 'Enter annual income' },
      { id: 'investments', label: '80C Investments', type: 'number', placeholder: 'Enter 80C investments' },
    ],
    calculate: (values) => {
      const income = parseFloat(values.annualIncome) || 0;
      const investments = Math.min(parseFloat(values.investments) || 0, 150000);
      const taxableIncome = income - investments;
      
      let tax = 0;
      if (taxableIncome <= 250000) {
        tax = 0;
      } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05;
      } else if (taxableIncome <= 750000) {
        tax = 12500 + (taxableIncome - 500000) * 0.1;
      } else if (taxableIncome <= 1000000) {
        tax = 37500 + (taxableIncome - 750000) * 0.15;
      } else if (taxableIncome <= 1250000) {
        tax = 75000 + (taxableIncome - 1000000) * 0.2;
      } else if (taxableIncome <= 1500000) {
        tax = 125000 + (taxableIncome - 1250000) * 0.25;
      } else {
        tax = 187500 + (taxableIncome - 1500000) * 0.3;
      }
      
      return tax;
    }
  },
};

const CalculatorDialog = ({ type }: { type: string }) => {
  const [values, setValues] = React.useState<{ [key: string]: string }>({});
  const [result, setResult] = React.useState<number | null>(null);
  const config = calculatorConfigs[type];

  const handleCalculate = () => {
    const calculatedResult = config.calculate(values);
    setResult(calculatedResult);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full text-left justify-start bg-blue-50 hover:bg-blue-100 border-blue-200">
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
              <Input
                id={field.id}
                type={field.type}
                value={values[field.id] || ''}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, [field.id]: e.target.value }))
                }
                className="col-span-3"
                placeholder={field.placeholder}
              />
            </div>
          ))}
          <Button onClick={handleCalculate} className="w-full mt-4">
            Calculate
          </Button>
          {result !== null && (
            <div className="text-center mt-4">
              <p className="font-semibold">Result: ₹{result.toFixed(2)}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const FinancialCalculators = () => {
  return (
    <div className="space-y-2">
      {Object.keys(calculatorConfigs).map((type) => (
        <CalculatorDialog key={type} type={type} />
      ))}
    </div>
  );
};

export default FinancialCalculators;
