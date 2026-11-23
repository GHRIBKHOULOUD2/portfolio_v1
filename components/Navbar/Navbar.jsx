
function Navbar() {
  return (

<div className="row align-items-center fixed-top" style={{ background: "#0d130d",height:"8vh" ,paddingLeft:"3vw"}}>
  <div className="col-6 fw-semibold fs-3" style={{ color: "#02d671" }}>WebDev</div>
  <div className="col-1 text-light">Home</div>
  <div className="col-1 text-light">Skills</div>
  <div className="col-1 text-light">Projects</div>
  <div className="col-1 text-light">Contact</div>
   <div className="col-1">
        <a
          href="/cv.pdf"
          download="cv.pdf"
          className="btn btn-outline-success"
          style={{ color: "#02d671", textDecoration: "none" }}
        >
          Download CV
        </a>
      </div>
   
</div>

   

       
    
  );
}
export default Navbar;