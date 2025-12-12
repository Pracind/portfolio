import _React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./About.mobile.css";


const pageVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.996 },
  enter: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 8, scale: 0.996 },
};

export default function AboutMobile() {
  const nav = useNavigate();

  useEffect(()=>{ console.log("MOBILE About mounted"); }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && nav("/");
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nav]);

  return (
    <motion.div
      className="about-mobile-root"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.36, ease: "easeOut" }}
    >
      <div className="about-mobile-frame" role="dialog" aria-label="About Dev Phadke">
        <button
          className="about-mobile-close"
          onClick={() => nav("/")}
          aria-label="Close about"
        >
          ✕
        </button>

        <div className="about-mobile-top">

          <div className="about-mobile-eyebrow">ABOUT</div>
          <h2 className="about-mobile-heading">Meet Dev, The AI Engineer.</h2>

          <div className="about-mobile-actions">
            <a
              href="/Dev_Phadke_Resume.pdf"
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
        </div>

        <div className="about-mobile-body">
          <p>
            <strong className="accent">Dev Phadke</strong> is a Master’s-educated{" "}
            <strong className="accent">AI Engineer</strong> specialising in{" "}
            <strong className="accent">agentic AI systems</strong>,{" "}
            <strong className="accent">document intelligence</strong>, and{" "}
            <strong className="accent">production-grade RAG applications</strong>.
          </p>

          <p>
            Recent work includes orchestration of{" "}
            <strong className="accent">multi-turn conversational agents</strong>,
            building <strong className="accent">RAG-backed retrieval systems</strong>,
            and deploying <strong className="accent">FastAPI services</strong> with
            solid testing and modular architecture.
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
              </strong>{" "}
              — Gamified productivity with AI-powered goal decomposition. Deployed on AWS S3.
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
              </strong>{" "}
              — Job application tracking, dashboards, CI/CD on AWS.
            </li>
          </ul>

          <h3 className="section-title">Tooling</h3>
          <div className="tooling-list">
            {[
              "Python",
              "TypeScript",
              "FastAPI",
              "React",
              "LangChain",
              "RAG",
              "Groq",
              "TensorFlow",
              "PyTorch",
              "AWS",
              "Azure",
              "Redis",
              "MySQL",
              "CI/CD",
            ].map((t) => (
              <div key={t} className="tool-pill">
                {t}
              </div>
            ))}
          </div>

          <h3 className="section-title">Hire Dev</h3>
          <p>
            Dev turns early concepts into production-grade AI systems with rapid iteration,
            clear APIs, and pragmatic testing. Teams seeking measurable outcomes find Dev a
            high-impact contributor.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
