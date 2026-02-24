import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ClickSpark({ sparkColor = "#fff", sparkCount = 8, duration = 400 }: any) {
  const [clicks, setClicks] = useState<{id: number, x: number, y: number}[]>([]);

  const handleClick = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClicks([...clicks, { id: Date.now(), x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    // Keep array clean
    setTimeout(() => setClicks(prev => prev.filter(c => c.id !== clicks[0]?.id)), duration);
  };

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden" onClick={handleClick}>
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
