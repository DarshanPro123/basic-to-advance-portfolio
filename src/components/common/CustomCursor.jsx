import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="custom-cursor-dot"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                }}
                transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 30,
                    mass: 0.2,
                }}
            />

            {/* Cursor ring */}
            <motion.div
                className="custom-cursor-ring"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                }}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 25,
                    mass: 0.3,
                }}
            />
        </>
    );
};

export default CustomCursor;
