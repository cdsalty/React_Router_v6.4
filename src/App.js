import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

// Need to tell where we want these page components when we go to different paths
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" elements={<HelpLayout />}>
        {/* /help/faq */}
        <Route path="faq" />
        <Route path="contact" />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

/*
Before React Router update:
- Remove Browser Router
- import createBrowserRouter, createRoutesFromElements, RouterProvider
- change "Routes" to "Route"
- the element is a type of layout component

* Help section
- will need it's own layout so to start off, we create a new file under layouts, 

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
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

*/
