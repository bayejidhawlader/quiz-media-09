import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import FourOFour from "./components/FourOFour/FourOFour";
import Main from "./components/Main/Main";
import Statistics from "./components/Statistics/Statistics";
import QuizDetail from "./components/QuizDetail/QuizDetail";
import Topics from "./components/Topics/Topics";
import HeaderContent from "./components/HeaderContent/HeaderContent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element: <Topics></Topics>,
        },
        {
          path: "/",
          element: <HeaderContent></HeaderContent>,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params, name }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <QuizDetail></QuizDetail>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "*",
          element: <FourOFour></FourOFour>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
