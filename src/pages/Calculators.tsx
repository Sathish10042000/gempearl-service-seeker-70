
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calculator, CircleDollarSign, CirclePercent, Percent, 
  Plus, Minus, Divide, Equal, MoreHorizontal
} from 'lucide-react';
import FinancialCalculators from '@/components/calculators/FinancialCalculators';
import EMICalculator from '@/components/EMICalculator';
import AdvancedCalculators from '@/components/calculators/AdvancedCalculators';
import BasicCalculator from '@/components/calculators/BasicCalculator';

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
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid grid-cols-5 mb-8 bg-blue-800/50 p-1">
                <TabsTrigger value="basic" className="data-[state=active]:bg-blue-700">
                  <Calculator className="mr-2 h-4 w-4" />
                  Basic
                </TabsTrigger>
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
                <TabsTrigger value="others" className="data-[state=active]:bg-blue-700">
                  <MoreHorizontal className="mr-2 h-4 w-4" />
                  Others
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="bg-blue-50 p-4 rounded-md">
                <div className="max-w-md mx-auto">
                  <BasicCalculator />
                </div>
              </TabsContent>
              
              <TabsContent value="financial" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-blue-50 p-4 rounded-md">
                <FinancialCalculators />
              </TabsContent>
              
              <TabsContent value="tax" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-blue-50 p-4 rounded-md">
                <EMICalculator />
              </TabsContent>
              
              <TabsContent value="investment" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-blue-50 p-4 rounded-md">
                <AdvancedCalculators />
              </TabsContent>
              
              <TabsContent value="others" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-blue-50 p-4 rounded-md">
                <div className="col-span-full flex flex-col items-center justify-center p-8 text-center">
                  <MoreHorizontal className="h-12 w-12 mb-4 text-blue-500" />
                  <h3 className="text-xl font-medium mb-2">Additional Calculators</h3>
                  <p className="text-gray-600 mb-6">This section will soon include more specialized calculators like age calculator, date difference, and unit converters.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
                    <div className="bg-white p-4 rounded-lg shadow border border-blue-100 hover:bg-blue-50 transition-colors duration-200">
                      <h4 className="font-medium text-blue-700">Age Calculator</h4>
                      <p className="text-sm text-gray-500">Coming soon</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow border border-blue-100 hover:bg-blue-50 transition-colors duration-200">
                      <h4 className="font-medium text-blue-700">Date Difference</h4>
                      <p className="text-sm text-gray-500">Coming soon</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow border border-blue-100 hover:bg-blue-50 transition-colors duration-200">
                      <h4 className="font-medium text-blue-700">Unit Converter</h4>
                      <p className="text-sm text-gray-500">Coming soon</p>
                    </div>
                  </div>
                </div>
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
