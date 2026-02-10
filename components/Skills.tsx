"use client";

import { motion } from "framer-motion";
import {
    Coffee,
    Code,
    Database,
    GitBranch,
    Atom,
    Shield,
    Leaf,
    FileType,
    Terminal,
    Cpu,
    Server,
    Layout,
    Layers,
    Send
} from "lucide-react";

const skillGroups = [
    {
        title: "Languages",
        icon: Code,
        skills: [
            { name: "Java", icon: Coffee },
            { name: "C++", icon: Cpu },
            { name: "JavaScript", icon: FileType }
        ]
    },
    {
        title: "Frameworks & UI",
        icon: Layout,
        skills: [
            { name: "Spring Boot", icon: Leaf },
            { name: "Hibernate", icon: Layers },
            { name: "ReactJs", icon: Atom },
            { name: "AngularJs", icon: Shield }
        ]
    },
    {
        title: "Databases",
        icon: Database,
        skills: [
            { name: "PostgreSQL", icon: Database },
            { name: "MongoDB", icon: Database },
            { name: "Oracle", icon: Database }
        ]
    },
    {
        title: "DevOps & Tools",
        icon: Server,
        skills: [
            { name: "Git", icon: GitBranch },
            { name: "Postman", icon: Send }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const groupVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1
    }
};

export default function Skills() {
    return (
        <div style={{ marginTop: '2rem' }}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}
            >
                {skillGroups.map((group, groupIndex) => (
                    <motion.div
                        key={groupIndex}
                        variants={groupVariants}
                        className="glass-card"
                        style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                padding: '10px',
                                borderRadius: '10px',
                                background: 'rgba(var(--accent-rgb), 0.1)',
                                color: 'var(--accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <group.icon size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, opacity: 0.9 }}>{group.title}</h3>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                            gap: '1rem'
                        }}>
                            {group.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skillIndex}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <skill.icon size={24} color="var(--accent)" style={{ opacity: 0.8 }} />
                                    <span style={{ fontSize: '0.8rem', fontWeight: 500, opacity: 0.7 }}>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
