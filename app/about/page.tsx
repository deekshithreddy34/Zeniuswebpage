"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen relative bg-white text-gray-900 overflow-hidden">

      {/* Hero Section */}
      <div className="text-center pt-32 md:pt-20 px-6 max-w-4xl mx-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="text-5xl md:text-4xl font-extrabold text-blue-400"
        >
          ABOUT ZENIUS IT SERVICES
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Zenius IT Services is a trusted leader in AI engineering and enterprise software development, delivering scalable and innovative technology solutions to businesses across multiple sectors.
        </motion.p>
      </div>

      {/* Content Sections with Images */}
      <div className="max-w-5xl mx-auto space-y-16 px-6 py-16">
        {/* Our Mission */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-10 shadow-lg flex flex-col md:flex-row items-center gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to help organizations achieve digital transformation by delivering innovative, scalable, and tailored technology solutions.
            </p>
          </div>
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/goals.jpg"
              alt="Mission image"
              className="w-full h-64 md:h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-10 shadow-lg flex flex-col md:flex-row items-center gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Our Team</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our experienced and energetic team brings deep industry expertise and creativity to every project. We have successfully delivered impactful solutions for clients in healthcare, utilities, telecom, and other sectors, enhancing operations and delivering exceptional customer experiences.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
              alt="Team image"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-10 shadow-lg flex flex-col md:flex-row items-center gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Our Approach</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We collaborate closely with clients to understand their unique needs and craft future-ready solutions. Our specialists stay ahead of industry trends, ensuring every project is scalable, secure, and aligned with business objectives.
            </p>
          </div>
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/collaborate.jpg"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Why Zenius */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-10 shadow-lg flex flex-col md:flex-row items-center gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Why Zenius?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Zenius, we are committed to quality, integrity, and customer success. Our innovative solutions empower organizations to thrive in the digital era.
            </p>
          </div>
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/professional.jpg"
              alt="Why Zenius image"
              className="w-full h-64 md:h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
