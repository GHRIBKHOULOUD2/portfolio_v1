import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaSquarePhone } from "react-icons/fa6";
function Contact() {
  return (
    <div className="container my-5"style={{paddingTop:"15vh"}}>
      <div className="row">
      
        <div className="col-6">
          <div style={{ color: "#02d671" ,marginBottom:"6vh"}} className="fw-bold fs-1">Contact Me</div>
          <p><SiMinutemailer  style={{color:"#02d671" ,width:"2.5vw",height:"2.5vh"}}/><span className="fs-6" style={{color:"white",paddingLeft:"0.5vw"}}>k.ghrib@esi-sba.dz</span></p>
          <p><FaSquarePhone style={{color:"#02d671" ,width:"2.5vw",height:"2.5vh"}}/><span  className="fs-6" style={{color:"white",paddingLeft:"0.5vw"}}>0779219435</span></p>
         <div style={{display:"flex", flexDirection:"row",gap:"0.5vw",paddingTop:"6vh"}}>
         <FaFacebook style={{color:"#02d671" ,width:"3vw",height:"3vh"}}/>
         <FaGithub style={{color:"#02d671" ,width:"3vw",height:"3vh"}}/>
         <FaInstagram style={{color:"#02d671" ,width:"3vw",height:"3vh"}}/>
         <FaLinkedin style={{color:"#02d671" ,width:"3vw",height:"3vh"}}/>
         </div>
        </div>

     
        <form className="col-md-6">

            
<div className="form-group mb-3 fs-5" style={{color:"#02d671"}}>
            <label htmlFor="inlineFormInputName2" >Name</label>
            
            <input
  type="text"
  className="form-control"
  id="inlineFormInputName2"
  placeholder="Your name"
  style={{
    background: "#0d130d",
    color: "white",
    boxShadow:
      "0 4px 12px rgba(2,214,113,0.3), 0 6px 20px rgba(2,214,113,0.19)",
    border: "1px solid #02d671",
    marginTop:"2vh"
  }}
/>

            
          </div>
<div style={{height:"3vh"}}></div>
          <div className="form-group mb-3 fs-5" style={{color:"#02d671"}}>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              style={{
    background: "#0d130d",
    color: "white",
    boxShadow:
      "0 4px 12px rgba(2,214,113,0.3), 0 6px 20px rgba(2,214,113,0.19)",
    border: "1px solid #02d671",
     marginTop:"2vh"
  }}
            />
            
          </div>
<div style={{height:"3vh"}}></div>
          <div className="form-group mb-3 fs-5" style={{color:"#02d671"}}>
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Write your message..."
              style={{
    background: "#0d130d",
    color: "white",
    boxShadow:
      "0 4px 12px rgba(2,214,113,0.3), 0 6px 20px rgba(2,214,113,0.19)",
    border: "1px solid #02d671",
     marginTop:"2vh"
  }}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success" style={{marginTop:"4vh",width:"10vw"}}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
