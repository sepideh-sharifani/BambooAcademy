import Register from "./register"
import type { RouteObject } from "react-router-dom"

const register : RouteObject = {
    path: "/register",
    element: <Register/>
}

export default register;
