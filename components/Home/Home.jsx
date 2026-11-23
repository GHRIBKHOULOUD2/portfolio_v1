import me from "../../images/me.png"

import { useState } from "react";
function Home() {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="row" style={{ height: "80vh" ,marginTop:"8vh",paddingTop:"10vh"}}>
      <div className="col-5">
        <div style={{ color: "#02d671" ,marginLeft:"3vw"}} className="fw-bold fs-1">
          Front-End <br/>Developer
        </div>
        <div className="text-light fs-4" style={{paddingTop:"5vh"}}> 
Hi, I’m Khouloud, a passionate web developer dedicated to building visually appealing and high-performance websites.
        </div>
        <div className="text-light fs-4" style={{paddingTop:"5vh"}}> 
I create modern, responsive, and user-friendly web applications using React, Bootstrap, and other cutting-edge web technologies, focusing on performance, accessibility, and seamless user experience.
        </div>
         <div className="col-3 btn btn-outline-success bg-success fs-4"  style={{ marginTop:"8vh",color:"white" }}>Let's Connect</div>
      </div>
      <div className="col-2"></div>
      <div className="col-4" style={{marginTop:"5vh"}}>
       <img 
  src={me} 
   
  alt="..." 
  onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
  style={{
    borderRadius: "50%",
    border: "2px solid #02d671", 
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            transform: isHovered ? "translateY(-10px)" : "translateY(10px)",
            boxShadow: isHovered 
              ? "-10px -60px 200px rgba(2, 214, 113, 0.8), 0 0 30px rgba(2, 214, 113, 0.4)" 
              : "-10px -60px 200px rgba(2, 214, 113, 0.6)"
          
  }} 
/>

      </div>
    </div>
  );
}

export default Home;
