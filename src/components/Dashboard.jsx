

const Dashboard = (props)=>{
    return(
        <div className="dashboard">
            <DashTop dashname = {props.dashname}/>
        </div>
    )
}

const DashTop = (props)=>{
    return(<div className="dashtop">
        <div id= "dashtitle">
            {props.dashname}
        </div>

    </div>
    )
}

export default Dashboard