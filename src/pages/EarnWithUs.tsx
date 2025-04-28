
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Users, PenTool, Award, Coins, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const EarnWithUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    occupation: '',
    interests: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, value]
        : prev.interests.filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      occupation: '',
      interests: []
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gempearl-navy to-gempearl-dark text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Gem Pearl & Earn</h1>
            <p className="text-xl text-gray-200 mb-8">
              Join our network of partners and earn attractive commissions while helping businesses succeed.
            </p>
            <Button size="lg" className="bg-gempearl-teal hover:bg-gempearl-gold hover:text-gempearl-navy text-white">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gempearl-navy mb-4">Our Partner Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the program that suits your skills and interests. We offer flexible partnership options with attractive incentives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Referral Partner */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gempearl-teal/10 p-6">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  <Users className="h-8 w-8 text-gempearl-teal" />
                </div>
                <h3 className="text-2xl font-bold text-gempearl-navy">Referral Partner</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Refer clients to our services and earn attractive commissions on successful conversions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gempearl-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Up to 20% commission on service fees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gempearl-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Recurring earnings for retained clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gempearl-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>No minimum referral requirements</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold mb-1">Ideal for:</p>
                  <p className="text-gray-600">Professionals, Business Consultants, Network Marketers</p>
                </div>
              </div>
            </div>

            {/* Business Associate */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gempearl-navy/10 p-6">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  <Award className="h-8 w-8 text-gempearl-navy" />
                </div>
                <h3 className="text-2xl font-bold text-gempearl-navy">Business Associate</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Represent Gem Pearl in your region and build your own client base with our backend support.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gempearl-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Up to 30% commission on all services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gempearl-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Exclusive territory rights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gempearl-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Marketing materials & training provided</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold mb-1">Ideal for:</p>
                  <p className="text-gray-600">Accounting Professionals, Financial Advisors, Entrepreneurs</p>
                </div>
              </div>
            </div>

            {/* Content Creator */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gempearl-gold/10 p-6">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  <PenTool className="h-8 w-8 text-gempearl-gold" />
                </div>
                <h3 className="text-2xl font-bold text-gempearl-navy">Content Partner</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Create valuable content about our services and earn through affiliate marketing.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gempearl-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Earn through unique affiliate links</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gempearl-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Access to exclusive content resources</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gempearl-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Monthly performance bonuses</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold mb-1">Ideal for:</p>
                  <p className="text-gray-600">Bloggers, YouTubers, Social Media Influencers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gempearl-navy mb-4">Commission Structure</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our transparent commission structure ensures that your efforts are well rewarded.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gempearl-navy text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Service Category</th>
                  <th className="py-4 px-6 text-center">Referral Partner</th>
                  <th className="py-4 px-6 text-center">Business Associate</th>
                  <th className="py-4 px-6 text-center">Content Partner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium">Business Registration</td>
                  <td className="py-4 px-6 text-center">10%</td>
                  <td className="py-4 px-6 text-center">20%</td>
                  <td className="py-4 px-6 text-center">15%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-medium">Accounting Services</td>
                  <td className="py-4 px-6 text-center">15%</td>
                  <td className="py-4 px-6 text-center">25%</td>
                  <td className="py-4 px-6 text-center">12%</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Tax & Compliance</td>
                  <td className="py-4 px-6 text-center">12%</td>
                  <td className="py-4 px-6 text-center">22%</td>
                  <td className="py-4 px-6 text-center">10%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-medium">Trademark & IP</td>
                  <td className="py-4 px-6 text-center">20%</td>
                  <td className="py-4 px-6 text-center">30%</td>
                  <td className="py-4 px-6 text-center">18%</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Web Development</td>
                  <td className="py-4 px-6 text-center">15%</td>
                  <td className="py-4 px-6 text-center">25%</td>
                  <td className="py-4 px-6 text-center">15%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p className="flex items-center justify-center">
              <Coins className="text-gempearl-gold mr-2" />
              <span>Commissions are paid monthly for all successfully completed services</span>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gempearl-navy mb-4">Partner Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear what our partners have to say about their experience and earnings with Gem Pearl.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gempearl-navy">
                  RK
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rahul Kumar</h4>
                  <p className="text-sm text-gray-500">Business Associate, Delhi</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Partnering with Gem Pearl has been a game-changer for my career. I've been able to provide valuable services to my network while earning significant commissions. Their backend support is excellent."
              </p>
              <p className="mt-4 font-medium text-gempearl-teal">Earning: ₹45,000/month average</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gempearl-navy">
                  SP
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sneha Patel</h4>
                  <p className="text-sm text-gray-500">Referral Partner, Mumbai</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a financial consultant, I regularly refer my clients to Gem Pearl for accounting services. The process is seamless, and the commissions have become a significant income stream for me."
              </p>
              <p className="mt-4 font-medium text-gempearl-teal">Earning: ₹30,000/month average</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gempearl-navy">
                  AV
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Amit Verma</h4>
                  <p className="text-sm text-gray-500">Content Partner, Bangalore</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I create YouTube videos about business topics, and partnering with Gem Pearl has been very lucrative. Their affiliate program is straightforward, and the conversion rates are impressive."
              </p>
              <p className="mt-4 font-medium text-gempearl-teal">Earning: ₹25,000/month average</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gempearl-navy mb-4">Apply to Become a Partner</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to express your interest in our partner programs. Our team will review your application and contact you shortly.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City/Location *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">Current Occupation *</label>
                  <select
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                  >
                    <option value="">Select your occupation</option>
                    <option value="Professional">Accounting/Financial Professional</option>
                    <option value="Consultant">Business Consultant</option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Content Creator">Content Creator/Influencer</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">Program Interest (Select all that apply) *</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="referral"
                        name="interests"
                        value="Referral Partner"
                        checked={formData.interests.includes('Referral Partner')}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-gempearl-teal border-gray-300 rounded"
                      />
                      <label htmlFor="referral" className="ml-2 text-sm text-gray-700">
                        Referral Partner
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="business"
                        name="interests"
                        value="Business Associate"
                        checked={formData.interests.includes('Business Associate')}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-gempearl-teal border-gray-300 rounded"
                      />
                      <label htmlFor="business" className="ml-2 text-sm text-gray-700">
                        Business Associate
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="content"
                        name="interests"
                        value="Content Partner"
                        checked={formData.interests.includes('Content Partner')}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-gempearl-teal border-gray-300 rounded"
                      />
                      <label htmlFor="content" className="ml-2 text-sm text-gray-700">
                        Content Partner
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button 
                    type="submit" 
                    className="bg-gempearl-teal hover:bg-gempearl-navy text-white px-8 py-3 text-lg"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gempearl-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our partnership programs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gempearl-navy mb-2">How do I get paid for my referrals?</h3>
              <p className="text-gray-600">
                Commissions are processed monthly and transferred directly to your bank account. We provide detailed reports of all referrals and earnings through our partner dashboard.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gempearl-navy mb-2">Is there any joining fee for the partner programs?</h3>
              <p className="text-gray-600">
                No, there is no joining fee for any of our partner programs. We believe in creating value together and only earn when you earn.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gempearl-navy mb-2">Do I need specific qualifications to join?</h3>
              <p className="text-gray-600">
                While specific qualifications are not mandatory for all programs, having knowledge in accounting, finance, business consulting, or digital marketing is beneficial. For Business Associates, we prefer candidates with relevant professional experience.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gempearl-navy mb-2">How long does it take to approve my application?</h3>
              <p className="text-gray-600">
                We typically review and process applications within 3-5 business days. Once approved, you'll receive an onboarding email with all necessary resources to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EarnWithUs;
