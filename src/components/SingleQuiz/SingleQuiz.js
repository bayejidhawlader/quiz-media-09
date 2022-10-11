import React from "react";

const SingleQuiz = ({ quizz }) => {
  const { name, logo, id, question, options } = quizz;
  return (
    <div>
      {/* <h2>{question}</h2>
      <p>{options}</p> */}
      {/* <div
        className="flex rounded-lg border border-gray-200 bg-white shadow-md
      dark:border-gray-700 dark:bg-gray-800 flex-col"
        data-testid="flowbite-card"
      >
        <div className="flex h-full flex-col justify-center gap-4 p-6">
          <div className="flex justify-between">
            <div className="cursor-pointer border-solid border-2 border-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white max-h-screen ">
                {question}
              </h5>
              <div className="cursor-pointer border-solid border-2 border-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded">
                {options}
              </div>
              <div className="cursor-pointer border-solid border-2 border-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded">
                {options}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <h3 class="mb-4 font-semibold text-gray-900 ">{question}</h3>
        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="horizontal-list-radio-license"
                class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Driver License{" "}
              </label>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input
                id="horizontal-list-radio-id"
                type="radio"
                value=""
                name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="horizontal-list-radio-id"
                class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                State ID
              </label>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input
                id="horizontal-list-radio-millitary"
                type="radio"
                value=""
                name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="horizontal-list-radio-millitary"
                class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                US Millitary
              </label>
            </div>
          </li>
          <li class="w-full dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input
                id="horizontal-list-radio-passport"
                type="radio"
                value=""
                name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="horizontal-list-radio-passport"
                class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                US Passport
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleQuiz;
