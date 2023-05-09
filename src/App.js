import NavContainer from './components/NavContainer';
import Dashboard  from './components/Dashboard';
import SignInPage from './components/SignInPage';
import signInImage from './assets/index.png'
import signUpImage from './assets/index2.png'
import { useState,useEffect } from 'react';
import './App.css';

const App =()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect( ()=>{
      const logged = sessionStorage.getItem('identity');
      if(logged){
        setIsLoggedIn(true)
        async function getProfile(){

          try {
              let myProfile = await fetch('https://localhost:7177/api/author/profile',{
              headers: {
                'Authorization': `Bearer ${logged}`
              },
              method: "GET"
            })
            myProfile = await myProfile.json()
            console.log(myProfile)
          } catch (error) {
            console.log(error)
          }
          
        }

        getProfile()

      }

  },[])

  const logHandler = ()=>{
    setIsLoggedIn(true)
  }
  const [page, setPage] = useState('Overview');

  const pageHandler = (page)=>{
    setPage(page)
  }


  return (
    <div className="App">

      {isLoggedIn? 
      <><NavContainer activeNav = {page} handleClick = {pageHandler}/>
      <Dashboard ActiveNav = {page} /> </>: 
      <SignInPage onLogged={logHandler} signInImage={signInImage} signUpImage={signUpImage}/> 
      }
       
       
    </div>
  );
}

export default App;
