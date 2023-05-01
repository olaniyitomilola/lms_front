import NavContainer from './components/NavContainer';
import Dashboard  from './components/Dashboard';
import SignInPage from './components/SignInPage';
import signInImage from './assets/index.png'
import signUpImage from './assets/index2.png'
import { useState } from 'react';
import './App.css';


const App =()=> {
  return (
    <div className="App">
       <SignInPage signInImage={signInImage} signUpImage={signUpImage}/>
       
    </div>
  );
}

export default App;
