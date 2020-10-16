import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';

import { 
  doAddLikeRequest, 
  doDeleteRequest, 
  doFollowRequest, 
  doLikeStatusRequest, 
  doUnlikeRequest, 
} from '../../redux/actions/images';
import { auth } from 'firebase';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const history = useHistory();
  const dispatch = useDispatch();
  const { likedStatus } = useSelector(state => state.imagesState);
  const { authUser } = useSelector(state => state.userState);
  const { name, url } = data;

  console.log('USER_UID: ', authUser);

  const handleLike = () => dispatch(doAddLikeRequest({ url, name }));

  const handleUnlike = () => dispatch(doUnlikeRequest(name));

  const handleDelete = () => dispatch(doDeleteRequest(name));

  const handleFollow = userUid => dispatch(doFollowRequest(userUid));
  
  useEffect(() => {
    dispatch(doLikeStatusRequest());
  }, [dispatch]);

  return (
    <div id='overlay'>
      {likedStatus && likedStatus.includes(name)
        ? <FavoriteTwoToneIcon className='icon' onClick={handleUnlike} />
        : <FavoriteBorderTwoToneIcon className='icon' onClick={handleLike} />
      } 
      <span> {data.likes && data.likes.length}</span>

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
