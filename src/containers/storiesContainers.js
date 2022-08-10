import React, { useEffect, useState } from "react";
import { Story } from "../components/Story";
import { getStoryIds, getStory } from "../services/hnapi";
import {
  StoryContainerWrapper,
  GlobalStyle,
} from "../styles/storyContainerStyle";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoryContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoryContainerWrapper>
    </>
  );
};
