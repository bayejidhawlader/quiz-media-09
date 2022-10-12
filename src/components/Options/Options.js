import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Options = ({ options, option, correctAnswer, name }) => {
  const quizOptionHandler = (option) => {
    if (option === correctAnswer) {
      toast.success("Your answer is Correct");
    } else {
      toast.error("Answer is Wrong");
    }
  };
  return (
    <div
      onClick={() => {
        quizOptionHandler(option);
      }}
      className="lg:max-w-[350px] sm:max-w-[200px] lg:h-[80px] sm:h-[50px] sm:flex sm:items-center sm:justify-center border-2 border-stone-500 rounded hover:bg-stone-100 cursor-pointer"
    >
      <div className="max-w-[300px] h-[70px] mx-auto font-bold font-mono flex items-center justify-center ">
        <ToastContainer theme="colored"></ToastContainer>
        {option}
      </div>
      <div></div>
    </div>
  );
};

export default Options;
