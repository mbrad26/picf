import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { 
  doDeleteRequest, 
} from '../../redux/actions/images';
import { auth } from 'firebase';
import LikeStatus from './likeStatus';
import FollowStatus from './followStatus';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const history = useHistory();
  const dispatch = useDispatch();
  // const { authUser } = useSelector(state => state.userState);
  const { name, url, likes, username, userUid } = data;

  // console.log('USER_UID: ', data);

  const handleDelete = () => dispatch(doDeleteRequest(name));

  return (
    <div id='overlay'>
      <LikeStatus name={name} url={url} likes={likes} uid={userUid} />
      <FollowStatus username={username} userUid={userUid} />

      {history.location.pathname.includes('/timeline') &&
        <HighlightOffIcon className='icon' onClick={handleDelete} />} 
    </div>
  );
};

export default Overlay;
