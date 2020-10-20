import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';

import { 
  doFollowRequest, 
  // doFollowStatusRequest, 
} from '../../redux/actions/images';

const FollowStatus = ({ data }) => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);
  // const { followers } = useSelector(state => state.imagesState);
  const { userUid, username, name, ownerFollowers} = data;

  console.log('DATA: ', data);

  const handleFollow = () => dispatch(doFollowRequest({userUid, name}));

  // useEffect(() => {
  //   dispatch(doFollowStatusRequest(userUid));
  // }, [dispatch, userUid]);

  return (
    <>
      <p>[]
        by {username} 
        {userUid !== authUser.uid && 
          <span> <GroupAddSharpIcon className='icon' onClick={handleFollow} /></span>
        } 
      </p>
      <span> {ownerFollowers && ownerFollowers.length}</span>
    </>
  )
}

export default FollowStatus;
