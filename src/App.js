import React from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';

function App() {

  const handleFailure =(result) =>{
    alert (result);
  };
  const handleLogin= (googleData) => {
    console.log(googleData);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <GoogleLogin 
            clientId ={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
        </div>
      </header>
    </div>
  );
}

export default App;
