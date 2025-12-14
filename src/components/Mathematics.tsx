import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, TrendingUp, BarChart3 } from 'lucide-react';

export function Mathematics() {
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
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Calculator className="text-white" size={40} />
          </div>
          <h1 className="mb-4">Mathematics (Data Processing & Decision Logic)</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Mathematics is used at every stage of data processing, comparison, and recommendation generation.
          </p>
        </div>

        {/* Sensor Calibration & Conversion */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Calculator size={32} />
              <h2>1. Sensor Calibration & Conversion</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Raw voltage values from sensors are converted into:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg space-y-2 mb-4">
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">&bull;</span>
                <span className="text-gray-700">pH values (0–14)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">&bull;</span>
                <span className="text-gray-700">Moisture percentage (0–100%)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">&bull;</span>
                <span className="text-gray-700">EC values (relative units)</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              This requires:
            </p>
            <div className="bg-cyan-50 p-6 rounded-lg space-y-2 mt-3">
              <div className="flex items-start space-x-2">
                <span className="text-cyan-600 mt-1">&bull;</span>
                <span className="text-gray-700">Linear equations</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-cyan-600 mt-1">&bull;</span>
                <span className="text-gray-700">Scaling</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-cyan-600 mt-1">&bull;</span>
                <span className="text-gray-700">Offset correction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Derived NPK Index */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <TrendingUp size={32} />
              <h2>2. Derived NPK (Soil Fertility) Index</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Instead of direct N, P, K measurement, the system calculates a Soil Fertility Index using a weighted mathematical model such as:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-white p-4 rounded mb-4 border border-blue-200">
                <p className="text-center text-gray-900">
                  Soil Fertility Index = a(EC) + b(Moisture) + c(pH Factor)
                </p>
              </div>
              <p className="text-gray-700 mb-3">Where:</p>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">&bull;</span>
                  <span>a, b, c are weighting constants</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">&bull;</span>
                  <span>Each parameter is normalized before calculation</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              This allows soil to be classified as:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
              <div className="bg-cyan-50 p-4 rounded text-center">
                <p className="text-gray-900">Low fertility</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded text-center">
                <p className="text-gray-900">Moderate fertility</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded text-center">
                <p className="text-gray-900">High fertility</p>
              </div>
            </div>
          </div>
        </div>

        {/* Crop Suitability Scoring */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <BarChart3 size={32} />
              <h2>3. Crop Suitability Scoring</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Each crop is assigned a mathematical suitability score based on:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg space-y-2 mb-4">
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">&bull;</span>
                <span className="text-gray-700">pH compatibility</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">&bull;</span>
                <span className="text-gray-700">Fertility index</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">&bull;</span>
                <span className="text-gray-700">Moisture range</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The crop with the highest score is selected as the most suitable option.
            </p>
          </div>
        </div>

        {/* Graphs & Trend Analysis */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <TrendingUp size={32} />
              <h2>4. Graphs & Trend Analysis</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Line graphs and comparisons use:
            </p>
            <div className="bg-cyan-50 p-6 rounded-lg space-y-2 mb-6">
              <div className="flex items-start space-x-2">
                <span className="text-cyan-600 mt-1">&bull;</span>
                <span className="text-gray-700">Averages</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-cyan-600 mt-1">&bull;</span>
                <span className="text-gray-700">Differences</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-cyan-600 mt-1">&bull;</span>
                <span className="text-gray-700">Rate of change</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              to show how soil condition changes over time after rainfall or fertilizer application.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-900">
                Thus, Mathematics enables data normalization, fertility estimation, crop scoring, and trend visualization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
