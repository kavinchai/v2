import React from "react";
import { motion } from "framer-motion";

const Orb = ({ initialPos }) => {
  const ballStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "blue",
  };

  const dragConstraints = {
    top: 0,
    left: -215,
    right: 215,
    bottom: 290,
  };

  return (
    <>
      <motion.span
        drag
        dragConstraints={dragConstraints}
        dragElastic={0}
        initial={initialPos}
        style={ballStyle}
      />
    </>
  );
};

export default Orb;