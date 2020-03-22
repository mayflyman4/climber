import React, { Component } from 'react'
// import { ProfileDetails, ProfilePicture } from './Profile'
import LoginControl from './LoginControl';


export default class MainContent extends Component {
  render() {
    return <div>
      {/* profile related */}
      <div>
        <LoginControl />
      </div>

      {/* Main content body*/}
      <div className="content-body">
        <p>
          This website stores cookies on your computer.
          These cookies are used to collect information about how you interact with our website and allow us to remember you.
          We use this information in order to improve and customize your browsing experience and for analytics and metrics about
          our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.
      </p>
        <br />
        <p>
          This website stores cookies on your computer.
          These cookies are used to collect information about how you interact with our website and allow us to remember you.
          We use this information in order to improve and customize your browsing experience and for analytics and metrics about
          our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.
      </p>
      </div>
    </div>
  }
}

// function Profile(props) {
//   const isLoggedIn = props.isLoggedIn;
//   // if (!isLoggedIn) {
//   //   return <div className="content-header">
//   //     <div>
//   //       <LoginSocial />
//   //     </div>
//   //   </div>
//   // }

//   return <div className="content-header">
//     <div className="header-profile-details-space">
//       <ProfileDetails />
//     </div>
//     <div className="header-picture-space">
//       <ProfilePicture />
//     </div>
//   </div>
// }
