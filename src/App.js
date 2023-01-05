import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Job-A-Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">ABOUT</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
