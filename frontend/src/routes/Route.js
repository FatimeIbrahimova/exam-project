import MainRoot from "../components/MainRoot";
import About from "../pages/About";
import Add from "../pages/Add";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Features from "../pages/Features";
import Home from "../pages/Home/Home";

export const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"blog",
                element:<Blog/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"features",
                element:<Features/>
            }
        ]
    }
]