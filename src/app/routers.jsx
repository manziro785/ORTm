import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import RegisterPage from "../pages/authPages/registerPage/registerPage";
import LoginPage from "../pages/authPages/loginPage/loginPage";
import NoPage from "../pages/noPage/noPage";
import EmailResendPage from "../pages/authPages/emailResendPage/emailResendPage";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import Scroll from "../pages/Scroll/Scroll";
import StartSurvey from "../pages/startSurvey/startSurvey";
import Exam from "../pages/Exam/Exam";
import Exam2 from "../pages/Exam2/Exam2";
import ProfileEdit from "../pages/profile/ProfileEdit/ProfileEdit.jsx";
import FriendsPage from "../pages/friends/friendsPage";

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
    path: "/email_resend",
    element: <EmailResendPage />,
  },
  {
    path: "/",
    element: <MainLayout />, // layout с сайдбаром
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "profile/edit", element: <ProfileEdit /> },
      { path: "scroll", element: <Scroll /> },
      { path: "start_survey", element: <StartSurvey /> },

      { path: "friends", element: <FriendsPage /> },
    ],
  },

  { path: "exam/:num", element: <Exam /> },
  { path: "exam2", element: <Exam2 /> },
  {
    path: "/*",
    element: <NoPage />,
  },
]);
