import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        The page you were looking for wasn't found. Therefore, this message is
        all I am returning to you instead. I would try to offer some assistance
        but I'm technically lost myself.
      </p>
      <p>
        To go back to the home page <Link to="/">click here</Link>
      </p>
    </div>
  );
};

export default NotFound;
