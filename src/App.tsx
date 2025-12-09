import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [showUI, setShowUI] = useState(false);

  // Start on first click or key press
  useEffect(() => {
    const handleStart = () => setHasStarted(true);

    window.addEventListener("click", handleStart);
    window.addEventListener("keydown", handleStart);

    return () => {
      window.removeEventListener("click", handleStart);
      window.removeEventListener("keydown", handleStart);
    };
  }, []);

  return (
    <motion.div
      className="app-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="frame"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="content-layer">
          {/* Top Nav – only after portrait move finishes */}
          {showUI && (
            <motion.header
              className="top-nav"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="logo">Dev Phadke</div>
              <nav>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
              </nav>
            </motion.header>
          )}

          {/* HERO TEXT – only after portrait move finishes */}
          {showUI && (
            <motion.div
              className="hero-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <p className="hero-eyebrow">PORTFOLIO</p>
              <h1>
                I build modern <span>interactive</span> web experiences.
              </h1>
              <p className="hero-sub">
                React frontends, Python backends, and smooth UI details that
                make products feel alive.
              </p>
            </motion.div>
          )}

          {/* PROJECTS TEASER – only after portrait move finishes */}
          {showUI && (
            <motion.div
              className="projects-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
            >
              <div className="projects-header">
                <span>Projects</span>
                <a href="#projects">View all →</a>
              </div>
              <div className="projects-list">
                <div className="projects-item">
                  <p className="projects-title">Project One</p>
                  <p className="projects-sub">
                    Interactive dashboard with live data.
                  </p>
                </div>
                <div className="projects-item">
                  <p className="projects-title">Project Two</p>
                  <p className="projects-sub">
                    Full-stack app using React &amp; Python.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* PORTRAIT – always visible, but moves only after interaction */}
          <motion.div
            className="portrait-card"
            initial={false}
            animate={
              hasStarted
                ? { opacity: 1, x: 0, y: 0 } // final offset (tweak to taste)
                : { opacity: 1, x: -100, y: 125 }       // centered, no motion yet
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            onAnimationComplete={() => {
              // After the move (when hasStarted is true), show the rest of the UI
              if (hasStarted && !showUI) {
                setShowUI(true);
              }
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;
