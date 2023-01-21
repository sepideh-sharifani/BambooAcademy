import { GeneralInfo, LandingCourses, RoadMap, News, Suggestions } from "./components";


// 'sm': '640px',
// // => @media (min-width: 640px) { ... }

// 'md': '768px',
// // => @media (min-width: 768px) { ... }

// 'lg': '1024px',
// // => @media (min-width: 1024px) { ... }

// 'xl': '1280px',
// // => @media (min-width: 1280px) { ... }

// '2xl': '1536px',
// // => @media (min-width: 1536px) { ... }
// }
export default function Landing() {
    return <div className={`w-full`} >
        <GeneralInfo></GeneralInfo>
        <LandingCourses></LandingCourses>
        <RoadMap></RoadMap>
        <News></News>
        <Suggestions></Suggestions>
    </div >
}