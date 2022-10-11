import React from "react";

const HeaderContent = () => {
  return (
    <div className="bg-white text-black py-11">
      <div className="card lg:card-side">
        <figure>
          <img
            className="w-[50%]"
            src="https://images.pexels.com/photos/7092611/pexels-photo-7092611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Welcome to the quiz website</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
