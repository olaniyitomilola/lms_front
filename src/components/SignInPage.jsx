import logo from '../assets/logo.svg'
const SignInPage =({isSignIn,signInImage,signUpImage})=>{
    const backgroundstyle ={
        backgroundImage: `url(${isSignIn? signInImage: signUpImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return    (
            <div className="indexpage">
                <div id = "imageHalf" style={backgroundstyle} ></div>
                <div className="otherHalf">
                    <img width={`100px`} height={`50px`} src={logo} alt="logo" />
                    {isSignIn? <FormSignIn/> : ""}
                </div>

            </div>
        )
}
const FormSignIn=()=>{
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
                <div id='createAccount'>Don't have a Account? <span>Create Account</span></div>
            </form>
        </div>
    )
}

const FormSignUp = ()=>{
    <div className='signInFrag'>
        <div id='signInTitle'>Register</div>
    </div>
}


export default SignInPage