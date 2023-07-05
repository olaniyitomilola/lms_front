import { useState,useEffect } from "react";


const CoursePage = () =>{
    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        async function fetchCourses(){
            try{
                let logged = sessionStorage.getItem('identity')
              let courses = await fetch('https://localhost:7177/api/user/courses',{
              headers: {
                'Authorization': `Bearer ${logged}`
              },
              method: "GET"
            })                
            courses = await courses.json();
                setCourses(courses)
                console.log(courses)

            }catch(error){
                console.log(error);
            }

        } 
        fetchCourses()
    },[setCourses])

  // return (
    // <div className="overviewDash">
    //     {courses.length === 0 ? (
    //     <div>Loading...</div>
    //     ) : (
    //     courses.map((course) => (
    //         <div key={course.id}>
    //         <AuditCoursesComp title={course.title}></AuditCoursesComp>
    //         </div>
    //     ))
    //     )}
    // </div>
   // );


}

const AuditCoursesComp = (props)=>{
    return(
        <div id = "courseElement">
            <div id="coursePicture"></div>
            <div id = "courseTitle">{props.title}</div>
            <button>Open</button>
        </div>
    )
}

export default CoursePage;