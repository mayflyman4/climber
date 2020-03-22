import React from 'react'
import { GoogleLogin } from 'react-google-login';


// profileObj:
// googleId: "111499905672305473739"
// imageUrl: "https://lh3.googleusercontent.com/a-/AOh14GhlcyauOPw_5yp13uu7CzOfve1tmup68XIsMbdnyPM=s96-c"
// email: "shettybharath4@gmail.com"
// name: "Bharath Kumar"
// givenName: "Bharath"
// familyName: "Kumar"


const responseGoogleSuccess = (response) => {
    console.log(response);
    console.log(response.profileObj.name);
    console.log(response.profileObj.imageUrl);
    console.log(response.profileObj.googleId);
}

const responseGoogleFailure = (response) => {
    console.log(response);
}


const LoginSocial = () => {
    return <span>
        {<GoogleLogin
            clientId="502856974103-doqom60qqk6l3cv9e3hm133sb40kobvr.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            // custom button
            // render={renderProps => (
            //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
            // )}
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailure}
            cookiePolicy={'single_host_origin'}
        />}
    </span>
}

export default LoginSocial
