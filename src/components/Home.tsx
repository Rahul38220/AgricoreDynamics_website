import { Link } from 'react-router-dom';
import { Sprout, Target, Users, Award } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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
    <div className="relative overflow-hidden bg-white">
      {/* AESTHETIC LAYER: Background Mesh Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-green-100 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1565564331571-c3a69a159944?auto=format&fit=crop&q=80&w=1920')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-white" />
          
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/30"
                variants={fadeInUp}
              >
                ISPC Project 2025
              </motion.span>
              <motion.h1 
                className="mb-6 text-6xl md:text-8xl font-bold tracking-tight"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                AgriCore<span className="text-green-400">.</span>
              </motion.h1>
              
              <motion.div 
                className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-10 border border-white/20 shadow-2xl"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                  Empowering farmers with <span className="font-semibold text-green-300">real-time soil intelligence</span> to optimize nutrition and maximize yields.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} transition={{ delay: 0.6 }}>
                <Link
                  to="/product"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-blue-600 transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-blue-50 shadow-xl"
                >
                  Discover NutriScan Pro
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About ISPC - Updated with Glass effect */}
        <section className="py-24" ref={aboutRef}>
          <div className="max-w-5xl mx-auto px-4">
            <motion.div 
              className="bg-white/40 backdrop-blur-md border border-gray-100 rounded-3xl p-12 shadow-xl"
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">The Mission</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">
                <p>
                  The Integrated Science Project Competition (ISPC) challenges students to bridge the gap between theory and reality. Our project is a symphony of <span className="text-blue-600 font-medium">Chemistry, Physics, and Data Science.</span>
                </p>
                <p>
                  By digitizing soil health, we aren't just building a tool; we are building a sustainable future for agriculture where every drop of fertilizer is used with mathematical precision.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Hook - Sleeker Card */}
        <section className="py-16" ref={hookRef}>
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-[2rem] shadow-2xl p-10 md:p-16 text-white relative overflow-hidden"
              initial="hidden"
              animate={hookInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
                  <Target className="text-green-400" size={48} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">The Global Challenge</h2>
                  <p className="text-blue-100 text-xl leading-relaxed font-light">
                    Traditional soil testing is stuck in the past—slow, expensive, and distant. 
                    <span className="text-white font-semibold"> NutriScan Pro</span> changes the equation by providing lab-grade results in seconds, right in the palm of your hand.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features - Modern Cards */}
        <section className="py-24" ref={featuresRef}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Innovation</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Sprout, title: "Real-Time Intelligence", color: "blue", desc: "Instant NPK & pH data streamed via Bluetooth to our mobile ecosystem." },
                { icon: Award, title: "Precision Engineering", color: "green", desc: "Advanced sensors calibrated for extreme accuracy in diverse soil types." },
                { icon: Users, title: "Citizen Science", color: "indigo", desc: "An intuitive interface designed for farmers, researchers, and students alike." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all group"
                  whileHover={{ y: -10 }}
                  initial="hidden"
                  animate={featuresInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`w-14 h-14 bg-${item.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`text-${item.color}-600`} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Minimalist & Bold */}
        <section className="py-24" ref={ctaRef}>
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to see it in action?</h2>
              <div className="flex flex-wrap justify-center gap-6 relative z-10">
                <Link to="/team" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">
                  Meet the Team
                </Link>
                <Link to="/integration" className="bg-transparent border-2 border-white/40 backdrop-blur-md px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                  The Science
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
