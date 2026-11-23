import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Circles from './components/Circles/Circles';

function App() {
  return (
    <div style={{ background: "#0d130d", minHeight: "200vh" ,paddingLeft:"3vw",overflowX:"hidden"}}>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Circles/>
    </div>
  );
}

export default App;
