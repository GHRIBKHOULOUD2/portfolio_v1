import React, { useState } from "react";

function Circles() {
  const circleSize = 40; // circle diameter in px

  // Generate 100 random positions for the circles
  const [circles, setCircles] = useState(
    Array.from({ length: 100 }, () => ({
      top: Math.random() * (window.innerHeight * 0.5 - circleSize) + "px",
      left: Math.random() * (window.innerWidth - circleSize) + "px",
    }))
  );

  const circleStyle = {
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    borderRadius: "50%",
    border: "2px solid #02d671",
    background: "#0d130d",
    boxShadow: "0 0 15px rgba(2,214,113,0.7)", // green glow
    position: "absolute",
    transition: "top 0.8s ease, left 0.8s ease, transform 0.4s ease",
    cursor: "pointer",
    
  };

  // Function to move circle to a new random position
  const moveCircle = (index) => {
    setCircles((prev) =>
      prev.map((circle, i) =>
        i === index
          ? {
              top:
                Math.random() * (window.innerHeight * 0.5 - circleSize) + "px",
              left: Math.random() * (window.innerWidth - circleSize) + "px",
            }
          : circle
      )
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "50vh",
        background: "#0d130d",
        overflow: "hidden",
        marginTop:"10vh"
      }}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            ...circleStyle,
            top: circle.top,
            left: circle.left,
          }}
          onMouseEnter={(e) => {
            moveCircle(index);
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        ></div>
      ))}
    </div>
  );
}

export default Circles;
