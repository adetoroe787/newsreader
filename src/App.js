import React, { useEffect, useState } from 'react';
import { getStoryIds } from './services/hnapi';

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect (() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);


  return (
    <h1>{JSON.stringify(storyIds)}</h1>
  )
}


