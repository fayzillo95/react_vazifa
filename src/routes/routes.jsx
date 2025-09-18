import { createBrowserRouter } from "react-router-dom"
import Sign from "../Sign/Sign"
import HomePage from "../pages/home"
import { lazy, Suspense } from "react"
const Users = lazy(() => import("../componentes/Users"))

export const routes = createBrowserRouter([

    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "users",
                element: <Suspense fallback={<div> Loading ......</div>}>
                    <Users />
                </Suspense>
            }, 
            {
                path: "sign",
                element: <Sign />,
            },
        ]
    }
])