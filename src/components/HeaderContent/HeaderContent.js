import React from "react";

const HeaderContent = () => {
  return (
    <div className="bg-white text-black pt-32">
      <div className="card">
        <figure>
          <img
            className="w-[40%]"
            src="https://quizizz.com/wf/assets/6333fb9ca08e3adffcfc663b_Funding_CTA_Image-p-800.png"
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
