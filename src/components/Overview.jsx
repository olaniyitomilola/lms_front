import { useState,useEffect } from "react";
import { post } from "../RequestHandlers";


const OverviewPage = () =>{
    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        async function fetchCourses(){
            try{
                let course = await fetch('https://localhost:7177/api/course');
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
            <div key={course.id} >
            <CoursesComp dataId = {course.id} title={course.title}></CoursesComp>
            </div>
        ))
        )}
    </div>
    );
}

const CoursesComp = (props)=>{
    let logged = sessionStorage.getItem('identity')

    const HandleEnrol = async (courseId)=>{
     
        let request = await fetch(`https://localhost:7177/api/course/enrol/${courseId}`,{
            
            headers: {
                'Authorization': `Bearer ${logged}`
              },
            method: "Post",
        
        });
        let response = await request.json();
        console.log(response)
        return response;
    }
    return(
        <div id = "courseElement">
            <div id="coursePicture"></div>
            <div id = "courseTitle">{props.title}</div>
            <button onClick={()=>HandleEnrol(props.dataId)}>Enrol</button>
        </div>
    )
}

export default OverviewPage;