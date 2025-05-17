import { useState } from 'react';

type TabKey = 'general' | 'backing' | 'credits';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('general');

  const tabContent = {
    general: (
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-dark">What is Digital Asset?</h3>
        <p className="text-gray-600 mb-4">
          Digital Asset is a term for anything that exists in a digital format and comes with the right to use. Digital assets might be categorized as centralized or decentralized.
        </p>
        <p className="text-gray-600 mb-4">
          PowerDollar uses DECORUM to manage your credits effectively, providing a seamless experience to view and trade your tokens.
        </p>
        <p className="text-gray-600">
          By balancing renewable energy creation with digital technology, we've created both an eco-conscious solution and a solid investment path.
        </p>
      </div>
    ),
    backing: (
      <div>
        <h3 className="text-xl font-semibold mb-4 text-navy">Solar Energy Backing</h3>
        <p className="text-gray-600 mb-4">
          Unlike many digital currencies that lack intrinsic value, PowerDollar tokens are directly tied to real-world solar energy production, creating a stable and tangible asset basis.
        </p>
        <p className="text-gray-600">
          Each token represents ownership in actual renewable energy production capacity, generating consistent value through utility service rather than speculation alone.
        </p>
      </div>
    ),
    credits: (
      <div>
        <h3 className="text-xl font-semibold mb-4 text-navy">Using Your Credits</h3>
        <p className="text-gray-600 mb-4">
          Your energy credits can be used in multiple ways: direct application to reduce utility bills, trading on our exchange platform for other assets, or holding as a hedge against rising energy costs.
        </p>
        <p className="text-gray-600">
          Our smart contract system automatically tracks production and consumption, allowing frictionless transfer of value between participants in the ecosystem.
        </p>
      </div>
    )
  };

  return (
    <section id="about" className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-dark mb-12">
          Know More About Us!
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <div className="flex flex-col space-y-4">
              <button 
                className={`py-4 px-6 text-left rounded-full text-lg font-medium transition ${
                  activeTab === 'general' 
                    ? 'bg-gold bg-opacity-20 text-gray-dark' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('general')}
              >
                General
              </button>
              <button 
                className={`py-4 px-6 text-left rounded-full text-lg font-medium transition ${
                  activeTab === 'backing' 
                    ? 'bg-gold bg-opacity-20 text-gray-dark' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('backing')}
              >
                Backing Solar
              </button>
              <button 
                className={`py-4 px-6 text-left rounded-full text-lg font-medium transition ${
                  activeTab === 'credits' 
                    ? 'bg-gold bg-opacity-20 text-gray-dark' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('credits')}
              >
                Using Credits
              </button>
            </div>
          </div>
          
          <div className="lg:w-2/3 bg-gray-50 p-8 rounded-lg">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
