import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Job-A-Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">ABOUT</NavLink>
          <NavLink to="help">HELP</NavLink>
        </nav>
      </header>
      {/* The routes will be rendered below and they will always have the nav info above */}
      <main>
        <Outlet />
        {/* Outlet which tells where the child components will go  */}
      </main>
    </div>
  );
};

export default RootLayout;
