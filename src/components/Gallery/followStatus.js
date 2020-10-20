import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';

import { 
  doFollowRequest, 
  doFollowStatusRequest, 
} from '../../redux/actions/images';

const FollowStatus = ({ data }) => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);
  const { followers } = useSelector(state => state.imagesState);
  const { userUid, username, name } = data;

  // console.log('USER_UID: ', name);
  // console.log('USER_UID: ', imgUserUid);
  // console.log('NAME: ', name);
  // console.log('USERNAME: ', username);
  // console.log('FOLLOWERS: ', followers);

  // console.log('AUTH_USER: ', authUser.uid);

  const handleFollow = () => dispatch(doFollowRequest(userUid));

  useEffect(() => {
    // console.log('USE_EFFECT_USER_UID: ', name);
    // console.log('USE_EFFECT_USER_UID: ', imgUserUid);
    dispatch(doFollowStatusRequest(userUid));
  }, [dispatch, userUid]);

  return (
    <>
      <p>
        by {username} 
        {userUid !== authUser.uid && 
          <span> <GroupAddSharpIcon className='icon' onClick={handleFollow} /></span>
        } 
      </p>
      <span> {followers && followers.length}</span>
    </>
  )
}

export default FollowStatus;
