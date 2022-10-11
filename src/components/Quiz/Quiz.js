import React from "react";
import { Link } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { name, logo, id } = quiz;
  return (
    <div className="max-w-sm">
      <div className="card shadow-xl border-2 dark:bg-gray-300">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions justify-end">
            {/* <Link to={`/quiz/${id}`}>
              
            </Link> */}

            <Link to={`/quiz/${id}`}>
              <button className="btn btn-primary">Start Quiz</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
