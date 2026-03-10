import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/Layout/HomeLayout";
import Register from "../Components/Auth/Register";
import Home from "../Components/Layout/Home";
import Login from "../Components/Auth/Login";
import Cse3 from "../Components/BatchInfo/Cse3";
import Profile from "../Components/Profile/Profile";
import AdminDashboard from "../Dashboard/Admin/AdminDashboard";
import DashboardHome from "../Dashboard/Admin/DashboardHome";
import UserManagement from "../Dashboard/Admin/UserManagement";
import BatchManagement from "../Dashboard/Admin/BatchManagement";
import AnalyticsDashboard from "../Dashboard/Admin/AnalyticsDashboard";
import AnnouncementSystem from "../Dashboard/Admin/AnnouncementSystem";
import SalamiRequests from "../Dashboard/Admin/SalamiRequests";
import SalamiTransactions from "../Dashboard/Admin/SalamiTransactions";
import ReportSystem from "../Dashboard/Admin/ReportSystem";
import LeaderboardControl from "../Dashboard/Admin/LeaderboardControl";
import Dashboard from "../Components/Layout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>,
        },
        {
            path:"register",
            element:<Register></Register>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"cse3",
            element:<Cse3></Cse3>
        },
        {
            path:"myProfile",
            element:<Profile></Profile>
        }
    ]
  },
  {
    path:"dashboard",
    // element:<AdminDashboard></AdminDashboard>,
    element:<Dashboard></Dashboard>,
    children:[
        {
            index:true,
            element:<DashboardHome></DashboardHome>
        },
        {
            path:"user",
            element:<UserManagement></UserManagement>
        },
        {
            path:"batch",
            element:<BatchManagement></BatchManagement>
        },
        {
            path:"analytics",
            element:<AnalyticsDashboard></AnalyticsDashboard>
        },
        {
            path:"announce",
            element:<AnnouncementSystem></AnnouncementSystem>
        },
        {
            path:"salamiRequest",
            element:<SalamiRequests></SalamiRequests>
        },
        {
            path:"salamiTrans",
            element:<SalamiTransactions></SalamiTransactions>
        },
        {
            path:"report",
            element:<ReportSystem></ReportSystem>
        },
        {
            path:"leader",
            element:<LeaderboardControl></LeaderboardControl>
        }
    ]
  }
]);