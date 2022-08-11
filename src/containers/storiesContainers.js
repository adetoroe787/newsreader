import React, { useEffect, useState, useMemo } from "react";
import { Story } from "../components/Story";
import { getStoryIds, getStory } from "../services/hnapi";
import {
  StoryContainerWrapper,
  GlobalStyle,
} from "../styles/storyContainerStyle";

import { useInfiniteScroll } from "../hooks/useInfinitScroll";

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll()
  const [storyIds, setStoryIds] = useState([]);
  

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    console.log("count", count)
  }, [count]);

  return (
    <>
      <GlobalStyle />
      <StoryContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoryContainerWrapper>
    </>
  );
};
