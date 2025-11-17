import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Components/ErrorPage";
import About from "../Pages/About";
import Coverage from "../Pages/Coverage";
import Pricing from "../Pages/Pricing";
import BeARider from "../Pages/BeARider";
import Services from "../Pages/Services";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:'/services',
                Component: Services
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/coverage',
                Component: Coverage
            },
            {
                path: '/pricing',
                Component: Pricing
            },
            {
                path: '/be-a-rider',
                Component: BeARider
            }
        ]
    }
])