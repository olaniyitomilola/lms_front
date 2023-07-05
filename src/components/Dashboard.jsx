import OverviewPage from "./Overview"
import ProfilePage from "./profile"
import CoursePage from "./CoursePage"

const Dashboard = (props)=>{

    
    return(
        <div className="dashboard">
            <DashTop ActiveNav = {props.ActiveNav} logged = {props.logged}/>
            <DashMain ActiveNav = {props.ActiveNav}/>
        </div>
    )
}

const DashTop = (props)=>{
    const logoutHandler = ()=>{
        sessionStorage.clear()
        props.logged(false)
    }
    return(<div className="dashtop">
        <div id= "dashtitle">
            {props.ActiveNav}
        </div>
        <button onClick={()=>logoutHandler()} id="logoutbtn">Logout</button>

    </div>
    )
}

const DashMain = (props) => {
  return (
    <div className="dashMain">
      {props.ActiveNav === "Overview" ? (
        <OverviewPage />
      ) : props.ActiveNav === "Profile" ? (
        <ProfilePage />
      ) : (
        <CoursePage />
      )}
    </div>
  );
};

export default Dashboard