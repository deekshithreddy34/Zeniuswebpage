"use client";

import React from "react";
import { Briefcase, Users, Cpu, Brain } from "lucide-react";
import RotatingText from "../../components/ui/RotatingText";
import BlurText from "../../components/ui/BlurText";
import SpotlightCard from "../../components/ui/SpotlightCard";

const careersData = [
  {
    icon: <Brain className="text-green-400 w-8 h-8" />,
    title: "Innovation",
    description:
      "Work on cutting-edge AI, cloud, and enterprise solutions shaping the future.",
  },
  {
    icon: <Cpu className="text-yellow-400 w-8 h-8" />,
    title: "Technology",
    description:
      "Hands-on experience with modern tech stacks and scalable solutions.",
  },
  {
    icon: <Users className="text-purple-400 w-8 h-8" />,
    title: "Collaboration",
    description:
      "Join passionate teams that value knowledge sharing and teamwork.",
  },
  {
    icon: <Briefcase className="text-pink-400 w-8 h-8" />,
    title: "Growth",
    description:
      "Opportunities to learn, lead, and grow within a fast-growing organization.",
  },
];

const CareersPage = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12 space-y-16 flex flex-col items-center">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <BlurText
          text="CAREERS"
          animateBy="words"
          direction="top"
          className="text-3xl font-semibold text-gray-900 justify-center"
        />
        <div className="flex justify-center items-center space-x-4 flex-wrap">
          <span className="text-3xl font-semibold text-gray-800">JOIN US</span>
          <div className="inline-flex bg-purple-600 text-white rounded-lg px-5 py-2 overflow-hidden">
            <RotatingText
              texts={["TO", "GROW", "INNOVATE", "LEAD", "EXCEL"]}
              mainClassName="text-3xl font-bold"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          At Zenius, we build innovative AI and cloud solutions that empower businesses. Join a team where your ideas, creativity, and talent are valued.
        </p>
      </div>

      {/* Why Join Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {careersData.map((item, idx) => (
        <SpotlightCard
  key={idx}
  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-64 flex flex-col"
>
  <div className="flex items-start space-x-3 mb-3">
    {item.icon}
    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
  </div>
  <div className="flex-1">
    <p className="text-gray-600 text-sm">{item.description}</p>
  </div>
</SpotlightCard>
        ))}
      </div>

      {/* Company Info + CTA */}
      <div className="max-w-4xl w-full bg-gray-50 p-10 rounded-3xl shadow-lg flex flex-col space-y-6 text-center">
        <p className="text-gray-700 text-lg">
          Zenius is a fast-growing organization in AI Engineering and Enterprise Cloud Development. We empower businesses with innovative and scalable solutions.
        </p>
        <p className="text-gray-700 text-lg">
          We are constantly looking for talented individuals eager to learn, innovate, and grow. Join our team and contribute to shaping the future of enterprise technology.
        </p>
        <a
          href="mailto:careers@zeniusit.com"
          className="bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
        >
          Send Your CV
        </a>
      </div>
    </div>
  );
};

export default CareersPage;
