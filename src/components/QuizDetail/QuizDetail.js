import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
// import SingleQuiz from "../../SingleQuiz/SingleQuiz";

const QuizDetail = ({ params }) => {
  const quizdetail = useLoaderData();
  // console.log(quizdetail);
  return (
    <div className="grid md:grid-cols- grid-cols-1 p-10  gap-24">
      {quizdetail.data.questions.map((singleQuiz) => (
        <SingleQuiz key={singleQuiz.id} singleQuiz={singleQuiz}></SingleQuiz>
      ))}
    </div>
  );
};

export default QuizDetail;
