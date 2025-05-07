import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import RegisterPage from "../pages/authPages/registerPage/registerPage";
import LoginPage from "../pages/authPages/loginPage/loginPage";
import NoPage from "../pages/noPage/noPage";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/*",
    element: <NoPage />,
  },
]);
