import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/quiz",
          element: <Quiz />,
        },
      ],
    },
  ]);
  return <RouterProvider  router={routes}/>;
}
