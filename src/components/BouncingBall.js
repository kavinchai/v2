import React from "react";
import { motion } from "framer-motion";

const ballStyle = {
    display: "block:",
    width: "50px",
    height: "50px",
    backgroundColor: "black",
    borderRadius: "400px"
};

const bounceTransition = {
    y: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "easeOut"
    }
};

export default function BouncingBall() {
    return (
        <div
            style ={{
                border: "5px solid #ffff00",
                background:"red",
                width: "50vw",
                height: "40vh",
                display: "flex",
                justifyContent: "space-around"
            }}>
                <motion.span 
                    style={ballStyle} 
                    transition={bounceTransition} 
                    animate = {{
                        x: "100px",
                        y: ["200px", "100px"],
                    }}
                />
        </div>
    )
}

