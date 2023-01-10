import { useRoutes } from "react-router";

import notFound from "./not-found";
import register from "./register";
import landing from "./landing";
import courses from "./courses";
import courseDetails from "./course-details";

export default function Application() {
  return useRoutes([notFound, register, landing, courses, courseDetails]);
}
