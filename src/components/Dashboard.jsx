import OverviewPage from "./Overview"
import ProfilePage from "./profile"

const Dashboard = (props)=>{

    
    return(
        <div className="dashboard">
            <DashTop ActiveNav = {props.ActiveNav} />
            <DashMain ActiveNav = {props.ActiveNav}/>
        </div>
    )
}

const DashTop = (props)=>{
    const logoutHandler = ()=>{
        sessionStorage.clear()
    }
    return(<div className="dashtop">
        <div id= "dashtitle">
            {props.ActiveNav}
        </div>
        <button onClick={()=>logoutHandler()} id="logoutbtn">Logout</button>

    </div>
    )
}

const DashMain = (props)=>{
    return (<div className="dashMain">
       {props.ActiveNav === "Overview"? <OverviewPage/> : <ProfilePage/>}
    </div>)
}

export default Dashboard