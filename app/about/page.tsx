"use client";

import Orb from '../../components/ui/Orb';

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Orb Background */}
      <div style={{ width: '100%', height: '1000px', position: 'relative' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
          <p className="max-w-3xl text-white text-lg leading-relaxed mb-4">
            ZENIUS IT SERVICES PRIVATE LIMITED is a trusted leader in AI engineering and enterprise software development, dedicated to delivering ethical and innovative technology solutions. Our journey has been defined by a passion for excellence and a commitment to helping organizations achieve their digital transformation goals.
          </p>
          <p className="max-w-3xl text-white text-lg leading-relaxed mb-4">
            Our experienced and energetic team brings deep industry expertise across artificial intelligence, full stack development, contact center solutions, and seamless system integrations. We have successfully delivered impactful projects for clients in diverse sectors, including healthcare, utilities, and telecom—empowering businesses to enhance operations and deliver exceptional customer experiences.
          </p>
          <p className="max-w-3xl text-white text-lg leading-relaxed mb-4">
            At Zenius, we believe that true innovation comes from understanding our clients’ unique needs and collaborating closely to craft tailored, scalable solutions. Our specialists stay ahead of industry trends to ensure every project is future-ready and aligned with your business objectives.
          </p>
          <p className="max-w-3xl text-white text-lg leading-relaxed">
            Discover how our unwavering commitment to quality, integrity, and customer success continues to drive the evolution of enterprise technology. Keep scrolling to explore our services and learn how we can partner with you on your digital journey.
          </p>
        </div>
      </div>
    </div>
  );
}
