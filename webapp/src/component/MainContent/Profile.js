import React from 'react'
import Avatar, { Cache, ConfigProvider } from 'react-avatar';

//cache the image for better loading
const cache = new Cache({
  // Keep cached source failures for up to 7 days
  sourceTTL: 7 * 24 * 3600 * 1000,
  // Keep a maximum of 20 entries in the source cache
  sourceSize: 20
});


const ProfileDetails = ({ account }) => {
  return <div>
    <p> <span className="header-profile-name"> {account.name}
    </span> <span className="header-profile-trek-details-logout"> Log out  </span> </p>

    <p> <span className="header-profile-trek-details"> Completed {account.trekCount} Treks and spent {account.trekDays} days in Trekking :{account.isSocialLogged}:</span> </p>
  </div>
}

const ProfilePicture = ({ account }) => {
  return <div>
    <ConfigProvider cache={cache}>
      <Avatar src={account.logo} name={account.name} size="120" round={true} />
    </ConfigProvider>
  </div >
}

export { ProfilePicture, ProfileDetails };
