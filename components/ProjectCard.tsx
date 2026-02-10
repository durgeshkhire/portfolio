"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-card interactive"
            style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
            onClick={() => window.open(link, '_blank')}
        >
            <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <img
                    src={image}
                    alt={title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="project-image"
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                }} className="project-overlay">
                    <ExternalLink size={32} color="#fff" />
                </div>
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem', flexGrow: 1 }}>{description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.7rem',
                            padding: '0.2rem 0.6rem',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '100px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .interactive:hover .project-image {
          transform: scale(1.1);
        }
        .interactive:hover .project-overlay {
          opacity: 1;
        }
      `}</style>
        </motion.div>
    );
}
