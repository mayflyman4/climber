import React from 'react'
import ReactDOM from 'react-dom';
import logo from '../../pictures/user.svg';
import { ProfileDetails, ProfilePicture } from './Profile'
import { LoginSocial, AccountDetails } from './LoginHandler'

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        AccountDetails.name = 'name'
        AccountDetails.logo = logo
        AccountDetails.isSocialLogged = 'false'
        AccountDetails.socailName = ''
        AccountDetails.socailID = ''
        AccountDetails.email = ''
        this.setState({ isLoggedIn: false });
    }

    render() {
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
    return <div className="content-header">
        <button onClick={props.onClicker}>
            Login
        </button>
        <LoginSocial />
    </div>;
}

function ProfileDiv(props) {
    return <div className="content-header">
        <button onClick={props.onClick} className="header-profile-trek-details-logout" >
            Logout
        </button>
        <div className="header-profile-details-space">
            <ProfileDetails account={AccountDetails} />
        </div>
        <div className="header-picture-space">
            <ProfilePicture account={AccountDetails} />
        </div>
    </div>;
}


ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);

export default LoginControl
