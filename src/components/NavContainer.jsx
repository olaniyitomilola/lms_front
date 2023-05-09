import logo from '../assets/logo.svg';
import Overview from'../assets/overview'
import Profile from '../assets/profile'
import Courses from '../assets/courses'
import { useEffect, useState } from 'react';

const NavContainer =(props)=> {


  const handleClick = (navlink)=>{
        setActive(navlink);
  }
  return (
    <div className="navContainer">
        <NavLogo/>
        <div className='nav'>
            <NavLink active = {props.activeNav === "Overview"} linkName = 'Overview' src = {<Overview/>}onClick={()=>props.handleClick('Overview')} />
            <NavLink active = {props.activeNav === "Profile"} linkName = 'Profile' src = {<Profile/>} onClick={()=>props.handleClick('Profile')}/>
            <NavLink active = {props.activeNav === "Courses"} linkName = 'Courses' src = {<Courses/>} onClick={()=>props.handleClick('Courses')} />
        </div>
    </div>
  );
}
const NavLink = ({active,onClick,src,linkName})=>{
  return(
    <div className="navElement">
      <button onClick={onClick} className= {active? "navLink" : ""}> <div id = "imgcon">{src}</div> <>{linkName}</></button>
    </div>
  )
}



const NavLogo = ()=>{
  return(
    <div className="navLogo">
      <img src={logo} alt="" />
    </div>
  )
}

export default NavContainer;
