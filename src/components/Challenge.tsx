import { AlertCircle, Search, Lightbulb, Cog, CheckCircle } from 'lucide-react';

export function Challenge() {
  const researchAreas = [
    'Principles of soil pH measurement',
    'Electrical Conductivity (EC) as an indicator of nutrient presence',
    'Soil moisture and its effect on nutrient availability',
    'Crop-wise soil nutrient requirements',
    'Use of mobile sensors and IoT in agriculture',
  ];

  const developmentSteps = [
    {
      phase: 'Initial Idea',
      description: 'We identified the need for a low-cost, portable, real-time soil monitoring system after studying the difficulties farmers face with traditional soil testing.',
      status: 'completed',
    },
    {
      phase: 'First Prototype',
      description: 'We began by experimenting with basic soil sensors connected to a microcontroller to understand how soil parameters such as pH, moisture, and EC change under different conditions.',
      status: 'completed',
    },
    {
      phase: 'Redesign & Improvements',
      description: 'We upgraded the system using an ESP32 microcontroller for wireless communication. Sensor data processing was improved, and a method was developed to calculate a relative soil fertility (NPK) index using pH, moisture, and EC values. The system was redesigned to be portable, energy-efficient, and app-compatible.',
      status: 'completed',
    },
    {
      phase: 'Current Version (Final Prototype)',
      description: 'The current prototype is a real-time soil monitoring system that measures pH, moisture, and EC; transmits data wirelessly to a mobile interface; estimates soil fertility using a derived NPK index; and provides crop and fertilizer guidance based on soil condition.',
      status: 'current',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">The Challenge & Solution</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Understanding the problem, conducting research, and developing an innovative solution through iterative design.
          </p>
        </div>

        {/* The Problem */}
        <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <AlertCircle size={32} />
              <h2>The Problem</h2>
            </div>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-gray-900">Growing Gap Between Farmers and Soil Health</h3>
                <p className="text-gray-700 leading-relaxed">
                  Modern agriculture increasingly depends on chemical fertilizers and fast production cycles, yet many farmers—especially small-scale farmers—do not have access to real-time or frequent soil health information. Soil conditions can change rapidly due to rainfall, irrigation, and crop uptake, but farmers often depend on limited or outdated soil data for decision-making.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-gray-900">Limitations of Current Soil Testing Methods</h3>
                <p className="text-gray-700 leading-relaxed">
                  Traditional soil testing requires farmers to collect samples, send them to laboratories, and wait several days or even weeks for results. This process is:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">&bull;</span>
                    <span><span className="text-gray-900">Costly:</span> Laboratory soil tests usually cost ₹1500–₹4000 per sample</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">&bull;</span>
                    <span><span className="text-gray-900">Time-consuming:</span> Results often arrive after the critical crop stage has passed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">&bull;</span>
                    <span><span className="text-gray-900">Inaccessible:</span> Many rural areas lack nearby testing facilities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">&bull;</span>
                    <span><span className="text-gray-900">Infrequent:</span> Due to cost and effort, testing is done only once every few years</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-gray-900">
                  <span className="text-red-700">Result:</span> Farmers are forced to apply fertilizers based on guesswork. This leads to over-fertilization → environmental pollution & wasted resources, or under-fertilization → poor crop growth & lower yields.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Conducted */}
        <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Search size={32} />
              <h2>Research Conducted</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              To develop an effective solution, we conducted extensive research across multiple disciplines:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {researchAreas.map((area, index) => (
                <div key={index} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg">
                  <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{area}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <span className="text-gray-900">Key Finding:</span> While professional laboratory-grade NPK sensors exist, they are expensive, hard to maintain, and not suitable for small-scale farmers. However, scientific studies show that a combination of pH, moisture, and electrical conductivity can be used to estimate relative soil fertility and nutrient availability at low cost. This insight led us to develop a derived NPK / soil fertility index instead of relying on expensive direct NPK sensors.
              </p>
            </div>
          </div>
        </div>

        {/* Development Method */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Cog size={32} />
              <h2>Development Method</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our development process followed an iterative design approach, with each phase building upon lessons learned:
            </p>
            <div className="space-y-6">
              {developmentSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < developmentSteps.length - 1 && (
                    <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-blue-300 to-green-300"></div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className={`rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 ${
                      step.status === 'current' 
                        ? 'bg-gradient-to-br from-green-500 to-blue-500' 
                        : 'bg-gradient-to-br from-blue-600 to-green-600'
                    }`}>
                      {step.status === 'current' ? (
                        <Lightbulb className="text-white" size={24} />
                      ) : (
                        <CheckCircle className="text-white" size={24} />
                      )}
                    </div>
                    <div className="flex-grow bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-gray-900">{step.phase}</h3>
                        {step.status === 'current' && (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            Current Version
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-gray-900">
                <span className="text-green-700">Why We Made Changes:</span> Each redesign focused on improving reliability, affordability, ease of use, and real-world applicability. Our goal was to move from a basic concept to a practical solution suitable for farmers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}