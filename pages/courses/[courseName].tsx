import {useRouter} from 'next/router'
import SingleCourseDetails from "../../src/pages/course-details/section/SingleCourseDetails";

const Post = () => {
    const router = useRouter()
    const {courseName} = router.query

    return <SingleCourseDetails courseName={courseName}/>
}

export default Post