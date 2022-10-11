import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <div>This is default page</div> },
    { path: "/home", element: <div> Home page</div> },
    { path: "/topics", element: <div> Home page</div> },
    { path: "/statistics", element: <div> Home page</div> },
    { path: "/blog", element: <div> Home page</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
