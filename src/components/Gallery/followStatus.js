import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';

import { 
  doFollowRequest, 
  doUnfollowRequest,
  doFollowStatusRequest, 
} from '../../redux/actions/user';

const FollowStatus = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { authUser } = useSelector(state => state.userState);
  const { followers } = useSelector(state => state.userState);
  const { userUid, ownerFollowers } = data;
  const path = history.location.pathname;

  const userFollowers = path === '/home/timeline' || path === '/account/timeline'
                          ? followers 
                          : ownerFollowers;

  const handleFollow = () => dispatch(doFollowRequest(userUid));

  const handleUnfollow = () => dispatch(doUnfollowRequest(userUid));

  useEffect(() => {
    dispatch(doFollowStatusRequest());
  }, [dispatch]);

  return (
    <>
      {!['followers', 'following'].some(string => path.includes(string)) && 
        <em>
          {userUid === authUser.uid || (ownerFollowers && ownerFollowers.includes(authUser.uid))
            ? <span> <PeopleAltIcon className='icon' onClick={handleUnfollow} /></span>
            : <span> <GroupAddSharpIcon className='icon' onClick={handleFollow} /></span>
          }

          <span className='numbers'> {
              userFollowers 
                ? userFollowers.length
                : 0
            }
          </span>
        </em>
      }
    </>
  );
};

export default React.memo(FollowStatus);
