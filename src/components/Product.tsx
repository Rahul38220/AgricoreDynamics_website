import { Camera, Video, Smartphone, Wifi, Battery, AlertTriangle, DollarSign } from 'lucide-react';

export function Product() {
  const features = [
    {
      icon: <Smartphone size={24} />,
      title: 'Real-Time Soil Monitoring',
      description: 'Continuously measures pH, moisture, and EC to assess soil condition instantly.',
    },
    {
      icon: <Wifi size={24} />,
      title: 'Wireless Data Transmission',
      description: 'The ESP32 microcontroller sends data wirelessly to the mobile interface using Bluetooth.',
    },
    {
      icon: <Camera size={24} />,
      title: 'Smart Soil Fertility Estimation',
      description: 'Uses a derived NPK index based on sensor inputs to estimate relative nutrient availability.',
    },
    {
      icon: <Battery size={24} />,
      title: 'Crop & Fertilizer Recommendations',
      description: 'Provides crop suitability and fertilizer guidance based on current soil condition and predefined crop requirements.',
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Low-Cost & Portable Design',
      description: 'Designed to be affordable and easy to use for small-scale farmers and educational demonstrations.',
    },
  ];

  const limitations = [
    {
      title: 'Indirect NPK Measurement',
      description: 'The system does not directly measure individual Nitrogen, Phosphorus, and Potassium concentrations. Instead, it estimates nutrient status using electrical conductivity as a proxy.',
    },
    {
      title: 'Sensor Calibration',
      description: 'The pH and EC sensors require periodic calibration to maintain stable readings.',
    },
    {
      title: 'Accuracy vs Cost',
      description: 'The sensors provide relative trends rather than laboratory-grade precision, making the system suitable for decision support rather than chemical certification.',
    },
    {
      title: 'Moisture Dependence',
      description: 'EC and pH readings are most accurate when the soil has adequate moisture or when measured using a proper soil–water slurry.',
    },
    {
      title: 'Power Limitations',
      description: 'The current prototype depends on external USB power. Battery and solar-based power systems are planned for future versions.',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">NutriScan Pro</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Advanced soil monitoring technology that puts precision agriculture in your hands.
          </p>
        </div>

        {/* Product Media */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Picture */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4">
              <div className="flex items-center space-x-2 text-white">
                <Camera size={24} />
                <h3>Product Image</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Camera size={64} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-lg">[Product Photo]</p>
                  <p className="text-sm">High-resolution image of NutriScan Pro</p>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Video */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4">
              <div className="flex items-center space-x-2 text-white">
                <Video size={24} />
                <h3>Product Demo</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center mb-4">
                <div className="text-center text-gray-500">
                  <Video size={64} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-lg">[Demo Video]</p>
                  <p className="text-sm">Product demonstration and usage guide</p>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg hover:shadow-lg transition-shadow">
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6">
            <h2 className="text-white">How It Works</h2>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                NutriScan Pro is a portable, IoT-enabled soil monitoring device designed to provide real-time insight into soil condition using affordable electronic sensors. The system measures key soil health parameters—pH, moisture, and electrical conductivity (EC)—and uses these values to estimate relative soil fertility through a derived NPK index. The results are transmitted wirelessly to a mobile interface for analysis and recommendations.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                <h3 className="mb-4 text-gray-900">System Overview</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">1</span>
                    <div>
                      <span className="text-gray-900">Soil Sampling & Sensor Placement:</span> The soil moisture sensor is inserted directly into the soil. For pH and EC measurement, a soil–water slurry is prepared using distilled water.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">2</span>
                    <div>
                      <span className="text-gray-900">Data Acquisition:</span> The pH sensor measures soil acidity or alkalinity. The moisture sensor measures water content of the soil. The EC (TDS) sensor measures dissolved ion concentration, which acts as an indicator of nutrient presence.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">3</span>
                    <div>
                      <span className="text-gray-900">Processing:</span> The ESP32 microcontroller converts all analog sensor signals into digital values and applies calibration and normalization algorithms.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">4</span>
                    <div>
                      <span className="text-gray-900">Wireless Transmission:</span> Sensor data is transmitted wirelessly to a mobile interface using Bluetooth communication.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">5</span>
                    <div>
                      <span className="text-gray-900">Analysis & Recommendations:</span> The application processes pH, moisture, and EC values to calculate a derived soil fertility (NPK) index, which is then compared with crop-specific soil requirements to provide fertilizer and crop suitability guidance.
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="mb-4 text-gray-900">Measured Parameters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="text-blue-900 mb-2">Soil pH</h4>
                    <p className="text-gray-700 text-sm">Indicates soil acidity or alkalinity (scale 0–14). It plays a crucial role in determining nutrient availability to plants.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="text-green-900 mb-2">Soil Moisture</h4>
                    <p className="text-gray-700 text-sm">Represents the water content present in the soil. Moisture strongly affects nutrient movement and plant uptake.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h4 className="text-purple-900 mb-2">Electrical Conductivity (EC / TDS)</h4>
                    <p className="text-gray-700 text-sm">Represents the concentration of dissolved ions in soil water. Since nutrients such as nitrogen, potassium, and phosphate exist in ionic form in solution, EC is used as a proxy indicator of overall nutrient strength.</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="text-orange-900 mb-2">Derived NPK (Soil Fertility) Index</h4>
                    <p className="text-gray-700 text-sm">Instead of directly measuring separate Nitrogen, Phosphorus, and Potassium concentrations (which requires expensive laboratory equipment), the system computes a relative fertility index using a combination of pH, EC, and moisture values. This index helps categorize soil as nutrient-poor, moderate, or nutrient-rich.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-lg p-3 text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Limitations */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <AlertTriangle size={32} />
              <h2>Current Limitations</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              As with any prototype, NutriScan Pro has certain limitations that we&apos;ve identified through testing. We believe in transparency and are actively working on improvements for future versions:
            </p>
            <div className="space-y-4">
              {limitations.map((limitation, index) => (
                <div key={index} className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                  <h4 className="text-gray-900 mb-2">{limitation.title}</h4>
                  <p className="text-gray-700">{limitation.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <span className="text-blue-900">Note:</span> Despite these limitations, NutriScan Pro offers a significant improvement over guess-based fertilizer application and infrequent laboratory soil testing. It provides rapid, affordable, and repeatable soil health assessment, making scientific soil monitoring more accessible to farmers and students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}