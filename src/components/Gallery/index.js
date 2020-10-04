import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doUrlRequest } from '../../redux/actions/images';
import { 
  GridList, 
  GridListTile, 
  makeStyles,
} from '@material-ui/core';

const INITIAL_STATE = {
  urls: null,
  error: null,
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 700,
    height: 650,
  },
}));

const Gallery = () => {
  console.log('GALLERY: ');
  const classes = useStyles();
  const dispatch = useDispatch();
  const { imagesUrls } = useSelector(state => state.imagesState);
  const [state, setState] = useState(INITIAL_STATE);
  const { urls } = state;

  useEffect(() =>  {
    dispatch(doUrlRequest());
  }, [dispatch]);

  useEffect(() =>  {
    if(imagesUrls) {
      setState(state => ({ ...state, urls: imagesUrls }))
    }
  }, [imagesUrls]);

  return (
    <div>
      Gallery

      <div className={classes.root}>
        <GridList cellHeight={360} className={classes.gridList} cols={9}>
          {urls && urls.map(data => 
            <GridListTile key={data.url} cols={4}>
              <img src={data.url} alt={data.url} />
            </GridListTile>
          )}
        </GridList>
      </div>

    </div>
  );
};

export default Gallery;
