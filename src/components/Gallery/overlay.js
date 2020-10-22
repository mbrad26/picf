import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { 
  doDeleteRequest, 
} from '../../redux/actions/images';
import LikeStatus from './likeStatus';
import FollowStatus from './followStatus';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const history = useHistory();
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);
  const path = history.location.pathname;

  const handleDelete = () => dispatch(doDeleteRequest(data.name));

  return (
    <div id='overlay'>
      <p id='user'>{data.username}</p> 

      <div id='details'>
        <FollowStatus data={data} />
        <LikeStatus data={data} />

        {path === '/home/timeline' 
          ? <HighlightOffIcon className='icon' onClick={handleDelete} />
          : path === '/home' && authUser.uid === data.userUid
          ? <HighlightOffIcon className='icon' onClick={handleDelete} />
          : null
        } 
      </div>
    </div>
  );
};

export default Overlay;
