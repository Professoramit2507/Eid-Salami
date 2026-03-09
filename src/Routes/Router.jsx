import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/Layout/HomeLayout";
import Register from "../Components/Auth/Register";
import Home from "../Components/Layout/Home";
import Login from "../Components/Auth/Login";
import Cse3 from "../Components/BatchInfo/Cse3";
import Profile from "../Components/Profile/Profile";

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
]);