import { Heart, BookOpen } from 'lucide-react';

export function Acknowledgement() {
  const acknowledgements = [
    {
      category: 'Teachers & Mentors',
      people: [
        '[Teacher Name], Science Department - Guidance on experimental design and methodology',
        '[Mentor Name], Agricultural Extension Office - Insights on farmer needs and field testing',
        '[Advisor Name], Engineering Department - Technical support with electronics and programming',
      ],
    },
    {
      category: 'Family & Support',
      people: [
        'Our families for their unwavering support and encouragement throughout this project',
        'Friends who provided valuable feedback during testing phases',
      ],
    },
    {
      category: 'Community Partners',
      people: [
        '[Local Farm Name] - Providing test sites and real-world feedback',
        '[Institution Name] - Access to laboratory equipment for validation',
      ],
    },
  ];

  const references = [
    {
      type: 'Research Papers',
      items: [
        'Nutrient Management in Crop Production: A Review - Journal of Agricultural Science, 2023',
        'Ion-Selective Electrodes for Soil Analysis - Sensors and Actuators B: Chemical, 2022',
        'Precision Agriculture Technologies: Current Status and Future Perspectives - Agriculture Review, 2023',
      ],
    },
    {
      type: 'Books',
      items: [
        'Soil Chemistry and Fertility - Brady, N.C. & Weil, R.R. (2021)',
        'Electrochemical Sensors in Practice - Wang, J. (2020)',
        'Embedded Systems Programming with ESP32 - Kurniawan, A. (2022)',
      ],
    },
    {
      type: 'Websites & Online Resources',
      items: [
        'ESP32 Technical Documentation - https://docs.espressif.com',
        'FAO Soils Portal - https://www.fao.org/soils-portal',
        'USDA Natural Resources Conservation Service - https://www.nrcs.usda.gov',
        'Arduino Community Forum - https://forum.arduino.cc',
        'React Native Documentation - https://reactnative.dev',
      ],
    },
    {
      type: 'Technical Standards',
      items: [
        'ASTM D4972 - Standard Test Methods for pH of Soils',
        'ISO 14255 - Soil Quality - Determination of Nitrate Nitrogen',
        'Bluetooth Low Energy Specification v5.0',
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Credits & References</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            This project would not have been possible without the support, guidance, and knowledge shared by many individuals and resources.
          </p>
        </div>

        {/* Acknowledgements */}
        <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Heart size={32} />
              <h2>Acknowledgements</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-8 leading-relaxed">
              We would like to express our sincere gratitude to the following individuals and organizations who have contributed to the success of this project:
            </p>
            <div className="space-y-8">
              {acknowledgements.map((section, index) => (
                <div key={index}>
                  <h3 className="text-gray-900 mb-4">{section.category}</h3>
                  <div className="space-y-3">
                    {section.people.map((person, idx) => (
                      <div key={idx} className="flex items-start space-x-3 bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-lg">
                        <div className="bg-pink-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{person}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-lg border-l-4 border-pink-500">
              <p className="text-gray-900">
                Special thanks to the ISPC organizing committee for creating this platform that encourages interdisciplinary learning and innovation among students.
              </p>
            </div>
          </div>
        </div>

        {/* Bibliography */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <div className="flex items-center space-x-3 text-white">
              <BookOpen size={32} />
              <h2>Bibliography</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-8 leading-relaxed">
              The following sources provided essential knowledge, technical guidance, and scientific foundation for our project:
            </p>
            <div className="space-y-8">
              {references.map((section, index) => (
                <div key={index}>
                  <h3 className="text-gray-900 mb-4">{section.type}</h3>
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                          {idx + 1}
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h4 className="text-blue-900 mb-3">Note on Placeholder Content</h4>
              <p className="text-gray-700">
                The references listed above are placeholders. In the final version, these will be replaced with actual sources consulted during research and development, properly formatted according to the required citation style (APA, MLA, or IEEE as specified by competition guidelines).
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl p-8 text-white text-center">
          <h3 className="mb-4">Thank You</h3>
          <p className="text-lg text-blue-50 max-w-3xl mx-auto">
            This project represents countless hours of research, experimentation, and collaboration. We are deeply grateful to everyone who has been part of this journey. Your support has made NutriScan Pro a reality.
          </p>
        </div>
      </div>
    </div>
  );
}
