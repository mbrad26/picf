import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';

import { 
  doFollowRequest, 
  doFollowStatusRequest, 
} from '../../redux/actions/images';

const FollowStatus = ({ name, username, userUid }) => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);
  const { followers } = useSelector(state => state.imagesState);

  console.log('USER_UID: ', userUid);
  console.log('NAME: ', name);
  console.log('USERNAME: ', username);

  console.log('AUTH_USER: ', authUser.uid);

  const handleFollow = () => dispatch(doFollowRequest(userUid));

  useEffect(() => {
    dispatch(doFollowStatusRequest(userUid));
  }, [dispatch, userUid]);

  return (
    <>
      <p>
        by {username} 
        {userUid !== authUser.uid && 
          <span> <GroupAddSharpIcon className='icon' onClick={handleFollow} /></span>
        } {
          <span> {followers && followers.length}</span>
        }
      </p>
    </>
  )
}

export default FollowStatus;
