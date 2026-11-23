import React from "react";
import projectsData from "../../components/Data/Projects.json";

function Projects() {
  return (
    <div className="row" style={{ marginTop: "8vh", paddingLeft: "7vh" }}>
      <div style={{ color: "#02d671", marginBottom: "10vh" }} className="fw-bold fs-1">
        Projects
      </div>

      <div className="container py-5">
        <div className="row" style={{rowGap:"7vh",marginLeft:"-5vw"}}>
         {projectsData.map((project) => (
            <div
              key={project.id}
              className="col-lg-4 col-md-6 d-flex justify-content-center"
            >
              <div
                className="card text-light"
                style={{
                  background: "#0d130d",
                  boxShadow:
                    "0 4px 12px rgba(2,214,113,0.3), 0 6px 20px rgba(2,214,113,0.19)",
                  width: "18rem",
               
                  width:"25vw"
                }}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                
                  style={{
                    height: "20vh",
                    objectFit: "cover",
                    borderBottom: "2px solid #02d671"
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#02d671" }}>
                    {project.title}
                  </h5>
                 
                  <ul className="text-start">
                    {project.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div style={{display:"flex",flexDirection:"row",gap:"2vw",marginLeft:"2vw"}}>
                  <a
                    className="btn btn-success"
                    style={{ 
                      marginTop: "2vh",
                    
                      border: "none",
                      width:"8vw"
                    }}
                  >
                    View Project File
                  </a>
                   <a
                    className="btn "
                    style={{ 
                      marginTop: "2vh",
                     color:"white",
                     
                       border: "1px solid #02d671",
                     
                      width:"8vw"
                    }}
                  >
                    Github Repo
                  </a>
</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;