import { ChartLine, Leaf, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-gold" />,
    title: 'Tokenized Energy',
    description: 'Convert solar energy production into tradable digital assets to maximize your power earnings.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-gold" />,
    title: 'Stability First',
    description: 'Our tokens are backed by renewable energy production, creating real-world stability.'
  },
  {
    icon: <ChartLine className="w-8 h-8 text-gold" />,
    title: 'Smart Trading',
    description: 'Use our intelligence platform to optimize when to use, sell, or hold your energy credits.'
  },
  {
    icon: <Leaf className="w-8 h-8 text-gold" />,
    title: 'Eco-Aligned',
    description: 'Participate in the green economy while building your digital wealth portfolio.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-dark mb-12">
          What Sets Us Apart?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
