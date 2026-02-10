"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Home, User, Code, GraduationCap, Briefcase } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Projects", href: "#projects", icon: Briefcase },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Threshold for scroll animation
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{
                opacity: 1,
                // Using vh for more reliable viewport centering
                top: isScrolled ? "50vh" : "1.5rem",
                left: isScrolled ? "calc(100% - 2rem)" : "50%",
                x: isScrolled ? "-100%" : "-50%",
                y: isScrolled ? "-50%" : "0%",
                flexDirection: isScrolled ? "column" : "row",
                borderRadius: isScrolled ? "30px" : "100px",
                padding: isScrolled ? "1.5rem 0.8rem" : "0.75rem 2rem",
                gap: isScrolled ? "1.5rem" : "2rem",
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1
            }}
            className="glass-card"
            style={{
                position: 'fixed',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
        >
            {navItems.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                    }}
                    className="nav-link"
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {/* Always render both but animate their visibility to ensure smooth layout */}
                        {isScrolled ? (
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                whileHover={{ scale: 1.2 }}
                                title={item.name}
                                style={{ color: 'var(--accent)' }}
                            >
                                <item.icon size={22} />
                            </motion.div>
                        ) : (
                            <motion.span
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                style={{
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.05em',
                                    whiteSpace: 'nowrap'
                                }}
                                className="hover-glow"
                            >
                                {item.name}
                            </motion.span>
                        )}
                    </div>
                </a>
            ))}
        </motion.nav>
    );
}
