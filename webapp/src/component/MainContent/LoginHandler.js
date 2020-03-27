import React from 'react'
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import logo from '../../pictures/user.svg';

//defAcc default account details 
let defAcc = {
    name: 'name',
    logo: logo,
    trekCount: '0',
    trekDays: '0',
    isSocialLogged: 'false',
    socailName: '',
    socailID: '',
    email: '',
};

const AccountDetails = defAcc

class LoginSocial extends React.Component {

    constructor(props) {
        super(props);
        this.GSuccess = this.responseGoogleSuccess.bind(this);
        this.GFailure = this.responseGoogleFailure.bind(this);
        // this.state = ({
        //     AccountDetails: defAcc
        //     {
        //         name: 'Name',
        //         logo: logo,
        //         trekCount: '0',
        //         trekDays: '0',
        //         isSocialLogged: 'false',
        //     }

        // });
    }


    responseGoogleSuccess(response) {
        // this.setState(prevState => ({
        //     AccountDetails: {                   // object that we want to update
        //         ...prevState.AccountDetails,    // keep all other key-value pairs
        //         name: 'something'       // update the value of specific key
        //     }
        // }))
        AccountDetails.name = response.profileObj.name;
        AccountDetails.logo = response.profileObj.imageUrl
        AccountDetails.isSocialLogged = 'true'
        AccountDetails.socailName = 'google'
        AccountDetails.socailID = response.profileObj.googleId
        AccountDetails.email = response.profileObj.email
    }

    responseGoogleFailure(response) {
        console.log(response);
    }

    componentDidMount() {
        /* ... */
    }

    render() {
        return (
            <SocialGoogle GSuccess={this.GSuccess} GFailure={this.GFailure} />
        );
    }
}

function SocialGoogle(props) {
    return <span>
        {<GoogleLogin
            clientId="502856974103-doqom60qqk6l3cv9e3hm133sb40kobvr.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={props.GSuccess}
            onFailure={props.GFailure}
            cookiePolicy={'single_host_origin'}
        />}
    </span>
}


ReactDOM.render(
    <LoginSocial />,
    document.getElementById('root')
);


export { LoginSocial, AccountDetails }
