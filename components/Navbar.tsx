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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{
                opacity: 1,
                top: isMobile ? "auto" : (isScrolled ? "50vh" : "1.5rem"),
                bottom: isMobile ? "1.5rem" : "auto",
                left: isMobile ? "50%" : (isScrolled ? "auto" : "50%"),
                right: !isMobile && isScrolled ? "2rem" : "auto",
                x: "-50%",
                y: !isMobile && isScrolled ? "-50%" : "0%",
                flexDirection: !isMobile && isScrolled ? "column" : "row",
                borderRadius: !isMobile && isScrolled ? "30px" : "100px",
                padding: !isMobile && isScrolled ? "1.2rem 0.8rem" : "0.7rem 1.2rem",
                gap: !isMobile && isScrolled ? "1.2rem" : (isMobile ? "1.2rem" : "2rem"),
                maxWidth: isMobile ? "95vw" : "none",
                width: isMobile ? "max-content" : "auto",
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
                        {isScrolled || isMobile ? (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.2 }}
                                title={item.name}
                                style={{ color: 'var(--accent)' }}
                            >
                                <item.icon size={20} />
                            </motion.div>
                        ) : (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{
                                    fontSize: '0.8rem',
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
