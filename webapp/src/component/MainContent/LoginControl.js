import React from 'react'
import ReactDOM from 'react-dom';
import logo from '../../pictures/user.svg';
import { GoogleLogin } from 'react-google-login';
import { ProfileDetails, ProfilePicture } from './Profile'

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.GSuccess = this.responseGoogleSuccess.bind(this);
        this.GFailure = this.responseGoogleFailure.bind(this);

        this.state = {
            isLogInClicked: false,
            AccountDetails: {
                name: 'name',
                logo: logo,
                trekCount: '0',
                trekDays: '0',
                isSocialLogged: false,
                socailTypeName: '',
                socailID: '',
                email: '',
            },
        };
    }

    componentDidMount() {
    }

    responseGoogleSuccess(response) {
        if (response.profileObj === undefined) {
            console.log("undefined response from google, not logging in")
            // TODO: remove this setstate
            this.setState({
                isLogInClicked: true,
                AccountDetails: {
                    name: "DummyUserForTesting",
                    isSocialLogged: true,
                    trekCount: '0',
                    trekDays: '0',
                }
            });
            return
        }
        this.setState({
            isLogInClicked: true,
            AccountDetails: {
                name: response.profileObj.name,
                logo: response.profileObj.imageUrl,
                isSocialLogged: true,
                socailTypeName: 'google',
                socailID: response.profileObj.googleId,
                email: response.profileObj.email,
                trekCount: '0', //TODO: may need to remove this, have to load the real details from mongodb
                trekDays: '0',
            }
        });
    }

    responseGoogleFailure(response) {
        console.log(response);
    }

    handleLogoutClick() {
        this.setState({
            isLogInClicked: false,
            AccountDetails: {
                name: 'name',
                isSocialLogged: false,
            }
        });
    }

    render() {
        const isLogInClicked = this.state.isLogInClicked;
        const Account = this.state.AccountDetails;
        // header dev, this will have login page of profile details page
        let profileHeaderDiv;
        if (isLogInClicked && Account.isSocialLogged) {
            profileHeaderDiv = <ProfileDiv logoutClick={this.handleLogoutClick} acc={Account} />;
        } else {
            profileHeaderDiv = <LoginDiv GSuccess={this.GSuccess} GFailure={this.GFailure} />;
        }

        return (
            <div>
                {profileHeaderDiv}
            </div>
        );
    }
}

// this function maintains the Login screen
function LoginDiv(props) {
    return <div className="content-header">
        <div className="header-social-login">
            {/* TODO: remove this onclick */}
            <p onClick={props.GSuccess}>
                <span className="header-social-login-text">
                    Signup or Login Using one of the Socail Accounts below
                </span> </p>
            <SocailLoginTab GSuccess={props.GSuccess} GFailure={props.GFailure} />
        </div>
    </div>;
}

// this function handles soical login account types
function SocailLoginTab(props) {
    return (
        <div className="header-social-login-options" >
            <span className="header-social-login-option"><SocialGoogle GSuccess={props.GSuccess} GFailure={props.GFailure} /></span>
            <span className="header-social-login-option"><SocialGoogle GSuccess={props.GSuccess} GFailure={props.GFailure} /></span>
        </div >
    );
}

// this function handles social google button
function SocialGoogle(props) {
    return <span>
        <GoogleLogin
            clientId="502856974103-doqom60qqk6l3cv9e3hm133sb40kobvr.apps.googleusercontent.com"
            // buttonText="Google"
            theme="dark"
            onSuccess={props.GSuccess}
            onFailure={props.GFailure}
            cookiePolicy={'single_host_origin'}
        />
    </span>
}


// this function maintains the profile details after login, calls the Profile.js
function ProfileDiv(props) {
    const PropaccAccountDetails = props.acc
    return <div className="content-header">
        <div className="header-profile-details-space">
            <ProfileDetails account={PropaccAccountDetails} />
        </div>
        <div className="header-picture-space">
            <ProfilePicture account={PropaccAccountDetails} />
            <p onClick={props.logoutClick} className="header-profile-trek-details-logout">Log out</p>
        </div>
    </div>;
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);

export default LoginControl
