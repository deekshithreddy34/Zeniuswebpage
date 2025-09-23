"use client"

import Image from "next/image";
import CircularText from '../components/ui/CircularText';
import SplitText from "../components/ui/SplitText";
import LightRays from '../components/ui/LightRays';

export default function Home() {

   const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
     <div>
      
      <div style={{ width: '100%', position: 'relative', minHeight: '600px' }}>
  {/* LightRays effect positioned absolutely */}
  
  <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays absolute inset-0"
  />

  {/* Content overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
  <CircularText
    text="ZENIUS*IT*SERVICES*"
    onHover="speedUp"
    spinDuration={20}
    className="custom-class"
  />

  <SplitText
    text="INNOVATE"
    className="text-2xl text-center"
    delay={100}
    duration={0.6}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    onLetterAnimationComplete={() => console.log('INNOVATE animated')}
  />

  <SplitText
    text="TRANSFER"
    className="text-2xl text-center"
    delay={100}
    duration={0.6}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    onLetterAnimationComplete={() => console.log('TRANSFER animated')}
  />

  <SplitText
    text="TRUST"
    className="text-2xl text-center"
    delay={100}
    duration={0.6}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    onLetterAnimationComplete={() => console.log('TRUST animated')}
  />
</div>

</div>

       
     </div>
     
  );
}
