import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';

import { 
  doDeleteRequest, 
  doFollowRequest, 
} from '../../redux/actions/images';
import { auth } from 'firebase';
import LikeStatus from './likeStatus';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const history = useHistory();
  const dispatch = useDispatch();
  const { likedStatus } = useSelector(state => state.imagesState);
  const { authUser } = useSelector(state => state.userState);
  const { name, url, likes } = data;

  console.log('USER_UID: ', data);

  const handleDelete = () => dispatch(doDeleteRequest(name));

  const handleFollow = userUid => dispatch(doFollowRequest(userUid));
  
  return (
    <div id='overlay'>
      <LikeStatus name={name} url={url} likes={likes} />

      <p>
        by {data.username} 
        {data.userUid !== authUser.uid &&
          <span> 
            <GroupAddSharpIcon className='icon' onClick={handleFollow} />
          </span>
        }
      </p>

      {history.location.pathname.includes('/timeline') &&
        <HighlightOffIcon className='icon' onClick={handleDelete} />} 
    </div>
  );
};

export default Overlay;
