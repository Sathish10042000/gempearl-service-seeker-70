
import React, { useState } from 'react';
import { IndianRupee } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const EMICalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState<number | null>(null);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure) * 12;

    if (p && r && n) {
      const emiAmount = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiAmount);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full text-left justify-start">
          <IndianRupee className="mr-2 h-4 w-4" /> EMI Calculator
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>EMI Calculator</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="principal" className="text-right">
              Principal
            </Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="col-span-3"
              placeholder="Loan Amount"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="interest" className="text-right">
              Interest %
            </Label>
            <Input
              id="interest"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="col-span-3"
              placeholder="Annual Interest Rate"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tenure" className="text-right">
              Tenure (Years)
            </Label>
            <Input
              id="tenure"
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="col-span-3"
              placeholder="Loan Tenure"
            />
          </div>
          <Button onClick={calculateEMI} className="w-full mt-4">
            Calculate EMI
          </Button>
          {emi && (
            <div className="text-center mt-4">
              <p className="font-semibold">Monthly EMI: ₹{emi.toFixed(2)}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EMICalculator;

