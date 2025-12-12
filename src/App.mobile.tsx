// src/App.mobile.tsx
import "./App.mobile.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import portraitImg from "./assets/portait.jpg"; // ensure filename matches
import { Routes, Route, Link, useLocation } from "react-router-dom";

import AboutPage from "./pages/About";

function FrameContentMobile({
  hasStarted,
  setShowUI,
  showUI,
  setHasStarted,
}: {
  hasStarted: boolean;
  setShowUI: (v: boolean) => void;
  showUI: boolean;
  setHasStarted: (v: boolean) => void;
}) {
  return (
    <motion.div
      className={"frame-mobile"}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="content-layer-mobile">
        {/* TOP NAV */}
        {showUI && (
          <motion.header
            className="top-nav-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="logo">Dev Phadke</div>
            <nav>
              <Link to="/about">About</Link>
            </nav>
          </motion.header>
        )}

        {/* PORTRAIT (centered on mobile) */}
        <motion.div
          className="portrait-card-mobile"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(8,12,24,0.12), rgba(8,12,24,0.8)), url(${portraitImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 1, y: 40 }}
          animate={hasStarted ? { y: 0 } : { y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onAnimationComplete={() => {
            if (hasStarted && !showUI) setShowUI(true);
          }}
        />

        {/* HERO */}
        {showUI && (
          <motion.div
            className="hero-card-mobile"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <p className="hero-eyebrow">OVERVIEW</p>
            <h1>
              Build <span>Scalable, AI-Driven</span>
            </h1>
            <p className="hero-sub">Agentic AI, RAG systems, and full-stack delivery.</p>
          </motion.div>
        )}

        {/* ABOUT */}
        {showUI && (
          <motion.section
            className="about-card-mobile"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <p className="about-eyebrow-mobile">ABOUT</p>
            <p className="about-text-mobile">
              Dev is a <span>developer and AI engineer</span> with a Master’s in Computing Science from the University of Glasgow.
              He builds <span>agentic AI systems</span> and <span>RAG-powered applications</span>, delivering full-stack solutions
              with clean APIs, solid testing, and scalable architecture.
            </p>
          </motion.section>
        )}

        {/* PROJECTS */}
        {showUI && (
          <motion.div
            className="projects-card-mobile"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="projects-header-mobile">
              <span>PROJECTS</span>
            </div>

            <div className="projects-list-mobile">
              <div className="projects-item-mobile">
                <div className="projects-title-mobile">LifeQuest AI</div>
                <div className="projects-sub-mobile">Gamified productivity with AI-powered goal breakdown.</div>
                <a
                  className="projects-link-mobile"
                  href="http://lifequest-frontend-pracind.s3-website.eu-north-1.amazonaws.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>

              <div className="projects-item-mobile">
                <div className="projects-title-mobile">AppTrackr</div>
                <div className="projects-sub-mobile">Job application tracking, dashboards, AWS-deployed.</div>
                <a
                  className="projects-link-mobile"
                  href="http://apptrackr.ddns.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* STATUS (condensed from side-rail) */}
        {showUI && (
          <motion.div
            className="status-card-mobile"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <div className="status-header-mobile">STATUS</div>

            <div className="status-row-mobile">
              <div className="status-title-mobile">Availability</div>
              <div className="status-value-mobile status-pill-mobile">Open to work</div>
            </div>

            <div className="status-row-mobile">
              <div className="status-title-mobile">Location</div>
              <div className="status-value-mobile">Germany · Remote</div>
            </div>

            <div className="status-row-mobile">
              <div className="status-title-mobile">Focus</div>
              <div className="status-value-mobile">
                AI Engineering · RAG Systems · React · FastAPI · Python
              </div>
            </div>
          </motion.div>
        )}

        {/* FOOTER / CONTACT */}
        {showUI && (
          <motion.footer
            className="footer-mobile"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
          >
            <div className="footer-title-mobile">Accelerate your AI roadmap.</div>
            <a href="mailto:devphadke2000@gmail.com" className="footer-link-mobile">Email</a>
          </motion.footer>
        )}
      </div>
    </motion.div>
  );
}

export default function AppMobile() {
  const [hasStarted, setHasStarted] = useState(true);
  const [showUI, setShowUI] = useState(true);

  useEffect(() => {
    // one-shot starter: mark started and remove listeners immediately
    const handleStart = (_e: Event) => {
      setHasStarted(true);

      // remove listeners immediately to prevent re-trigger
      window.removeEventListener("click", handleStart);
      window.removeEventListener("keydown", handleStart);
      window.removeEventListener("touchstart", handleStart);
    };

    window.addEventListener("click", handleStart);
    window.addEventListener("keydown", handleStart);
    window.addEventListener("touchstart", handleStart, { passive: true });

    return () => {
      window.removeEventListener("click", handleStart);
      window.removeEventListener("keydown", handleStart);
      window.removeEventListener("touchstart", handleStart);
    };
  }, []);

  const location = useLocation();

  return (
    <motion.div
      className="app-root-mobile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <FrameContentMobile
                hasStarted={hasStarted}
                setHasStarted={setHasStarted}
                showUI={showUI}
                setShowUI={setShowUI}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AnimatePresence>
    </motion.div>
  );
}
