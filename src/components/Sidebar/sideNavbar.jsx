import React from 'react'
import './sideNavbar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button'

import SidebarOptions from './SidebarOptions/SidebarOptions';
import TweetDialogue from './TweetDialog/TweetDialogue'
import UserLogout from './UserLogout/UserLogout'

export default function SideNavbar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false); 
  };
  return (
    <div className='sidebar'>
      <div>

        <TwitterIcon
          className='sidebar_twitterIcon'
        />


        <SidebarOptions
          Icon={HomeIcon}
          text="Home"
          path='/'
        />
        <SidebarOptions
          Icon={TagIcon}
          text="Explore"
          path='/explore'
        />
        <SidebarOptions
          Icon={NotificationsIcon}
          text="Notifications"
          path='/notifications'
        />
        <SidebarOptions
          Icon={MailIcon}
          text="Message"
          path='/message'
        />
        <SidebarOptions
          Icon={BookmarkBorderIcon}
          text="Bookmarks"
        />
        <SidebarOptions
          Icon={ContactEmergencyIcon}
          text="Twitter Blue"
          path='/twitter-blue'
        />
        <SidebarOptions
          Icon={PermIdentityIcon}
          text="Profile"
          path='/profile'
        />
        <SidebarOptions
          Icon={MoreHorizIcon}
          text="More"
        />


        {/* <button>Tweet</button> */}
        <Button className='sidebar_tweet' variant="outlined" onClick={handleClickOpen}>Tweet</Button>
        {
          open ? <TweetDialogue open={open} handleClose={handleClose} /> : ""
        }

        <UserLogout/>
 
      </div>

    </div>
  )
}

