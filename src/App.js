import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Landing from "./components/Landing/Landing";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Landing />} exact path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Resume />} path="/resume" />
      </Routes>
    </div>
  );
}

export default App;
