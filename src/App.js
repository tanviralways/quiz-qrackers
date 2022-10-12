import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        {
          path: "/home",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        { path: "/statistics", element: <Statistics></Statistics> },
        { path: "/blog", element: <Blog></Blog> },
      ],
    },
    { path: "*", element: <div>Not Found:404</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
