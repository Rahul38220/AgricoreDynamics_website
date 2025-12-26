import { Link } from 'react-router-dom';
import { Sprout, Target, Users, Award } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
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
    <div className="bg-white min-h-screen">
      {/* Hero Section - Fixed Overlay & Contrast */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565564331571-c3a69a159944?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        {/* Darker overlay to make white text POP */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest uppercase bg-green-600 rounded-full">
              ISPC Project 2025
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              AgriCore<span className="text-green-400">Dynamics</span>
            </h1>
            <div className="max-w-2xl mx-auto mb-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="text-xl md:text-2xl font-light">
                Empowering farmers with real-time soil intelligence to optimize nutrition and maximize yields.
              </p>
            </div>
            <Link
              to="/product"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1"
            >
              Discover NutriScan Pro
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Mission - 2 Column Layout for Balance */}
      <section className="py-24 bg-gray-50" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-left">The Mission</h2>
              <div className="w-20 h-1.5 bg-green-600 mb-8 rounded-full"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Integrated Science Project Competition (ISPC) challenges students to bridge the gap between theory and reality. Our project is a symphony of Chemistry, Physics, and Data Science.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 italic text-blue-800 text-lg leading-relaxed">
              "By digitizing soil health, we aren't just building a tool; we are building a sustainable future for agriculture where every drop of fertilizer is used with mathematical precision."
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Innovation - Fixed Card Widths */}
      <section className="py-24 bg-white" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Innovation</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sprout, title: "Real-Time Intelligence", color: "blue", desc: "Instant NPK & pH data streamed via Bluetooth to our mobile ecosystem." },
              { icon: Award, title: "Precision Engineering", color: "green", desc: "Advanced sensors calibrated for extreme accuracy in diverse soil types." },
              { icon: Users, title: "Citizen Science", color: "blue", desc: "An intuitive interface designed for farmers, researchers, and students alike." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300"
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed Padding and Contrast */}
      <section className="py-24" ref={ctaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="bg-blue-600 rounded-[2.5rem] py-16 px-8 text-white shadow-2xl overflow-hidden relative"
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to see it in action?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Explore the technical depth and meet the team behind AgriCore Dynamics.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/team" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
                Meet the Team
              </Link>
              <Link to="/integration" className="bg-blue-700 text-white border border-blue-400 px-10 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all">
                The Science
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
