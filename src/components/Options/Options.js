import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Options = ({ option, correctAnswer }) => {
  const quizOptionHandler = (option) => {
    if (option === correctAnswer) {
      toast.success("Your answer is Correct");
    } else {
      toast.error("wrong");
    }
  };
  return (
    <div
      className="lg:max-w-[350px] sm:mx-w-[200px] lg:h-[80px] sm:h-[50px] sm:flex sm:items-start sm:justify-center border-2 border-purple-500 rounded-none hover:bg-purple-200 cursor-pointer"
      onClick={() => quizOptionHandler(option)}
    >
      <div className="max-w-[300px] h-[7px] mx-auto font-bold font-mono flex items-center justify-center">
        <ToastContainer theme="colored">{option}</ToastContainer>
      </div>
    </div>
  );
};

export default Options;
