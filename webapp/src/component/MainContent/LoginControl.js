import React from 'react'
import ReactDOM from 'react-dom';
// import logo from './user.png';
import { ProfileDetails, ProfilePicture } from './Profile'

class LoginControl extends React.Component {
    constructor(props) {
        console.log("inside constructor");
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        console.log("inside handleLoginClick");
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        console.log("inside handleLogoutClick");
        this.setState({ isLoggedIn: false });
    }

    render() {
        console.log("inside render");
        const isLoggedIn = this.state.isLoggedIn;
        // header dev, this will have login page of profile details page
        let profileHeaderDiv;
        if (isLoggedIn) {
            profileHeaderDiv = <ProfileDiv onClick={this.handleLogoutClick} />;
        } else {
            profileHeaderDiv = <LoginDiv onClicker={this.handleLoginClick} />;
        }

        return (
            <div>
                {profileHeaderDiv}
            </div>
        );
    }
}

function LoginDiv(props) {
    console.log("inside LoginDiv");
    return <div className="content-header">
        <button onClick={props.onClicker}>
            Login
        </button>
    </div>;
}

// default values for the user object
const accountDetails = {
    name: 'name',
    logo: 'https://lh3.googleusercontent.com/a-/AOh14GhlcyauOPw_5yp13uu7CzOfve1tmup68XIsMbdnyPM=s96-c',
    trekCount: '0',
    trekDays: '0',
};

function ProfileDiv(props) {
    console.log("inside ProfileDiv");
    return <div className="content-header">
        <button onClick={props.onClick} className="header-profile-trek-details-logout" >
            Logout
        </button>
        <div className="header-profile-details-space">
            <ProfileDetails account={accountDetails} />
        </div>
        <div className="header-picture-space">
            <ProfilePicture account={accountDetails} />
        </div>
    </div>;
}


ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);

export default LoginControl
