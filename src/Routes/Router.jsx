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
import RequestInfo from "../Components/RequestInfo/RequestInfo";
import Cse1 from "../Components/BatchInfo/Cse1";
import Cse2 from "../Components/BatchInfo/Cse2";
import Cse4 from "../Components/BatchInfo/Cse4";
import Cse5 from "../Components/BatchInfo/Cse5";
import Cse6 from "../Components/BatchInfo/Cse6";
import Salami from "../Components/GiveSalami/Salami";


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
            path:"cse1",
            element:<Cse1></Cse1>
        },
         {
            path:"cse2",
            element:<Cse2></Cse2>
        },
         {
            path:"cse4",
            element:<Cse4></Cse4>
        },
         {
            path:"cse5",
            element:<Cse5></Cse5>
        },
         {
            path:"cse6",
            element:<Cse6></Cse6>
        },
        {
            path:"myProfile",
            element:<Profile></Profile>
        },
        {
            path:"requests",
            element:<RequestInfo></RequestInfo>
        },
        
        {
            path:"salami",
            element:<Salami></Salami>
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