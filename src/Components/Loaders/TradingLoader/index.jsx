import React from "react";
import { motion } from "framer-motion";

function TradingLoader() {
  const chartLineAnimation = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#191919",
      }}
    >
      <svg
        width="80%"
        height="150"
        viewBox="0 0 600 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#D6AA1C", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#5D5329", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <motion.path
          d="M0 100 C 100 80, 200 90, 300 110 C 400 130, 500 120, 600 50"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="3"
          variants={chartLineAnimation}
          initial="hidden"
          animate="visible"
          style={{
            filter: "drop-shadow(0px 1px 16.6px #ecbc56)", // إضافة الظل على الخط
          }}
        />
      </svg>

      <div
        style={{
          marginTop: "20px",
          color: "#fff",
          fontSize: "28px",
          fontFamily: "Bayon",
          textAlign: "center",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Trading</span>{" "}
        <span className="text-gradient">Society</span>
      </div>
    </div>
  );
}

export default TradingLoader;
