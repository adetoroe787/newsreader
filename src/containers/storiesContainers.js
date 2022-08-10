import React, { useEffect, useState } from "react";
import { getStoryIds, getStory } from "../services/hnapi";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    getStory(32407230).then(data => console.log(data))
  }, []);

  return <h1>{storyIds}</h1>;
};
