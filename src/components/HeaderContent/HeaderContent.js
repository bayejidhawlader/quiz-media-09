import React from "react";

const HeaderContent = () => {
  return (
    <div className="bg-white text-black pt-32">
      <div className="card">
        <figure>
          <img
            className="w-[50%]"
            src="https://images.pexels.com/photos/7092611/pexels-photo-7092611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Album"
          />
        </figure>
        <div className="card-body mx-auto items-center">
          <h2 className="card-title">Take a quiz chellange With Quiz Mania</h2>
          <p className="">
            Create quizzes, shows programs, solve Answer, and
            programming-learning that anyone can play on any device.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
