import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';

import { 
  doFollowRequest, 
} from '../../redux/actions/images';

const FollowStatus = ({ username, userUid }) => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);

  const handleFollow = () => dispatch(doFollowRequest(userUid));

  return (
    <>
      <p>
        by {username} 
        {userUid !== authUser.uid && 
          <span> <GroupAddSharpIcon className='icon' onClick={handleFollow} /></span>
        }
      </p>
    </>
  )
}

export default FollowStatus;
