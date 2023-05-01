import logo from '../assets/logo.svg'
import { useState } from 'react'





const SignInPage =({signInImage,signUpImage})=>{
    const [activePage,setActivePage] = useState('sign-in-page')
    const handleClick = (act)=>{
        setActivePage(act)
    }

    const backgroundstyle ={
        backgroundImage: `url(${activePage === 'sign-in-page'? signInImage: signUpImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return    (
            <div className="indexpage">
                <div id = "imageHalf" style={backgroundstyle} ></div>
                <div className="otherHalf">
                    <img width={`100px`} height={`50px`} src={logo} alt="logo" />
                    {activePage === 'sign-in-page'? <FormSignIn onClick={()=>handleClick('sign-up-page')}/> : <FormSignUp onClick={()=>handleClick('sign-in-page')}/>}
                </div>

            </div>
        )
}
const FormSignIn=({onClick})=>{
    return(
        <div className="signInFrag">
            <div id="signInTitle">Log In</div>
            <form id="signInForm">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="signInEmail" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <input type="button" value="Log in" id="loginButton"/>
                <div id='forgotpass'>Forgot password?</div>
                <div id='createAccount'>Don't have a Account? <span onClick={onClick}>Create Account</span></div>
            </form>
        </div>
    )
}

const FormSignUp = ({onClick})=>{

   return (
        <div className='signInFrag'>
            <form id='signUpForm'>
                <div id='signInTitle'>Register A New Account</div>

                <div id = "formController">
                    <input type="text" name="firstName" id="firstName" placeholder='First Name'/>
                    <input type="text" name="lastName" id="lastName" placeholder='Last Name'/>
                    <input type="email" name="email" id="regEmail" placeholder='Email' />
                    <input type="tel" name="phone" id="phone" />
                    <input type="password" name='password' id='password' placeholder='Password'/>
                    <input type="password" id='confirmPassword' placeholder='Confirm Password'/>
                </div>
                <input type="button"value='create Account' />
                <div id='createAccount'>Already have an Account? <span onClick={onClick}>Log in</span></div>
                

            
            
            </form>
        </div>
    )
}


export default SignInPage