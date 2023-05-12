import { useState,useEffect } from "react";


const OverviewPage = () =>{
    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        async function fetchCourses(){
            try{
                let course = await fetch('https://localhost:7177/api/Course');
                course = await course.json();
                setCourses(course)

            }catch(error){
                console.log(error);
            }

        } 
        fetchCourses()
    },[setCourses])

   return (
    <div className="overviewDash">
        {courses.length === 0 ? (
        <div>Loading...</div>
        ) : (
        courses.map((course) => (
            <div key={course.id}>
            <CoursesComp title={course.title}></CoursesComp>
            </div>
        ))
        )}
    </div>
    );


}

const CoursesComp = (props)=>{
    return(
        <div id = "courseElement">
            <div id="coursePicture"></div>
            <div id = "courseTitle">{props.title}</div>
            <button>Enrol</button>
        </div>
    )
}

export default OverviewPage;