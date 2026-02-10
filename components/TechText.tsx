"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export default function TechText({ text }: { text: string }) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval: any;
        let iteration = 0;

        const startScramble = () => {
            clearInterval(interval);
            iteration = 0;

            interval = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        if (isHovered) {
            startScramble();
        } else {
            setDisplayText(text);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isHovered, text]);

    // Also run once on mount
    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <motion.span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: "inline-block",
                cursor: "pointer",
                color: "var(--accent)",
                textShadow: isHovered ? "0 0 10px var(--accent)" : "none",
                transition: "text-shadow 0.3s ease",
            }}
        >
            {displayText}
        </motion.span>
    );
}
