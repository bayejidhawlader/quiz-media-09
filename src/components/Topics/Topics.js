import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Topics = ({ params }) => {
  const quizs = useLoaderData();
  return (
    <div className="md:mt-2 mt-5 lg:mx-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-10 gap-11">
      {/* {products.data.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))} */}
      {quizs.data.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Topics;
