
import React, { useState } from 'react';
import { Plus, Minus, X, Divide, Equal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BasicCalculator = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [operation, setOperation] = useState<string>('+');
  const [result, setResult] = useState<number | string>('');

  const handleCalculate = () => {
    const first = parseFloat(num1);
    const second = parseFloat(num2);
    
    if (isNaN(first) || isNaN(second)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operation) {
      case '+':
        setResult(first + second);
        break;
      case '-':
        setResult(first - second);
        break;
      case '*':
        setResult(first * second);
        break;
      case '/':
        if (second === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(first / second);
        }
        break;
      default:
        setResult('Invalid operation');
    }
  };

  const handleOperationClick = (op: string) => {
    setOperation(op);
  };

  return (
    <Card className="w-full">
      <CardHeader className="bg-blue-600 text-white rounded-t-md">
        <CardTitle className="text-center">Basic Calculator</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="num1" className="text-sm font-medium">
              First Number
            </label>
            <Input
              id="num1"
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="mt-1"
              placeholder="Enter first number"
            />
          </div>
          <div>
            <label htmlFor="num2" className="text-sm font-medium">
              Second Number
            </label>
            <Input
              id="num2"
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="mt-1"
              placeholder="Enter second number"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          <Button 
            type="button" 
            onClick={() => handleOperationClick('+')}
            className={`${operation === '+' ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-600`}
          >
            <Plus size={16} />
          </Button>
          <Button 
            type="button" 
            onClick={() => handleOperationClick('-')}
            className={`${operation === '-' ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-600`}
          >
            <Minus size={16} />
          </Button>
          <Button 
            type="button" 
            onClick={() => handleOperationClick('*')}
            className={`${operation === '*' ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-600`}
          >
            <X size={16} />
          </Button>
          <Button 
            type="button" 
            onClick={() => handleOperationClick('/')}
            className={`${operation === '/' ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-600`}
          >
            <Divide size={16} />
          </Button>
          <Button 
            type="button" 
            onClick={handleCalculate}
            className="bg-green-500 hover:bg-green-600"
          >
            <Equal size={16} />
          </Button>
        </div>

        <div className="mt-4 p-3 bg-gray-100 rounded-md text-center">
          <div className="text-sm text-gray-500">Result</div>
          <div className="text-xl font-bold">
            {result !== '' ? (typeof result === 'number' ? result.toLocaleString() : result) : '—'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicCalculator;
