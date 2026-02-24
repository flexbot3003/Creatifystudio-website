import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React from 'react';

export default function TiltedCard({
  imageSrc, altText, captionText, containerHeight, containerWidth, rotateAmplitude = 12, scaleOnHover = 1.05, displayOverlayContent, overlayContent
}: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", width: containerWidth, height: containerHeight }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: scaleOnHover }}
      className="relative rounded-xl overflow-hidden cursor-pointer shadow-2xl"
    >
      <img src={imageSrc} alt={altText} className="w-full h-full object-cover" />
      {displayOverlayContent && (
        <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold p-4 text-center pointer-events-none">
          {overlayContent || captionText}
        </div>
      )}
    </motion.div>
  );
}
