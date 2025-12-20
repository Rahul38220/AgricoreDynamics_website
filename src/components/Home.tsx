import { Link } from 'react-router-dom';
import { Sprout, Target, Users, Award } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export function Home() {
  const aboutRef = useRef(null);
  const hookRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const hookInView = useInView(hookRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-green-600 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565564331571-c3a69a159944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwc3VucmlzZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2NjE1MDcwMXww&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/75 to-green-600/75" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="mb-6 text-5xl md:text-6xl"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AgriCore Dynamics
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-blue-50"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ISPC Project 2025
            </motion.p>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl">
                Empowering farmers with real-time soil intelligence to optimize crop nutrition and maximize yields.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/product"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Discover NutriScan Pro
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About ISPC */}
      <section className="py-16 bg-white" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">About ISPC</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          </motion.div>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Integrated Science Project Competition (ISPC) challenges students to develop innovative solutions that integrate mathematics, science, and computer science. Our mission is to apply interdisciplinary knowledge to solve real-world problems through creative problem-solving and scientific inquiry.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This project exemplifies the integration of chemistry, soil science, mathematical algorithms, and embedded systems engineering to address critical challenges in modern agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Hook */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50" ref={hookRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-shadow duration-300"
            initial="hidden"
            animate={hookInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 bg-white" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Why NutriScan Pro?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Sprout className="text-white" size={32} />
              </motion.div>
              <h3 className="mb-3 text-blue-900">Real-Time Monitoring</h3>
              <p className="text-gray-700">
                Instant NPK and pH readings directly from your soil, delivered to your smartphone.
              </p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Award className="text-white" size={32} />
              </motion.div>
              <h3 className="mb-3 text-green-900">Affordable Technology</h3>
              <p className="text-gray-700">
                Bringing laboratory-grade analysis to farmers at a fraction of traditional costs.
              </p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-green-100 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-600 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Users className="text-white" size={32} />
              </motion.div>
              <h3 className="mb-3 text-gray-900">User-Friendly Interface</h3>
              <p className="text-gray-700">
                Simple mobile app with actionable crop recommendations and insights.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white" ref={ctaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Explore Our Project</h2>
            <p className="text-xl mb-8 text-blue-50">
              Learn more about our team, the science behind our solution, and the technology that makes it possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/team"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Meet the Team
              </Link>
              <Link
                to="/integration"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Scientific Foundations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}