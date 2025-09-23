import React from 'react';
import RotatingText from '../../components/ui/RotatingText';
import ShinyText from '../../components/ui/ShinyText';
import GlareHover from '../../components/ui/GlareHover'
const Page = () => {
  return (

    <div>
        <div className='text-3xl font-bold text-center mt-12'>
            CAREERS
        </div>
    <div className="flex items-center justify-center mt-5 space-x-4">

        
      {/* Static text outside */}
      <span className="text-3xl font-bold">JOIN US</span>

      {/* Button with rotating text */}
      <div className="inline-flex bg-purple-600 text-white rounded-lg overflow-hidden flex items-center justify-center px-4 py-2">
  <RotatingText
    texts={["TO" ,"GROW","INNOVATE","LEAD","EXCEL"]}
    mainClassName="flex items-center justify-center font-bold text-3xl"
    staggerFrom="last"
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '-120%' }}
    staggerDuration={0.025}
    splitLevelClassName="overflow-hidden"
    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
    rotationInterval={2000}
  />
</div>

    </div>
    <div className="flex justify-center items-center min-h-screen">
       

<div style={{ height: '600px', position: 'relative' }}>
  <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.3}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={800}
    playOnce={false}
  >
    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#333', margin: 0 }}>
      
    </h2>
    <div className='p-8 jutify-center text-font-semibold text-lg'>
    <p>Zenius is a fast-growing organization within the AI Engineering and Enterprise Cloud Application Development space. We specialize in building innovative, scalable solutions that empower businesses to thrive in the digital era. Our team of passionate professionals works on cutting-edge technologies, from AI and cloud computing to enterprise software solutions, ensuring every project delivers real impact.
We are constantly looking for talented individuals who are eager to learn, innovate, and grow with us. If you are driven by curiosity, collaboration, and excellence, we would love to hear from you. You can send your CVs to careers@zeniusit.com
 and become part of our journey to shape the future of enterprise technology.</p>
 </div>
  </GlareHover>
</div>
    </div>

    
    </div>
  );
};

export default Page;
