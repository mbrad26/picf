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
      {userUid === authUser.uid || (ownerFollowers && ownerFollowers.includes(authUser.uid))
        ? <span> <PeopleAltIcon className='icon' /></span>
        : <span> <GroupAddSharpIcon className='icon' onClick={handleFollow} /></span>
      }

      <span className='numbers'> {
          ownerFollowers 
            ? ownerFollowers.length
            : 0
        }
      </span>
    </em>
  )
}

export default FollowStatus;
