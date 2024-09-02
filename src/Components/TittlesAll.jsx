import React from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function TittlesAll(props) {

  const text = props.tittle;
  const [ref, inView] = useInView({ triggerOnce: true });
  const letters = text.split("");
  return (
    <>
      <div ref={ref}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </>
  )
}

export default TittlesAll