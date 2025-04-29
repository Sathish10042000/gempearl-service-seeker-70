
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calculator, CircleDollarSign, CirclePercent, Percent, 
  Plus, Minus, Divide, Equal
} from 'lucide-react';
import FinancialCalculators from '@/components/calculators/FinancialCalculators';
import EMICalculator from '@/components/EMICalculator';
import AdvancedCalculators from '@/components/calculators/AdvancedCalculators';

const Calculators = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="py-12 md:py-16 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Finance and Investment Calculators
          </h1>
          
          <div className="mt-10">
            <Tabs defaultValue="financial" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-blue-800/50 p-1">
                <TabsTrigger value="financial" className="data-[state=active]:bg-blue-700">
                  <CircleDollarSign className="mr-2 h-4 w-4" />
                  Financial
                </TabsTrigger>
                <TabsTrigger value="tax" className="data-[state=active]:bg-blue-700">
                  <CirclePercent className="mr-2 h-4 w-4" />
                  Tax & EMI
                </TabsTrigger>
                <TabsTrigger value="investment" className="data-[state=active]:bg-blue-700">
                  <Calculator className="mr-2 h-4 w-4" />
                  Investment
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="financial" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FinancialCalculators />
              </TabsContent>
              
              <TabsContent value="tax" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-blue-50 p-4 rounded-md">
                <EMICalculator />
              </TabsContent>
              
              <TabsContent value="investment" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AdvancedCalculators />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Calculators;
