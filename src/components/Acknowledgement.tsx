import { Heart, BookOpen } from 'lucide-react';

export function Acknowledgement() {
  const acknowledgements = [
    {
      category: 'Teachers & Mentors',
      people: [
        'We sincerely thank Nilesh sir for mentoring our team during this project, providing valuable guidance in refining our approach and presentation.',
        'We also extend our gratitude to the Science Department for fostering an environment of experimentation, inquiry, and independent problem-solving that enabled us to initiate and develop this project from the ground up.',
      ],
    },
    {
      category: 'Industry Reference & Market Study Inputs',
      people: [
        'To understand real-world soil testing practices, costs, and turnaround times, we consulted Oxyfood Laboratory OPC Pvt. Ltd., an operational soil testing laboratory.',
        'Based on our discussion, a standard soil analysis typically includes parameters such as pH, electrical conductivity (EC), nitrogen, phosphorus, potassium, organic carbon, calcium, magnesium, micronutrients, and water holding capacity.',
        'The laboratory indicated that comprehensive soil testing requires approximately 0.5 kg of soil per sample, costs around ₹1,500 + GST, and has a testing period of 4–5 days.',
        'These insights helped us benchmark our system against existing market solutions and motivated the need for faster, field-level soil diagnostics.',
      ],
    },
  ];

  const references = [
    {
      type: 'Research Papers',
      items: [
        {
          title: 'Soil Sampling: Bridging Farmer’s Knowledge, Perception and Adoption for Sustainable Agriculture in Punjab, India',
          desc: 'Highlights how high cost, delayed results, and poor accessibility reduce soil-testing adoption, justifying the need for rapid, on-site soil analysis.',
          link: 'https://onlinelibrary.wiley.com/doi/10.1111/ajae.12513'
        },
        {
          title: 'Economic and Behavioral Factors Affecting Soil Testing Adoption Among Farmers',
          desc: 'Shows that centralized lab testing discourages frequent soil testing, motivating decentralized, low-cost sensor-based systems.',
          link: 'https://www.sciencedirect.com/science/article/abs/pii/S0378429024003691'
        },
        {
          title: 'Precision Agriculture and Soil Nutrient Monitoring Systems',
          desc: 'Emphasizes continuous soil nutrient monitoring for optimized fertilizer use and sustainability, aligning with our real-time sensing approach.',
          link: 'https://journaljeai.com/index.php/JEAI/article/view/3385'
        }
      ],
    },
    {
      type: 'Government / Official Websites',
      items: [
        { title: 'Indian Council of Agricultural Research (ICAR)', link: 'https://icar.org.in' },
        { title: 'Soil Health Card Scheme, Government of India', link: 'https://soilhealth.dac.gov.in' }
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
            This project would not have been possible without the support, guidance, and research from these individuals and institutions.
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
            <div className="space-y-8">
              {acknowledgements.map((section, index) => (
                <div key={index}>
                  <h3 className="text-gray-900 mb-4 font-bold">{section.category}</h3>
                  <div className="space-y-3">
                    {section.people.map((text, idx) => (
                      <div key={idx} className="flex items-start space-x-3 bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-lg">
                        <div className="bg-pink-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
            <div className="space-y-8">
              {references.map((section, index) => (
                <div key={index}>
                  <h3 className="text-gray-900 mb-4 font-bold">{section.type}</h3>
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col space-y-1 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">{idx + 1}</span>
                          <span className="font-semibold text-gray-900">{item.title}</span>
                        </div>
                        {'desc' in item && <p className="text-sm text-gray-600 ml-8">{item.desc}</p>}
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm ml-8 hover:underline italic">
                          {item.link}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Standards Section */}
            <div className="mt-12 pt-8 border-t border-gray-100">
               <h3 className="text-gray-900 mb-4 font-bold">Technical Standards</h3>
               <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The system is designed in alignment with commonly accepted agricultural soil testing parameters such as pH, electrical conductivity, and primary nutrients (N, P, K).
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Emphasis was placed on portability, rapid data availability, and ease of interpretation for field-level usage, complementing existing laboratory-based soil testing methods rather than replacing them.
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl p-8 text-white text-center">
          <h3 className="mb-4">Thank You</h3>
          <p className="text-lg text-blue-50 max-w-3xl mx-auto">
            This project represents countless hours of research, experimentation, and collaboration. Your support has made NutriScan Pro a reality.
          </p>
        </div>
      </div>
    </div>
  );
}
