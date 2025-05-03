import {
    createBrowserRouter,
  } from "react-router";
import App from "../App";



  export const router = createBrowserRouter([
    {
      path: "/",
      Component:App,
      children:[
        {
            path:'/name',
            element:<h1>name</h1>
        }
      ]
    },
  ]);
  