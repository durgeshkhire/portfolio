"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Section from "@/components/Section";
import SocialIcons from "@/components/SocialIcons";
import ProjectCard from "@/components/ProjectCard";
import SpotifyStatus from "@/components/SpotifyStatus";
import Skills from "@/components/Skills";
import TechText from "@/components/TechText";
import { GraduationCap, Award, Briefcase, Trophy, ChevronRight, Code } from "lucide-react";

const education = [
  {
    school: "MES Institute of Management & Career Courses (IMCC), Pune",
    degree: "Masters of Computer Application - MCA",
    year: "2023 - 2025",
    description: "Advanced studies in Software Engineering, Java Backend Development, and Cloud Computing."
  },
  {
    school: "MES's Senior College, Pune",
    degree: "BBA- CA",
    year: "2020 - 2023",
    description: "Foundational studies in Computer Applications, Database Management, and Programming."
  }
];

const projects = [
  {
    title: "EcoTrack AI",
    description: "Sustainabiltiy tracking dashboard using machine learning to predict carbon footprint.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com",
    tags: ["Next.js", "TensorFlow", "D3.js"]
  },
  {
    title: "NeuralCanvas",
    description: "Generative art platform allowing users to create AI art through text prompts.",
    image: "https://images.unsplash.com/photo-1547841243-eacb14453cd9?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com",
    tags: ["React", "Stable Diffusion", "Node.js"]
  },
  {
    title: "CryptoVault",
    description: "Highly secure cryptocurrency wallet with multi-sig and biometric authentication.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com",
    tags: ["Solidity", "Web3.js", "React Native"]
  }
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Professional Cloud Developer",
  "Meta Front-End Developer Professional Certificate"
];

const awards = [
  "Winner of Global Hackathon 2023",
  "Dean's Honor List (2021, 2022, 2023)",
  "Young Innovator Award"
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* Hero Section */}
      <Section id="home" delay={0.2}>
        <div style={{ marginTop: '5vh' }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ fontSize: '1.2rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}
          >
            Hi there, I'm
          </motion.p>
          <motion.h1
            className="gradient-text name-glow"
            style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            <TechText text="Durgesh Khire." />
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', opacity: 0.8, marginBottom: '2rem' }}
          >
            I am a <TechText text="Java Backend Developer" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.8 }}
          >
            I'm a Java developer passionate about building high-performance
            backend systems, scalable APIs, and robust architectures with a focus on
            clean code and modern technologies.
          </motion.p>

          <SocialIcons />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Briefcase color="var(--accent)" /> About Me
            </h2>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
                I am an MCA Graduate (2025) and a passionate Java Developer with hands-on experience
                in building backend applications using Spring, Spring Boot, Hibernate, PostgreSQL,
                and RESTful APIs. I focus on writing clean, scalable, and maintainable code while
                continuously learning new technologies. Currently seeking opportunities as a Java
                Backend Developer.
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h4 style={{ fontSize: '2rem', color: 'var(--accent)' }}>50+</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Projects Done</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h4 style={{ fontSize: '2rem', color: 'var(--accent)' }}>4+</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Years Exp</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h4 style={{ fontSize: '2rem', color: 'var(--accent)' }}>15+</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Technologies</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h4 style={{ fontSize: '2rem', color: 'var(--accent)' }}>1k+</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Commits</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Code color="var(--accent)" /> Technical Skills
        </h2>
        <Skills />
      </Section>

      {/* Education Section */}
      <Section id="education">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <GraduationCap color="var(--accent)" /> Education
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {education.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="glass-card"
              style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}
            >
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--accent)' }}>{item.degree}</h3>
                <p style={{ fontWeight: 600 }}>{item.school}</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>{item.description}</p>
              </div>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.8rem' }}>
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Briefcase color="var(--accent)" /> Projects
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </Section>

      {/* Certifications & Awards Section */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Award color="var(--accent)" /> Certifications
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certifications.map((cert, i) => (
                <div key={i} className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <ChevronRight size={18} color="var(--accent)" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Trophy color="var(--accent)" /> Awards
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {awards.map((award, i) => (
                <div key={i} className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <ChevronRight size={18} color="var(--accent)" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Floating Spotify Badge */}
      {!isMobile && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 100,
        }}>
          <SpotifyStatus />
        </div>
      )}
    </div>
  );
}
