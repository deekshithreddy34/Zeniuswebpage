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

       <div>
        <CircularText
  text="ZENIUS*IT*SERVICES*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
</div>
 <div className="flex items-center justify-center ">
   

<SplitText
  text="INNOVATE"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
 </div>

  <div className="flex items-center justify-center">
   
   <SplitText
  text="TRANSFER"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>

  </div>
   <div className="flex items-center justify-center">
   <SplitText
  text="TRUST"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
  </div>      
     </div>
     
  );
}
