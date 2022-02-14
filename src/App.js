import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';

function App() {

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      :null
  );

  const handleFailure =(result) =>{
    alert (result);
  };

  const handleLogout = () =>
  {
    localStorage.removeItem ('loginData');
    setLoginData(null);
  };

  const handleLogin =async (googleData) =>
  {
    const res =await fetch('/api/google-login',{
      method:'POST',
      body:JSON.stringify({
        token:googleData.tokenId,
      }),
      headers:{
        'Content-Type': 'application/json',
      },
    });

    const data =await res.json();
    setLoginData(data);
    localStorage.setItem('loginData',JSON.stringify(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Sign Up With Google</h1>
        <div>
          {
            loginData ?
              (
                <div>
                  <h3>Logged In as {loginData.email}</h3>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <GoogleLogin 
                  clientId ={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Log in with Google"
                  onSuccess={handleLogin}
                  onFailure={handleFailure}
                  cookiePolicy={'single_host_origin'}
                ></GoogleLogin>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
