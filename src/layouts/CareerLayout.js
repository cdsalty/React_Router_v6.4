import { Outlet } from "react-router-dom";

export default function CareerLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        The lorem of careers. Unlock your potential and see your new future
        today.
      </p>
      <p>All of this and above is coming from the "CarrerLayout" component</p>
      {/* The outlet will be where any nested route pages inside the career layouts route are */}
      <Outlet />
    </div>
  );
}
