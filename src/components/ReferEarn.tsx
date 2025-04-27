
import React from 'react';
import { Copy, Gift, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ReferEarn = () => {
  const { toast } = useToast();
  const referralCode = 'GEM' + Math.random().toString(36).substring(2, 8).toUpperCase();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Referral Code Copied!",
      description: "Share this code with your friends to earn rewards.",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gempearl-navy mb-4">
            Refer & Earn Rewards
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share GemPearl with your friends and earn exciting rewards. The more friends you refer, the more rewards you unlock!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-soft-purple p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Gift className="text-vivid-purple" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Share & Invite</h3>
            <p className="text-gray-600">Share your unique referral code with friends and family.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-soft-green p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="text-gempearl-teal" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Friends Join</h3>
            <p className="text-gray-600">When they register using your code, both of you get rewards.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-soft-yellow p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Award className="text-[#F97316]" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Earn Rewards</h3>
            <p className="text-gray-600">Get exclusive discounts and special offers for each referral.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Your Referral Code</h3>
            <p className="text-gray-600">Share this code with your friends</p>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <code className="bg-gray-100 px-6 py-3 rounded-lg text-lg font-mono">
              {referralCode}
            </code>
            <Button
              onClick={handleCopyCode}
              variant="outline"
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <Copy className="h-4 w-4" />
              Copy
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="font-semibold mb-4">How it works:</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="bg-soft-purple text-vivid-purple text-sm px-2 py-1 rounded">1</span>
                Share your unique referral code with friends
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-soft-green text-gempearl-teal text-sm px-2 py-1 rounded">2</span>
                Friends sign up using your referral code
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-soft-yellow text-[#F97316] text-sm px-2 py-1 rounded">3</span>
                Both you and your friend get rewards
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferEarn;
