import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Icosahedron, Float } from '@react-three/drei';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

function BgShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[1, 0]} position={[-4, 1, -2]}>
          <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.2} />
        </Icosahedron>
      </Float>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[1.5, 0]} position={[4, -1, -3]}>
          <meshBasicMaterial color="#d946ef" wireframe transparent opacity={0.2} />
        </Icosahedron>
      </Float>
    </>
  );
}

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      institution: 'Institute of Space Technology (IST)',
      period: 'Sep 2023 - Present',
      status: 'Current',
      icon: <GraduationCap size={40} className="text-violet-400 mb-4" />,
      details: ['Algorithms & Data Structures', 'Software Engineering', 'CGPA: 3.8/4.0']
    },
    {
      id: 2,
      degree: 'Intermediate in Computer Science',
      institution: 'Punjab College of Science & Tech',
      period: 'Dec 2021 - May 2023',
      status: 'Completed',
      icon: <BookOpen size={40} className="text-fuchsia-400 mb-4" />,
      details: ['Physics', 'Mathematics', 'Computer Science Fundamentals']
    },
    {
      id: 3,
      degree: 'Matriculation (Science)',
      institution: 'Army Public School (APSACS)',
      period: 'Jan 2020 - Dec 2021',
      status: 'Completed',
      icon: <Award size={40} className="text-cyan-400 mb-4" />,
      details: ['Biology', 'Physics', 'Chemistry', 'Distinction holder']
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Background 3D Canvas specifically for Education section */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Canvas>
          <BgShapes />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Education & Qualifications
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            My academic journey and foundational knowledge
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleZ: 0.5, z: -500 }}
          whileInView={{ opacity: 1, scaleZ: 1, z: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-6xl mx-auto pb-16 perspective-1000"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            autoplay={{ delay: 3500, disableOnInteraction: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full pt-10 pb-16 education-swiper"
          >
            {education.map((item) => (
              <SwiperSlide key={item.id} className="w-[300px] sm:w-[400px] h-auto self-stretch">
                {({ isActive }) => (
                  <div
                    className="relative h-[350px] w-full group cursor-pointer"
                    style={{ perspective: 1000 }}
                  >
                    <div 
                      className={`w-full h-full relative transition-transform duration-700 preserve-3d group-hover:rotate-y-180 ${
                        isActive 
                          ? 'shadow-[0_0_30px_rgba(139,92,246,0.6)] border-violet-400 scale-105 rounded-2xl' 
                          : 'scale-95 opacity-80'
                      }`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Front */}
                      <div 
                        className={`absolute inset-0 glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center shimmer-hover backface-hidden border ${isActive ? 'border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.4)]' : 'border-white/10'}`}
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        {item.icon}
                        <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                        <p className="text-slate-400 text-sm mb-4">{item.institution}</p>
                        <span className={`px-4 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'Current' ? 'bg-violet-500/20 text-violet-300' : 'bg-fuchsia-500/20 text-fuchsia-300'
                        }`}>
                          {item.period}
                        </span>
                      </div>

                      {/* Back */}
                      <div 
                        className="absolute inset-0 bg-slate-900 border border-violet-500/50 p-8 rounded-2xl flex flex-col items-center justify-center text-center shimmer-hover backface-hidden shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                      >
                        <h4 className="text-lg font-bold text-violet-400 mb-6">Key Highlights</h4>
                        <ul className="space-y-3">
                          {item.details.map((detail, i) => (
                            <li key={i} className="text-slate-200 text-sm">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
