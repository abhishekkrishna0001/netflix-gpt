import React, { useEffect } from 'react';
import Header from './Header';
import { API_OPTIONS, GET_NOW_PLAYING_MOVIES } from '../utils/constants';

const Browse = () => {

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(GET_NOW_PLAYING_MOVIES, API_OPTIONS);
    const json = await data.json();
    console.log(json);
  };

  return (
    <div>
      <Header />
    </div>
  )
};

export default Browse;