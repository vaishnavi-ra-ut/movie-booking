import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import Info from "./src/components/Info";
import store from "./src/utils/store";
import { Provider } from "react-redux";

const Layout = () => (
  <div className="app">
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>

  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/info",
        element: <Info />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />
);
