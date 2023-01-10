import { RouteObject } from "react-router-dom";
import CourseDetails from "./course-details";

const route : RouteObject = {
    path: "courses",
    element: <CourseDetails/>
}

export default route;