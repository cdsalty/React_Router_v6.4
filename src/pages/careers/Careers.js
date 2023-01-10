import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to="/" key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
    // This will be where all the careers/jobs are listed.
  );
}

// Loader Function (will be passed as a prop to be associated with this route)
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  // React-router will handle the promise and return the data.
  return res.json();
};

// To run json-server: json-server -p 4000 -w ./data/db.json

/*
React router will resolve the promise from res.json() and grab the data for us.
When we use the hook inside of this component, it's going to return that data to us. 
I am storing the data inside the const, ' carrers '.

*/
