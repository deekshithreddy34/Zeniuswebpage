"use client";

import { motion } from "framer-motion";
import { FaCloud, FaCode, FaLightbulb } from "react-icons/fa";
import AboutPage from "./about/page";
import Services from "./services/page";
import CareersPage from "./careers/page";
import ContactPage from "./contact/page";
export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        {/* Background Gradient & Shapes */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-50 to-white -z-10"></div>
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 rounded-full bg-blue-200 opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 rounded-full bg-purple-200 opacity-20 animate-pulse"></div>

        {/* Hero Text */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Zenius IT Services
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
         Empowering your business with advanced AI engineering and enterprise software solutions zenius is your trusted partner for innovation and digital transformation
        </motion.p>

        <motion.button
          className="px-12 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-xl hover:bg-blue-600 transition"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Learn More
        </motion.button>
      </section>

      {/* Services Section */}
      {/* <section className="w-full py-24 px-6 bg-gray-50 flex flex-col items-center space-y-12">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
          {[
            {
              title: "Software Development",
              desc: "Custom web and mobile solutions tailored to your business needs.",
              icon: <FaCode size={40} className="text-blue-500" />,
            },
            {
              title: "Cloud Solutions",
              desc: "Reliable, scalable cloud infrastructure and services.",
              icon: <FaCloud size={40} className="text-purple-500" />,
            },
            {
              title: "IT Consulting",
              desc: "Expert guidance to streamline your IT strategy.",
              icon: <FaLightbulb size={40} className="text-yellow-500" />,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 flex flex-col items-start space-y-4 hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
            >
              {service.icon}
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="w-full py-24 px-6 flex flex-col items-center bg-gradient-to-r from-blue-100 via-blue-50 to-white">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Ready to Transform Your Business?</h2>
        <p className="text-gray-700 text-center max-w-2xl mb-8">
          Contact us today and discover how Zenius IT Services can help you innovate, scale, and succeed.
        </p>
        <button className="px-12 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-xl hover:bg-blue-600 transition">
          Get In Touch
        </button>
      </section>

     <AboutPage></AboutPage>
     <Services></Services>
      <CareersPage></CareersPage>
      <ContactPage></ContactPage>

      
    </div>
  );
}
