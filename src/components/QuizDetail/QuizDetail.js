import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const QuizDetail = ({ params }) => {
  const name = useLoaderData();
  console.log(name);
  const quizdetail = useLoaderData();

  return (
    <div className="grid md:grid-cols- grid-cols-1 py-32">
      {" "}
      <h1 className="text-xl">Test Of {name.data.name}</h1>
      {quizdetail.data.questions.map((singleQuiz) => (
        <SingleQuiz key={singleQuiz.id} singleQuiz={singleQuiz}></SingleQuiz>
      ))}
    </div>
  );
};

export default QuizDetail;
