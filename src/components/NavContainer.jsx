import logo from '../assets/logo.svg';
import Overview from'../assets/overview'
import Profile from '../assets/profile'
import Courses from '../assets/courses'
import { useState } from 'react';

const NavContainer =()=> {
  const [activeNav,setActive] = useState('nav-item-1');
  const handleClick = (navlink)=>{
        setActive(navlink);
  }
  return (
    <div className="navContainer">
        <NavLogo/>
        <div className='nav'>
            <NavLink active = {activeNav === "nav-item-1"} linkName = 'Overview' src = {<Overview/>}onClick={()=>handleClick('nav-item-1')} />
            <NavLink active = {activeNav === "nav-item-2"} linkName = 'Profile' src = {<Profile/>} onClick={()=>handleClick('nav-item-2')}/>
            <NavLink active = {activeNav === "nav-item-3"} linkName = 'Courses' src = {<Courses/>} onClick={()=>handleClick('nav-item-3')} />
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
