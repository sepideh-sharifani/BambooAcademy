import Header from "../../components/header"
import SingleCourseDetails from "./section/SingleCourseDetails";
import Footer from "../../components/footer";
export default function CourseDetails() {
    return (
        <>
            <Header hideSearchBar={true}/>
            <SingleCourseDetails/>
            <Footer />
        </>
    )

}
