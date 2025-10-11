"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center px-6 py-20 space-y-12">
      {/* Page Title */}
      <motion.h1
        className="text-5xl font-bold text-blue-600 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Our Contacts
      </motion.h1>

      {/* Contact Info + Map */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center max-w-6xl w-full gap-12">
        {/* Contact Info Cards */}
        <motion.div
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {/* Address Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Address</h3>
              <p className="text-gray-700 leading-relaxed">
                3rd Floor, SDS Complex,<br />
                Om Sri Sai Nagar Colony, Old Alwal,<br />
                Hyderabad, Telangana - 500010
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start space-x-4">
            <Phone className="w-6 h-6 text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Phone</h3>
              <p className="text-gray-700 leading-relaxed">
                +1 408 457 4613<br />
                +91 9985491021
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start space-x-4 col-span-1 sm:col-span-2">
            <Mail className="w-6 h-6 text-purple-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">E-mail</h3>
              <p className="text-gray-700 leading-relaxed">sales@zeniusit.com</p>
            </div>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          className="flex-1 w-full h-96 rounded-xl overflow-hidden shadow-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <iframe
            title="Zenius IT Services Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1523812281126!2d78.45950467476423!3d17.489506588087862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91936ce1e1d1%3A0x5d3d46c7650db8!2sZenius%20IT%20Services!5e0!3m2!1sen!2sin!4v1697036912345!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
