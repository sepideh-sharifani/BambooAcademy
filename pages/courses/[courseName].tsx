import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { courseName } = router.query

    return <p>Post: {courseName}</p>
}

export default Post