import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';

import { 
  doFollowRequest, 
} from '../../redux/actions/images';

const FollowStatus = ({ data }) => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);
  const { userUid, name, ownerFollowers} = data;

  const handleFollow = () => dispatch(doFollowRequest({userUid, name}));

  return (
    <em>
      {userUid !== authUser.uid 
        ? <span> <GroupAddSharpIcon className='icon' onClick={handleFollow} /></span>
        : <span> <PeopleAltIcon className='icon' /></span>
      } 

      <span> {ownerFollowers && ownerFollowers.length}</span>
    </em>
  )
}

export default FollowStatus;
