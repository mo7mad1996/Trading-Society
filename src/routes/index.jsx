import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Dashboard from "@/Components/Layouts/Dashboard";

// pages
import LandingPage from "@/pages/LandingPage";
import Test from "@/pages/Test";
import Login from "@/Pages/Login";
import HomeProfile from "@/Pages/Dashboard/HomeProfile/index.jsx";
import AcademyProfile from "@/Pages/Dashboard/AcademyProfile/index.jsx";
import Leaderboard from "@/Pages/Dashboard/Leaderboard/index.jsx";
import TradeAlertProfile from "@/Pages/Dashboard/TradeAlertProfile/index.jsx";
import Calender from "@/Pages/Dashboard/Calender/index.jsx";
import News from "@/Pages/Dashboard/News/index.jsx";
import FullScreenVideo from "@/Pages/Dashboard/FullScreenVideo/index.jsx";
import CourseWithId from "@/Pages/Dashboard/CourseWithId/index.jsx";
import Chart from "@/Pages/Dashboard/Chart/index.jsx";
import Gang from "@/Pages/Dashboard/Gang/index.jsx";
import GangPro from "@/Pages/Dashboard/GangPro/index.jsx";
import RubberBrand from "@/Pages/Dashboard/RubberBrand/index.jsx";
import Hunter from "@/Pages/Dashboard/Hunter/index.jsx";
import InstructorWithId from "@/Pages/Dashboard/InstructorWithId/index.jsx";
import TradeAlertWithId from "@/Pages/Dashboard/TradeAlertWithId/index.jsx";
import Categories from "@/Pages/Dashboard/Categories/index.jsx";
import RecordedSessonsPage from "@/Pages/Dashboard/RecordedSessonsPage/index.jsx";
import UserRecordedSession from "@/Pages/Dashboard/UserRecordedSession/index.jsx";

// import OnlineSessions from "@/Components/HomeProfile/OnlineSessions";

// routes
const router = createBrowserRouter([
  { index: true, element: <LandingPage /> },
  { path: "/test", element: <Test /> },
  { path: "/login", element: <Login /> },

  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <HomeProfile />,
      },
      {
        path: "academy",
        element: <AcademyProfile />,
      },
      {
        path: "Tools",
        element: <Leaderboard />,
      },
      {
        path: "tradealerts",
        element: <TradeAlertProfile />,
      },
      {
        path: "calender",
        element: <Calender />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "courses/:id",
        element: <CourseWithId />,
      },
      {
        path: "video/:videoUrl",
        element: <FullScreenVideo />,
      },

      {
        path: "chart",
        element: <Chart />,
      },

      {
        path: "scanners/1",
        element: <Gang />,
      },
      {
        path: "scanners/4",
        element: <GangPro />,
      },
      {
        path: "scanners/2",
        element: <RubberBrand />,
      },
      {
        path: "scanners/3",
        element: <Hunter />,
      },
      {
        path: "instructor/:id",
        element: <InstructorWithId />,
      },
      {
        path: "offers/:id",
        element: <TradeAlertWithId />,
      },
      // // {
      // //   path: "sessions",
      // //   element: <OnlineSessions />,
      // // },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "/RecordedSessons",
        children: [
          { path: "", element: <RecordedSessonsPage /> },
          {
            path: "UserRecordedSession",
            element: <UserRecordedSession />,
          },
        ],
      },
    ],
  },
]);

// component
const Router = () => <RouterProvider router={router} />;
export default Router;
