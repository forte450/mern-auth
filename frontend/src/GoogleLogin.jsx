import React from 'react';
import {useGoogleLogin} from '@react-oauth/google';

function GoogleLogin() {

  const responseGoogle = async(authResult)=>{
    try{  
      console.log(authResult);
    }catch{
      console.error('Error While Requesting Google code: ', err)
    }
  }
  const googleLogin = useGoogleLogin({
    onSuccess:responseGoogle,
    onError : responseGoogle,
    flow : 'auth-code'
  })
  return (
    <div className='App'>
      <button
      onClick={googleLogin}
      >Login With Google</button>
    </div>
  )
}

export default GoogleLogin
