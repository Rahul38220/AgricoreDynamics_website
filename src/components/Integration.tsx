import { Link } from 'react-router-dom';
import { Beaker, Calculator, Zap, ArrowRight } from 'lucide-react';

export function Integration() {
  const subPages = [
    {
      icon: <Beaker size={48} />,
      title: 'Chemistry (Soil Reactions & Nutrient Behavior)',
      description: 'Explore the chemical principles behind NPK nutrients, pH measurement, and their role in soil fertility and plant growth.',
      link: '/integration/chemistry',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      icon: <Calculator size={48} />,
      title: 'Mathematics (Data Processing & Decision Logic)',
      description: 'Understand the mathematical algorithms that convert sensor readings into nutrient concentrations and generate crop recommendations.',
      link: '/integration/mathematics',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: <Zap size={48} />,
      title: 'Physics (Principles of Measurement & Electronics)',
      description: 'Explore the physical principles behind electrical conductivity, soil moisture measurement, pH detection, and wireless data transmission.',
      link: '/integration/physics',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Scientific Foundations</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            NutriScan Pro is built on the integration of three fundamental disciplines. Explore how physics, chemistry, and mathematics work together to create an innovative agricultural solution.
          </p>
        </div>

        {/* Integration Overview */}
        <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="mb-6 text-center">Interdisciplinary Approach</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Integrated Science Project Competition challenges students to think beyond traditional subject boundaries. NutriScan Pro demonstrates how real-world problems require solutions that seamlessly combine multiple scientific disciplines:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-green-600" size={40} />
              </div>
              <h3 className="mb-2 text-gray-900">Physics</h3>
              <p className="text-gray-700">Enables signal generation, sensing, conversion, and wireless transmission</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Beaker className="text-purple-600" size={40} />
              </div>
              <h3 className="mb-2 text-gray-900">Chemistry</h3>
              <p className="text-gray-700">Explains nutrient solubility, pH behavior, and chemical basis of EC measurement</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-blue-600" size={40} />
              </div>
              <h3 className="mb-2 text-gray-900">Mathematics</h3>
              <p className="text-gray-700">Enables data normalization, fertility estimation, and smart decision-making</p>
            </div>
          </div>
        </div>

        {/* Sub-page Cards */}
        <div className="space-y-8">
          {subPages.map((page, index) => (
            <Link
              key={index}
              to={page.link}
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${page.gradient} p-1`}>
                <div className={`bg-gradient-to-br ${page.bgGradient} p-8`}>
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className={`bg-gradient-to-br ${page.gradient} rounded-xl p-4 text-white flex-shrink-0`}>
                      {page.icon}
                    </div>
                    <div className="flex-grow">
                      <h2 className="mb-3 text-gray-900">{page.title}</h2>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {page.description}
                      </p>
                    </div>
                    <div className={`bg-gradient-to-br ${page.gradient} rounded-full p-3 text-white flex-shrink-0`}>
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Integration Summary */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl p-8 text-white">
          <h2 className="mb-4 text-center">The Power of Integration</h2>
          <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto text-blue-50">
            NutriScan Pro integrates Physics for sensing and transmission, Chemistry for understanding soil reactions and nutrient behavior, and Mathematics for data processing and smart decision-making. This multidisciplinary integration allows the system to function as a complete scientific soil monitoring solution.
          </p>
        </div>
      </div>
    </div>
  );
}