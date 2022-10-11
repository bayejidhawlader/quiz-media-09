import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
// import SingleQuiz from "../../SingleQuiz/SingleQuiz";

const QuizDetail = ({ params }) => {
  const quizdetail = useLoaderData();
  console.log(quizdetail);
  return (
    <div className=" grid  md:grid-cols-2 grid-cols-1 my-10 gap-11">
      {/* {quiz.data.map((qui) => (
        <SingleQuiz key={qui.id} qui={qui}></SingleQuiz>
      ))} */}
      {quizdetail.data.questions.map((quizz) => (
        <SingleQuiz key={quizz.id} quizz={quizz}></SingleQuiz>
      ))}
    </div>
  );
};

export default QuizDetail;
