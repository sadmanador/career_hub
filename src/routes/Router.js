import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import DetailJob from "../components/DetailJob/DetailJob";
import AppliedJob from "../components/AppliedJob/AppliedJob";
import { jobsAndAppliedJobLoader } from "../loader/jobsAndAppliedJobLoader";
import Statistics from "../components/Statistics/Statistics";
import Blogs from "../components/Blogs/Blogs";
import NotFound from "../components/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/job/:id',
                element: <DetailJob></DetailJob>,
            },
            {
                path: '/applied_job',
                element: <AppliedJob></AppliedJob>,
                loader: jobsAndAppliedJobLoader
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])