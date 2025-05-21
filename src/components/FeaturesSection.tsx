import { ChartLine, Leaf, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-gold" />,
    title: 'Tokenized Energy',
    description: 'Convert solar energy production into tradable digital assets to maximize your power earnings.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-gold" />,
    title: 'Stability First',
    description: 'Our tokens are backed by renewable energy production, creating real-world stability.',
  },
  {
    icon: <ChartLine className="w-8 h-8 text-gold" />,
    title: 'Smart Trading',
    description: 'Use our intelligence platform to optimize when to use, sell, or hold your energy credits.',
  },
  {
    icon: <Leaf className="w-8 h-8 text-gold" />,
    title: 'Eco-Aligned',
    description: 'Participate in the green economy while building your digital wealth portfolio.',
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
            <div
              key={index}
              className="group relative rounded-lg p-6 border border-gray-200 shadow-md transition-all duration-700 ease-in-out hover:shadow-[0_10px_25px_-5px_rgba(250,204,21,0.4),_0_5px_10px_-5px_rgba(250,204,21,0.2)] hover:scale-[1.03] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0)_0%,_rgba(250,204,21,0.03)_30%,_rgba(250,204,21,0.05)_50%,_rgba(250,204,21,0.08)_70%,_rgba(250,204,21,0.1)_100%)] group-hover:bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0.15)_0%,_rgba(250,204,21,0.12)_20%,_rgba(250,204,21,0.08)_40%,_rgba(250,204,21,0.05)_60%,_rgba(250,204,21,0.02)_80%,_rgba(250,204,21,0)_100%)] transition-all duration-700 ease-in-out transform scale-0 group-hover:scale-100 origin-center" />
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-700 ease-in-out group-hover:bg-gold/20">
                    <div className="transition-all duration-700 ease-in-out group-hover:scale-110">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-dark transition-colors duration-700 ease-in-out group-hover:text-gold">{feature.title}</h3>
                <p className="text-gray-600 transition-colors duration-700 ease-in-out group-hover:text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
