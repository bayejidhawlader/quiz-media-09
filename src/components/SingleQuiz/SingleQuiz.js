import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleQuiz = ({ quizz }) => {
  const { name, logo, id, question, options } = quizz;

  return (
    <div>
      <div>
        <h3 className="mb-4 font-semibold">{question}</h3>
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="horizontal-list-radio-license"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {options[0]}
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-id"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="horizontal-list-radio-id"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {options[1]}
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-millitary"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="horizontal-list-radio-millitary"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {options[2]}
              </label>
            </div>
          </li>
          <li className="w-full dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-passport"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="horizontal-list-radio-passport"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {options[3]}
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleQuiz;
