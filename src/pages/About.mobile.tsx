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
              CV
            </a>

            <a
              href="https://www.linkedin.com/in/dev-phadke-a2210a1a6/"
              className="primary-btn"
              aria-label="Linkedin"
            >
              Linkedin
            </a>

            <a
                href="mailto:devphadke2000@gmail.com"
                className="primary-btn"
                aria-label="Contact via email"
              >
                Contact
            </a>
            
          </div>
        </div>

        <div className="about-mobile-body">
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

          <h3 className="section-title">Hire Dev</h3>
          <p>
            Dev brings a rare blend of deep technical capability and product-focused execution. He excels in 
            <strong className="accent"> turning early-stage ideas into scalable AI systems</strong> and is particularly
            effective in environments that depend on 
            <strong className="accent"> fast iteration</strong> and 
            <strong className="accent"> production-grade RAG workflows</strong>. 
            Teams seeking an engineer who can deliver measurable outcomes with speed and clarity consistently 
            find Dev a high-impact addition.
          </p>

          <h3 className="section-title">Tooling</h3>
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
            ].map((t) => (
              <div key={t} className="tool-pill">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
