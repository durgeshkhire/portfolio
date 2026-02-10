"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com", color: "#fff", name: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", color: "#1DA1F2", name: "X" },
    { icon: Linkedin, href: "https://linkedin.com", color: "#0077B5", name: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", color: "#E4405F", name: "Instagram" },
];

export default function SocialIcons() {
    return (
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
            {socialLinks.map((link, index) => (
                <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    style={{ color: 'inherit' }}
                >
                    <link.icon className="interactive" size={typeof window !== "undefined" && window.innerWidth < 768 ? 24 : 28} />
                </motion.a>
            ))}
        </div>
    );
}
