import { useState } from 'react';
import { ArrowRight, Building2, Calculator } from 'lucide-react';
import PDflowchart from '../assets/PD-flowchart.png';

const steps = [
  {
    number: 1,
    title: 'Join a solar project',
    description: 'Purchase into our solar projects through staking pools. Anyone can join with just $50 USD, helping fund clean energy and earning digital assets in return.'
  },
  {
    number: 2,
    title: 'Earn power credits',
    description: 'As the solar panels generate electricity, your share is converted into WEN tokens and KWh credits that appear in your digital wallet automatically.'
  },
  {
    number: 3,
    title: 'Offset bills & trade',
    description: 'Use your credits to reduce your own energy bills, or trade them on our exchange for other assets. Hold them as they appreciate with energy costs.'
  }
];

const projects = [
  { id: 1, name: 'SolarField Alpha' },
  { id: 2, name: 'SunPower Beta' },
  { id: 3, name: 'EcoEnergy Gamma' }
];

const HowItWorksSection = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [investment, setInvestment] = useState(1000);
  const [energyHolding, setEnergyHolding] = useState(1020);
  const [estimatedReturn, setEstimatedReturn] = useState(15.5);

  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setInvestment(value);
    setEnergyHolding(value * 1.02);
    setEstimatedReturn(value * 0.0155);
  };

  const handleCalculate = () => {
    setEnergyHolding(investment * 1.02);
    setEstimatedReturn(investment * 0.0155);
  };

  return (
    <section id="how-it-works" className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-dark mb-12">
          How It Works?
        </h2>

        {/* Flowchart visual */}
        <div className="flex justify-center mb-16">
          <img 
            src={PDflowchart} 
            alt="How It Works Flowchart" 
            className="max-w-full md:max-w-4xl rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Steps */}
          <div className="lg:w-1/2">
            {steps.map((step) => (
              <div key={step.number} className="mb-10 flex">
                <div className="mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-gray-dark font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-dark">
                    Step {step.number}: {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Calculator */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6 text-gray-dark flex items-center">
                <Building2 className="mr-2" /> Reserve Solar
              </h3>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Select Solar Project</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  value={selectedProject.id}
                  onChange={(e) => setSelectedProject(projects.find(p => p.id === parseInt(e.target.value)) || projects[0])}
                >
                  {projects.map(project => (
                    <option key={project.id} value={project.id}>{project.name}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Investment Amount (USD)</label>
                <input 
                  type="number" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  value={investment}
                  onChange={handleInvestmentChange}
                  min="50"
                />
              </div>

              <button 
                className="w-full bg-gold hover:bg-gold-dark text-gray-dark font-medium py-3 px-4 rounded-lg mb-6 flex items-center justify-center"
                onClick={handleCalculate}
              >
                <Calculator className="mr-2" /> Calculate Energy Holding
              </button>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="mb-4">
                  <div className="text-gray-600 mb-1">Energy in kWh</div>
                  <div className="text-navy-dark font-bold text-2xl">{energyHolding.toFixed(2)} W</div>
                  <div className="text-gray-500 text-sm">Estimated Annual Energy</div>
                </div>

                <div>
                  <div className="text-gray-600 mb-1">Estimated Return</div>
                  <div className="text-green-600 font-bold text-2xl">${estimatedReturn.toFixed(2)}</div>
                  <div className="text-gray-500 text-sm">Based on current energy prices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
