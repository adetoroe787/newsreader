import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnapi";

export const Story = ({ storyId }) => {
  useEffect(() => {}, []);

  return <p>I am a Story { storyId }</p>;
};
