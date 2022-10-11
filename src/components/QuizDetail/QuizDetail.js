import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
// import SingleQuiz from "../../SingleQuiz/SingleQuiz";

const QuizDetail = ({ params }) => {
  const quizdetail = useLoaderData();
  return (
    <div>
      <h2>Test Of Texts</h2>
      {/* {quiz.data.map((qui) => (
        <SingleQuiz key={qui.id} qui={qui}></SingleQuiz>
      ))} */}
      {quizdetail.data.map((quizz) => (
        <SingleQuiz key={quizz.id} quizz={quizz}></SingleQuiz>
      ))}
    </div>
  );
};

export default QuizDetail;
