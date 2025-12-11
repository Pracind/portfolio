import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./About.css";

const pageVariants = {
  hidden: { opacity: 0, scale: 0.996, y: 8 },
  enter: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.996, y: 8 },
};

export default function AboutPage() {
  const nav = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && nav("/");
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nav]);

  return (
    <motion.div
      className="about-root"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.36, ease: "easeOut" }}
    >
      <div className="about-frame" role="dialog" aria-label="About Dev Phadke">
        <button
          className="about-close"
          onClick={() => nav("/")}
          aria-label="Close about"
        >
          ✕
        </button>

        <div className="about-grid">
          
          {/* LEFT CONTENT */}
          <div className="about-left" tabIndex={0}>
            <div className="about-eyebrow">ABOUT</div>

            <h2 className="about-heading">Meet Dev, The AI Engineer.</h2>

            <div className="about-actions" role="toolbar" aria-label="About actions">
              <a
                href="/Dev_Phadke_Resume_Dec_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
                aria-label="Download CV"
              >
                Download CV
              </a>

              <a
                href="mailto:devphadke2000@gmail.com"
                className="secondary-btn"
                aria-label="Contact via email"
              >
                Contact Dev
              </a>
            </div>

            <div className="about-body">
              <p>
                <strong className="accent">Dev Phadke</strong> is a Master’s-educated 
                <strong className="accent"> AI Engineer</strong> specialising in 
                <strong className="accent"> agentic AI systems</strong>, 
                <strong className="accent"> document intelligence</strong>, and 
                <strong className="accent"> production-grade RAG applications</strong>. 
                He designs and ships end-to-end solutions that combine 
                <strong className="accent"> scalable backend engineering</strong> with 
                polished, product-focused frontend delivery.
              </p>

              <p>
                His recent work includes orchestrating 
                <strong className="accent"> multi-turn conversational agents</strong>, 
                implementing 
                <strong className="accent"> RAG-backed retrieval systems</strong>, 
                optimising 
                <strong className="accent"> embeddings pipelines</strong>, and deploying 
                <strong className="accent"> FastAPI services</strong> supported by 
                solid testing and modular architecture. Dev favours small, 
                <strong className="accent"> auditable components</strong> that scale 
                from prototype to production with high iteration speed.
              </p>

          
              <h3 className="section-title">Selected Projects</h3>

              <ul className="project-list">
                <li>
                  <strong>
                    <a 
                      href="http://lifequest-frontend-pracind.s3-website.eu-north-1.amazonaws.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      LifeQuest AI
                    </a>
                  </strong>
                  — A gamified self-improvement platform built with React and FastAPI, using Groq-powered AI 
                  for goal decomposition, XP progression, and structured task generation. Deployed on AWS S3.
                </li>

                <li>
                  <strong>
                    <a 
                      href="http://apptrackr.ddns.net/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      AppTrackr
                    </a>
                  </strong>
                  — A cloud-based job application tracking platform with authentication, analytics dashboards, 
                  and timeline visuals. CI/CD-enabled deployment on AWS EC2.
                </li>
              </ul>

              <h3 className="section-title">Hire Dev</h3>
              <p>
                Dev brings a rare blend of deep technical capability and product-focused execution. He excels in 
                <strong className="accent">turning early-stage ideas into scalable AI systems</strong> and is particularly
                effective in environments that depend on 
                <strong className="accent">fast iteration</strong> and 
                <strong className="accent">production-grade RAG workflows</strong>. 
                Teams seeking an engineer who can deliver measurable outcomes with speed and clarity consistently 
                find Dev a high-impact addition.
              </p>
            </div>
          </div>

          {/* RIGHT FACTS */}
          <aside className="about-right" aria-labelledby="quick-facts-heading">
            <div id="quick-facts-heading" className="quick-facts">Quick facts</div>

            <div>
              <div className="tooling-title">Tooling</div>
              <div className="tooling-list">
                {[
                  "Python", "JavaScript", "TypeScript", "FastAPI", "React", "Streamlit",
                  "HTML", "CSS", "TailwindCSS",
                  "OpenAI API (GPT)", "LangChain", "RAG Architecture", "Groq API",
                  "TensorFlow", "PyTorch", "scikit-learn", "spaCy", "NLTK",
                  "Azure (Bot Service, Web Apps)", "AWS (S3, EC2)", "Redis", "MySQL",
                  "Git", "GitHub", "CI/CD",
                  "REST APIs", "JWT Auth", "Vector Search", "Embeddings Pipelines",
                  "Testing", "Mentorship", "Agile Delivery"
                ].map(t => (
                  <div key={t} className="tool-pill">{t}</div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}
