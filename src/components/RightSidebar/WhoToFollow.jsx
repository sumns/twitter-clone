import React from 'react';
import Who from './WhoToFollow.module.css'
function WhoToFollow() {
  const users = [
    { image: "https://pbs.twimg.com/profile_images/1559375475557818368/ub-ZdXDD_400x400.jpg", name: 'Chennai Super King', username: 'ChennaiIpl' },
    {
      image: " https://assets.allpngfree.com/storage/thumbnails/samajwadi-party-akhilesh-yadav-hd-photo-png-download--thumbnail-1656521917.jpg",
      name: 'Akhiles Yadav', username: 'yadavakhilesh'
    },
    { image: "https://superstarsbio.com/wp-content/uploads/2018/08/sachin-621x414.jpg", name: 'Sachin Tendulakr', username: 'sachin_rt' },
  ];

  return (
    <div>
      <div className={Who.FirstConatiner}>
        <h2>Who to follow</h2>
      </div>
      <div className={Who.userDataPart}>
        {users.map((user) => {
          return (
            <div>
              <ul>
                <img src={user.image} alt={`${user.username}`} width="20%" />
                <li>{user.name}<button>Follow</button></li>
                <li>@{user.username}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default WhoToFollow;
