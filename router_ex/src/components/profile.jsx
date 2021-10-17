import React from 'react';
import { useHistory } from 'react-router';

const Profile = (props) =>{
    const history = useHistory();
    return (
        <>
          <h1>Profile</h1>
          <button
            onClick={()=>{
                history.push('/');
            }}
          >go to Home</button>
        </>
      );
}

export default Profile;