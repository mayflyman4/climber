import React from 'react'
// import Avatar, { Cache, ConfigProvider } from 'react-avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  }),
);
//cache the image for better loading
// const cache = new Cache({
//   // Keep cached source failures for up to 7 days
//   sourceTTL: 7 * 24 * 3600 * 1000,
//   // Keep a maximum of 20 entries in the source cache
//   sourceSize: 20
// });


const ProfileDetails = ({ account }) => {
  return <div>
    <p> <span className="header-profile-name"> {account.name}</span></p>
    <p> <span className="header-profile-trek-details"> Completed {account.trekCount} Treks and spent {account.trekDays} days in Trekking</span> </p>
  </div>
}

// TODO: Not working as expected
const ProfilePicture = ({ account }) => {
  const classes = useStyles();
  return <div className={classes.root}>
    {/* <ConfigProvider cache={cache}> */}
    <Avatar src={account.logo} className={classes.large} name={account.name} alt={account.name} size="100" />
    {/* </ConfigProvider> */}
  </div >
}

export { ProfilePicture, ProfileDetails };
