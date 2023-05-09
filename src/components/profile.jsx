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
             />
             </div>
            }
        </div>
    )
}

const ProfileComp = (props)=>{
    return (
        <div className="profileComp">
            <div className="picture_andName">
                <div id="picture"></div>
                <div className="name_and_tage">
                    <div id="name">{props.firstName + " " + props.lastName}</div>
                    <div id = "tag">{props.contributor === false? "Student" : "Contributor"}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
