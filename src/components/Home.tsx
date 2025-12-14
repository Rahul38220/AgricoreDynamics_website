import { Link } from 'react-router-dom';
import { Sprout, Target, Users, Award } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="mb-6">
              AgriCore Dynamics
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              ISPC Project 2025
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <p className="text-lg md:text-xl">
                Empowering farmers with real-time soil intelligence to optimize crop nutrition and maximize yields.
              </p>
            </div>
            <Link
              to="/product"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Discover NutriScan Pro
            </Link>
          </div>
        </div>
      </section>

      {/* About ISPC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">About ISPC</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Integrated Science Project Competition (ISPC) challenges students to develop innovative solutions that integrate mathematics, science, and computer science. Our mission is to apply interdisciplinary knowledge to solve real-world problems through creative problem-solving and scientific inquiry.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This project exemplifies the integration of chemistry, soil science, mathematical algorithms, and embedded systems engineering to address critical challenges in modern agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Project Hook */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-lg p-3 flex-shrink-0">
                <Target className="text-white" size={32} />
              </div>
              <div>
                <h2 className="mb-4">The Challenge We&apos;re Solving</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Traditional soil testing methods are expensive, time-consuming, and inaccessible to small-scale farmers. We&apos;ve developed an affordable, real-time NPK and pH monitoring system that puts precision agriculture in the hands of every farmer, enabling data-driven decisions that increase yields and reduce waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why NutriScan Pro?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sprout className="text-white" size={32} />
              </div>
              <h3 className="mb-3 text-blue-900">Real-Time Monitoring</h3>
              <p className="text-gray-700">
                Instant NPK and pH readings directly from your soil, delivered to your smartphone.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="mb-3 text-green-900">Affordable Technology</h3>
              <p className="text-gray-700">
                Bringing laboratory-grade analysis to farmers at a fraction of traditional costs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-100 rounded-xl p-6 text-center">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="mb-3 text-gray-900">User-Friendly Interface</h3>
              <p className="text-gray-700">
                Simple mobile app with actionable crop recommendations and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Explore Our Project</h2>
          <p className="text-xl mb-8 text-blue-50">
            Learn more about our team, the science behind our solution, and the technology that makes it possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/team"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Meet the Team
            </Link>
            <Link
              to="/integration"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              Scientific Foundations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}