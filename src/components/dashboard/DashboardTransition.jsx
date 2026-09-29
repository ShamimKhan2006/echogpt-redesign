'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function DashboardTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-full"
    >
      {children}
    </motion.div>
  );
}
