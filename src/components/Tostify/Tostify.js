import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Tostify = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <button className="bg-red-400" onClick={notify}>
        Notify!
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Tostify;
