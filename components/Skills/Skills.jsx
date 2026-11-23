import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";

function Skills() {
  const [hoverStates, setHoverStates] = useState({
    card1: false,
    card2: false,
    card3: false
  });

  const handleMouseEnter = (card) => {
    setHoverStates(prev => ({ ...prev, [card]: true }));
  };

  const handleMouseLeave = (card) => {
    setHoverStates(prev => ({ ...prev, [card]: false }));
  };

  const cardStyle = (isHovered) => ({
    height: "25vh", 
    background: "#0d130d",
    zIndex: "20",
    boxShadow: isHovered 
      ? "0 8px 16px rgba(2, 214, 113, 0.5), 0 12px 40px rgba(2, 214, 113, 0.3)"
      : "0 4px 8px rgba(2, 214, 113, 0.3), 0 6px 20px rgba(2, 214, 113, 0.19)",
    transform: isHovered ? "translateY(-10px)" : "translateY(0)",
    transition: "all 0.3s ease",
    cursor: "pointer"
  });

  return (
    <div className="row" style={{ height: "60vh", marginTop: "8vh", paddingLeft: "7vh" }}>
    
     < div style={{ color: "#02d671" }} className="fw-bold fs-1">
          Skills
        </div>
      <div 
        className="card col-3" 
        style={cardStyle(hoverStates.card1)}
        onMouseEnter={() => handleMouseEnter("card1")}
        onMouseLeave={() => handleMouseLeave("card1")}
      >
        <FaCode style={{color: "#02d671", width: "6vw", height: "3vh", marginTop: "2vh"}}/>
        <div className="card-body">
          <h5 className="card-title text-light fs-3 fw-semibold">Frontend Development</h5>
          <p className="card-text text-light">React, html, css, javascript.</p>
        </div>
      </div>
      
      <div className="col-1"></div>
      
   
      <div 
        className="card col-3" 
        style={cardStyle(hoverStates.card2)}
        onMouseEnter={() => handleMouseEnter("card2")}
        onMouseLeave={() => handleMouseLeave("card2")}
      >
        <FaListUl style={{color: "#02d671", width: "6vw", height: "3vh", marginTop: "2vh"}}/>
        <div className="card-body">
          <h5 className="card-title text-light fs-3 fw-semibold">Networking</h5>
          <p className="card-text text-light">Experienced in designing, configuring, and troubleshooting networks, including routing & switching (OSPF, RIP, BGP), VLANs, VPNs, NAT, and network security.</p>
        </div>
      </div>
      
      <div className="col-1"></div>
      
    
      <div 
        className="card col-3" 
        style={cardStyle(hoverStates.card3)}
        onMouseEnter={() => handleMouseEnter("card3")}
        onMouseLeave={() => handleMouseLeave("card3")}
      >
        <FaPaintBrush style={{color: "#02d671", width: "6vw", height: "3vh", marginTop: "2vh"}}/>
        <div className="card-body">
          <h5 className="card-title text-light fs-3 fw-semibold">Network Automation</h5>
          <p className="card-text text-light">Automated Cisco router and switch configurations in GNS3 using Python and Netmiko for efficient network deployment and testing.</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;