// src/App.tsx
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import portraitImg from "./assets/portait.jpg"; // make sure filename matches
import { Routes, Route, Link, useLocation } from "react-router-dom";

import AboutPage from "./pages/About";

function FrameContent({
  hasStarted,
  setShowUI,
  showUI,
}: {
  hasStarted: boolean;
  setShowUI: (v: boolean) => void;
  showUI: boolean;
  setHasStarted: (v: boolean) => void;
}) {
  return (
    <motion.div
      className={`frame`}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="content-layer">
        {/* ===== GLOBAL UI (always mounted) ===== */}

        {/* Top Nav – only visible after portrait move finishes */}
        {showUI && (
          <motion.header
            className="top-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="logo">Dev Phadke</div>
            <nav>
              <Link to="/about">About</Link>
            </nav>
          </motion.header>
        )}

        {/* HERO CARD */}
        {showUI && (
          <motion.div
            className="hero-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
          >
            <p className="hero-eyebrow">OVERVIEW</p>

            <svg
              className="hero-ai-symbol"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="hero-ai-core">
                <circle cx="60" cy="60" r="6" fill="#31d4ff" />

                <g className="hero-ai-lines" stroke="#31d4ff" strokeWidth="2" strokeLinecap="round">
                  <line x1="60" y1="60" x2="60" y2="15" />
                  <line x1="60" y1="60" x2="95" y2="30" />
                  <line x1="60" y1="60" x2="105" y2="60" />
                  <line x1="60" y1="60" x2="95" y2="90" />
                  <line x1="60" y1="60" x2="60" y2="105" />
                  <line x1="60" y1="60" x2="25" y2="90" />
                  <line x1="60" y1="60" x2="15" y2="60" />
                  <line x1="60" y1="60" x2="25" y2="30" />
                </g>

                <g fill="#31d4ff">
                  <circle cx="60" cy="15" r="4" />
                  <circle cx="95" cy="30" r="4" />
                  <circle cx="105" cy="60" r="4" />
                  <circle cx="95" cy="90" r="4" />
                  <circle cx="60" cy="105" r="4" />
                  <circle cx="25" cy="90" r="4" />
                  <circle cx="15" cy="60" r="4" />
                  <circle cx="25" cy="30" r="4" />
                </g>
              </g>
            </svg>

            <h1>
              Build <span>Scalable, AI-Driven</span> web experiences.
            </h1>
          </motion.div>
        )}

        {/* PROJECTS TEASER */}
        {showUI && (
          <motion.div
            className="projects-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
          >
            <div className="projects-header">
              <span>Projects</span>
            </div>
            <div className="projects-list">
              <div className="projects-item">
                <div className="projects-header">
                  <p className="projects-title">LifeQuest AI</p>
                  <a
                    href="http://lifequest-frontend-pracind.s3-website.eu-north-1.amazonaws.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="arrow-svg-link"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow-svg-icon"
                    >
                      <path
                        d="M5 12H19M13 6L19 12L13 18"
                        stroke="#31d4ff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <p className="projects-sub">Gamified productivity platform with AI-powered goal breakdown and XP-based progression.</p>
              </div>

              <div className="projects-item">
                <div className="projects-header">
                  <p className="projects-title">AppTrackr</p>
                  <a
                    href="http://apptrackr.ddns.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="arrow-svg-link"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow-svg-icon"
                    >
                      <path
                        d="M5 12H19M13 6L19 12L13 18"
                        stroke="#31d4ff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <p className="projects-sub">Job application tracking platform with dashboards, authentication, and AWS deployment.</p>
              </div>
              
            </div>
          </motion.div>
        )}

        {/* ABOUT CARD (small card on left) */}
        {showUI && (
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
          >
            <p className="about-eyebrow">ABOUT</p>
            <p className="about-text">
              Dev is a <span>developer and AI engineer</span> with a Master’s in Computing Science from the University of Glasgow.
              He builds <span>agentic AI systems</span> and <span>RAG-powered applications</span>, delivering full-stack solutions
              with clean APIs, solid testing, and scalable architecture.
            </p>
          </motion.div>
        )}

        {/* RIGHT SIDE RAIL */}
        {showUI && (
          <motion.aside
            className="side-rail"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
          >
            <div className="side-rail-label">STATUS</div>
            <div className="side-rail-section">
              <p className="side-rail-title">Availability</p>
              <p className="side-rail-value side-rail-pill">Open to work</p>
            </div>
            <div className="side-rail-section">
              <p className="side-rail-title">Location</p>
              <p className="side-rail-value">Germany · Remote</p>
            </div>
            <div className="side-rail-section">
              <p className="side-rail-title">Focus</p>
              <p className="side-rail-value">
                · AI Engineering <br /> <br />
                · RAG Systems <br /> <br />
                · React Frontend <br /> <br />
                · FastAPI Backend <br /> <br />
                · Python Ecosystem
              </p>
            </div>
          </motion.aside>
        )}

        {/* footer card */}
        {showUI && (
          <motion.div
            className="footer-card"
            initial={{ opacity: 0, y: 24, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
          >
            <div className="footer-label">Contact</div>
            <div className="footer-main">
              <div className="footer-title">Accelerate your AI roadmap.</div>
              <a href="mailto:devphadke2000@gmail.com" className="footer-link">
                Email me
              </a>
            </div>
          </motion.div>
        )}

        {/* PORTRAIT CARD — ALWAYS MOUNTED (important) */}
        <motion.div
          className="portrait-card"
          style={{
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(8, 12, 24, 0.15),
              rgba(8, 12, 24, 0.75)
            ), url(${portraitImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 1, x: -100, y: 125 }}
          animate={
            hasStarted
              ? { opacity: 1, x: 0, y: 0 }
              : { opacity: 1, x: -138, y: 95 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => {
            if (hasStarted && !showUI) {
              setShowUI(true);
            }
          }}
        />
      </div>
    </motion.div>
  );
}

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [showUI, setShowUI] = useState(false);

  // Start on first click or key press (one-shot)
  useEffect(() => {
    const handleStart = (_e: any) => {
      setHasStarted(true);

      // remove listeners immediately to prevent re-trigger
      window.removeEventListener("click", handleStart);
      window.removeEventListener("keydown", handleStart);
      window.removeEventListener("touchstart", handleStart);
    };

    window.addEventListener("click", handleStart);
    window.addEventListener("keydown", handleStart);

    // Mobile optimization — start immediately on touch
    window.addEventListener("touchstart", handleStart, { passive: true });

    return () => {
      window.removeEventListener("click", handleStart);
      window.removeEventListener("keydown", handleStart);
      window.removeEventListener("touchstart", handleStart);
    };
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 900px)");

    const linkId = "app-mobile-css";
    const href = "/src/App.mobile.css"; // Works in dev. I will give you the build-safe version later.

    function apply(shouldApply: boolean) {
      const existing = document.getElementById(linkId) as HTMLLinkElement | null;

      if (shouldApply && !existing) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.id = linkId;
        document.head.appendChild(link);
      }

      if (!shouldApply && existing) {
        existing.remove();
      }
    }

    // Initial load
    apply(mql.matches);

    // Listen for window size changes (orientation, resize, etc.)
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in e ? e.matches : (e as MediaQueryList).matches;
      apply(matches);
    };

    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
    } else {
      mql.addListener(handler);
    }

    // Cleanup
    return () => {
      const existing = document.getElementById(linkId);
      if (existing) existing.remove();

      if (mql.removeEventListener) {
        mql.removeEventListener("change", handler);
      } else {
        mql.removeListener(handler);
      }
    };
  }, []);

  const location = useLocation();

  return (
    <motion.div
      className="app-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* framed homepage (root) */}
          <Route
            path="/"
            element={
              <FrameContent
                hasStarted={hasStarted}
                setHasStarted={setHasStarted}
                showUI={showUI}
                setShowUI={setShowUI}
              />
            }
          />

          {/* about is now a full standalone page (unmounts frame) */}
          <Route
            path="/about"
            element={<AboutPage />}
          />

        </Routes>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
