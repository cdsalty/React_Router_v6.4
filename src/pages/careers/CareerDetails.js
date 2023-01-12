import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData(); // how we get the data from the careerDetailsLoader
  console.log("Career data coming from CareerDetails: ", career);

  return (
    <div className="career-details">
      <h2>Career Details(for param {id})</h2>

      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
          sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params; // must be the same as the others.

  const res = await fetch("http://localhost:4000/careers/" + id);
  return res.json();
};

/*
import useParams and invoke it. 
// We also need a loader function to load a single carrer when the user goes there.
** By destructuring the "params" in the careerDetailsLoader, we're able to gain access to the id that's listed in the CareerDetails component. 

It's OUTSIDE the scope.

*/
