import { useLocation } from "react-router-dom"
export default function CourseDetails(){
    const {state}=useLocation()
    return <h1>this course details</h1>
}