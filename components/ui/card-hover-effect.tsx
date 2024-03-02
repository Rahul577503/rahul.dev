import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        `${className} grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-10`
      )}
    >
      {items.map((item, idx) => {
        const Icons = item.Icon;
        return (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800 dark:bg-slate-800/[0.8] block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-md p-4 min-w-full bg-black group-hover:ring-2 ring-amber-400 relative z-100 transition-all duration-500 cursor-pointer">
              <div className="py-2 px-auto  space-y-5">
                <Icons className="w-8 h-8 mx-auto" />
                <p className=" text-sm lg:text-2xl font-bold text-center text-gray-300">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
