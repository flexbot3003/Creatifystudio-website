import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ClickSpark({ sparkColor = "#fff", sparkCount = 8, duration = 400 }: any) {
  const [clicks, setClicks] = useState<{id: number, x: number, y: number}[]>([]);

  useEffect(() => {
    // This listens to clicks across the entire website
    const handleGlobalClick = (e: MouseEvent) => {
      setClicks(prev => [...prev, { id: Date.now(), x: e.clientX, y: e.clientY }]);
      
      // Clean up the sparks after they finish animating
      setTimeout(() => {
        setClicks(prev => prev.filter(click => click.id !== Date.now()));
      }, duration);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [duration]);

  return (
    // Fixed inset-0 covers the screen, pointer-events-none ensures it doesn't block your buttons!
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {clicks.map(click => (
        <div key={click.id} className="absolute pointer-events-none" style={{ left: click.x, top: click.y }}>
          {Array.from({ length: sparkCount }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
              animate={{
                scale: [0, 1.5, 0],
                x: Math.cos((i * 360) / sparkCount * (Math.PI / 180)) * 60,
                y: Math.sin((i * 360) / sparkCount * (Math.PI / 180)) * 60,
                opacity: 0
              }}
              transition={{ duration: duration / 1000, ease: "easeOut" }}
              className="absolute w-2 h-2 rounded-full"
              style={{ backgroundColor: sparkColor }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
