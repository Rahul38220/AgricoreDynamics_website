import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Droplet, TestTube, Radio } from 'lucide-react';

export function Physics() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/integration"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Scientific Foundations</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Zap className="text-white" size={40} />
          </div>
          <h1 className="mb-4">Physics (Principles of Measurement & Electronics)</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Physics plays a crucial role in how NutriScan Pro senses and transmits soil information. The system relies on fundamental electrical and physical principles for accurate data acquisition.
          </p>
        </div>

        {/* Electrical Conductivity */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Zap size={32} />
              <h2>1. Electrical Conductivity (EC)</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Electrical Conductivity is the ability of a solution to conduct electric current. When soil is mixed with water, dissolved nutrient ions such as nitrates, potassium ions, and other salts allow electricity to pass through the solution.
            </p>
            <div className="bg-green-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">&bull;</span>
                  <span>Higher ion concentration → Higher conductivity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">&bull;</span>
                  <span>Lower ion concentration → Lower conductivity</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                The EC (TDS) sensor works on this physical principle to estimate the overall nutrient strength of the soil.
              </p>
            </div>
          </div>
        </div>

        {/* Soil Moisture */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Droplet size={32} />
              <h2>2. Soil Moisture & Dielectric Properties</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              The capacitive soil moisture sensor works on the principle that water has a higher dielectric constant than dry soil. As moisture increases, the capacitance between the sensor plates changes, which is converted into an electrical signal proportional to water content.
            </p>
          </div>
        </div>

        {/* pH Probe */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <TestTube size={32} />
              <h2>3. pH Probe & Electrochemical Potential</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              The pH probe works on the principle of electrochemical potential difference. The glass electrode generates a small voltage depending on the concentration of hydrogen ions (H⁺) in the soil solution. This voltage is interpreted as the pH value.
            </p>
          </div>
        </div>

        {/* Microcontroller & Wireless */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Radio size={32} />
              <h2>4. Microcontroller & Wireless Transmission</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              The ESP32 microcontroller converts analog signals from sensors into digital values using Analog-to-Digital Conversion (ADC). The data is then transmitted wirelessly using Bluetooth, which is based on electromagnetic wave propagation.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
              <p className="text-gray-900 mb-2">Key Point:</p>
              <p className="text-gray-700">
                Thus, Physics enables signal generation, sensing, conversion, and wireless transmission in the system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
