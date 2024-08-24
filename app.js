import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Card from "../movie-booking/src/components/Cards"

const Layout = () => (
    <div className="app">
        <Header />
        <Body />
        <Card />
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);