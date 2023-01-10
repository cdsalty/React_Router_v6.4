import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareerLayout from "./layouts/CareerLayout";

// Need to tell where we want these page components when we go to different paths
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      {/* CareerLayout is just the layout. The data that will appear will come from careers */}
      <Route path="careers" element={<CareerLayout />}>
        <Route index loader={careersLoader} element={<Careers />} />
      </Route>
      {/* Catch route; will use ErrorElements later */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

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
