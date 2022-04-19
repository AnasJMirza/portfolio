import logo from './logo.svg';
import './App.css';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Skills from './sections/skills/Skills';
import Project from './sections/project/Project';


function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      {/* <Project/> */}
    </div>
  );
}

export default App;
