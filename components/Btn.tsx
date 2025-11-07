"use client";
import React from "react";
import { motion } from "motion/react";
const Btn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.9 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Btn;
