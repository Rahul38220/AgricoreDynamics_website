import { Link } from 'react-router-dom';
import { ArrowLeft, Beaker, Droplet, TestTube } from 'lucide-react';

export function ChemistrySoil() {
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
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Beaker className="text-white" size={40} />
          </div>
          <h1 className="mb-4">Chemistry (Soil Reactions & Nutrient Behavior)</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Chemistry forms the foundation of soil health analysis, as all nutrients and pH behavior depend on chemical reactions in the soil.
          </p>
        </div>

        {/* Soil pH & Chemical Reactions */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <TestTube size={32} />
              <h2>1. Soil pH & Chemical Reactions</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Soil pH determines whether the soil is acidic, neutral, or alkaline. It directly affects nutrient availability:
            </p>
            <div className="bg-purple-50 p-6 rounded-lg space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">&bull;</span>
                <span className="text-gray-700">In acidic soils, phosphorus becomes chemically bound to iron and aluminium.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">&bull;</span>
                <span className="text-gray-700">In alkaline soils, phosphorus binds with calcium.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">&bull;</span>
                <span className="text-gray-700">Near neutral pH (6–7), most nutrients are available to plants.</span>
              </div>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Thus, pH measurement is essential for understanding soil fertility.
            </p>
          </div>
        </div>

        {/* Nutrients in Ionic Form */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Beaker size={32} />
              <h2>2. Nutrients in Ionic Form</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Plant nutrients such as:
            </p>
            <div className="bg-pink-50 p-6 rounded-lg space-y-2 mb-4">
              <div className="flex items-start space-x-2">
                <span className="text-pink-600 mt-1">&bull;</span>
                <span className="text-gray-700">Nitrogen → Nitrate (NO₃⁻), Ammonium (NH₄⁺)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-pink-600 mt-1">&bull;</span>
                <span className="text-gray-700">Potassium → K⁺</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-pink-600 mt-1">&bull;</span>
                <span className="text-gray-700">Phosphorus → Phosphate ions</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              exist in ionic form in soil water. These ions allow electrical current to pass, which is why EC can be used as an indicator of nutrient presence.
            </p>
          </div>
        </div>

        {/* Soil-Water Interaction */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Droplet size={32} />
              <h2>3. Soil–Water Interaction</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Water dissolves soil nutrients and allows:
            </p>
            <div className="bg-purple-50 p-6 rounded-lg space-y-2 mb-4">
              <div className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">&bull;</span>
                <span className="text-gray-700">Ion movement</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">&bull;</span>
                <span className="text-gray-700">Chemical reactions</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">&bull;</span>
                <span className="text-gray-700">Root absorption</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              That is why pH and EC measurements are taken in soil–water slurry for higher reliability.
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <p className="text-gray-900">
                Thus, Chemistry explains nutrient solubility, pH behavior, and the chemical basis of EC measurement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
