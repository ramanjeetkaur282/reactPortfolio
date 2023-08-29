import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import HorizontalBarChart from "./components/HorizontalBarChart/HorizontalBarChart";
import Certification from "./components/Certifications/certification";


function App() {
  const data = [
    { label: 'JavaScript', percentage: 90 },
    { label: 'HTML', percentage: 95 },
    { label: 'CSS', percentage: 90 },
    { label: 'React', percentage: 85 },
    { label: 'Node.js', percentage: 75 },
    { label: 'JAVA', percentage: 70 },
    { label: 'GitHub', percentage: 90 }, 
    { label: 'AWS', percentage: 65 },
    { label: 'Azure', percentage: 10 },
    { label: 'SQL', percentage: 80 },
    { label: 'MongoDB', percentage: 15 },
    { label: 'Docker', percentage: 65 },
  ];

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <HorizontalBarChart data={data} />
      <Certification />
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
