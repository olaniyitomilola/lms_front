import { useState,useEffect } from "react";




const ProfilePage = ()=>{
    const [profile,setProfile] = useState([]);

    useEffect(()=>{
        async function getProfile(){

          try {
              let logged = sessionStorage.getItem('identity')
              let myProfile = await fetch('https://localhost:7177/api/user/profile',{
              headers: {
                'Authorization': `Bearer ${logged}`
              },
              method: "GET"
            })
            myProfile = await myProfile.json()
            console.log(myProfile)
            setProfile(myProfile)
          } catch (error) {
            console.log(error)
          }
          
        }
        getProfile()
    },[setProfile])

    return(
        <div className="profilePage">
            {profile.length === 0? <div> loading</div> 
            :
            <div><ProfileComp
             firstName = {profile.firstName}
             lastName = {profile.lastName}
             contributor = {profile.contributor}
             email = {profile.email}
             setProfile = {setProfile}
             />
             </div>
            }
        </div>
    )
}

const ProfileComp = (props)=>{

  const becomeHandler = async ()=>{
        let logged = sessionStorage.getItem('identity')
        let myProfile = await fetch('https://localhost:7177/api/user/becomeacontributor',{
              headers: {
                'Authorization': `Bearer ${logged}`
              },
              method: "PUT"
        })
        myProfile = await myProfile.json()
        props.setProfile(myProfile)
  }
    return (
        <>
          <div className="profileComp">
              <div className="picture_andName">
                  <div id="picture"></div>
                  <div className="name_and_tage">
                      <div id="name">{props.firstName + " " + props.lastName}</div>
                      <div id = "tag">{props.contributor === false? "Student" : "Contributor"}</div>
                  </div>
              </div>

              <div id = "profileEmail">{props.email}</div>
          </div>
          <div className="contributorDash">
              {props.contributor === false? <div id = "contributorbtn"><button onClick={()=>becomeHandler()}>Become a Contributor</button></div> : <Contributions/>}
          </div>
        </>
       
    )
}
const Contributions = ()=>{
  const [myContribution,setMyContributions] = useState([]);

  useEffect(()=>{
    const fetchContributorCourses = async ()=>{
      let logged = sessionStorage.getItem('identity')

      let request = await fetch('https://localhost:7177/api/user/contributor/courses',{
        headers: {
          'Authorization' : `Bearer ${logged}`
        }
      })
      let response = await request.json();
      setMyContributions(response)
      console.log(response)
    }
    fetchContributorCourses();

  },[setMyContributions])

  return (
    <div className="myContribution">
      <div id = "myContit">My Courses</div>
      {myContribution.length === 0? "You have no course created yet" : myContribution.map((course)=> <li>{course.title}</li>)}
    </div>
  )
}



export default ProfilePage;
