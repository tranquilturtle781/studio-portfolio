import './App.css';
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Project1 from "./pages/Project1.js";
import Project2 from "./pages/Project2.js";
import Project3 from "./pages/Project3.js";
import Project4 from "./pages/Project4.js";
import About from "./pages/About.js";
import Work from "./pages/Work.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="personas" element={<Project1 />} />
          <Route path="redesign" element={<Project2 />} />
          <Route path="iterativedesign" element={<Project3 />} />
          <Route path="development" element={<Project4 />} />
          {/* add no page error page here */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;