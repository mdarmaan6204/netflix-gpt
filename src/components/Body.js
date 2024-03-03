import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import WatchPage from "./WatchPage";

const Body = () => {
  const appRounter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      children :[
        {
          path : "/browse/:movieId",
          element : <WatchPage />
        }
      ]
    },
    {
      path: "/error",
      element: <Error/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRounter} />
    </div>
  );
};

export default Body;
