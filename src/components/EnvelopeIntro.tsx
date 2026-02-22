"use client";

import { useEffect, useState } from "react";

type Phase = "idle" | "opening" | "done";

export default function EnvelopeIntro({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<Phase>("idle");

  // Prevent background scroll while envelope is shown
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const handleClick = () => {
    if (phase !== "idle") return;
    setPhase("opening");
  };

  return (
    <>
      {children}

      {phase !== "done" && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-50"
          style={{
            opacity: phase === "opening" ? 0 : 1,
            transition: phase === "opening" ? "opacity 0.7s ease 1.1s" : "none",
          }}
          onTransitionEnd={(e) => {
            if (e.propertyName === "opacity") setPhase("done");
          }}
        >
          <button
            onClick={handleClick}
            className="flex flex-col items-center gap-8"
            aria-label="청첩장 열기"
          >
            {/* Envelope */}
            <div style={{ position: "relative", width: 260, height: 180 }}>
              {/* Body */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#ede8e2",
                  borderRadius: 6,
                }}
              />

              {/* Bottom fold */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "58%",
                  clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
                  background: "#d8d2cc",
                }}
              />

              {/* Left fold */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "50%",
                  clipPath: "polygon(0 0, 0 100%, 100% 50%)",
                  background: "#e2dcd6",
                }}
              />

              {/* Right fold */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: "50%",
                  clipPath: "polygon(100% 0, 100% 100%, 0 50%)",
                  background: "#e2dcd6",
                }}
              />

              {/* Heart seal */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "28%",
                  zIndex: 5,
                  fontSize: 26,
                  color: "#d4a0a0",
                }}
              >
                ♥
              </div>

              {/* Flap — rotates open on click */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "55%",
                  transformOrigin: "top center",
                  transform:
                    phase === "opening"
                      ? "perspective(600px) rotateX(-180deg)"
                      : "perspective(600px) rotateX(0deg)",
                  transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
                  zIndex: phase === "opening" ? 0 : 10,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    background: "#d8d2cc",
                    borderRadius: "6px 6px 0 0",
                  }}
                />
              </div>
            </div>

            {/* Hint text */}
            <p
              className="text-xs tracking-[0.22em] text-gray-400"
              style={{
                opacity: phase === "opening" ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            >
              눌러서 열어보세요
            </p>
          </button>
        </div>
      )}
    </>
  );
}
