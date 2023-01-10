import NotFound from "./not-found";
import type { RouteObject } from "react-router-dom";

const route: RouteObject = {
    path: "/*",
    element: <NotFound />
}

export default route