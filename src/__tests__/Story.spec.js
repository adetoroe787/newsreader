import React from "react";
import { act } from "react-dom/test-utils";
import { render, cleanup, waitFor } from "@testing-library/react";
import { storyIds, singularStory } from "../fixtures/index";
import { getStory, getStoryIds } from "../services/hnapi";
import { useInfiniteScroll } from "../hooks/useInfinitScroll";
import { STORY_INCREEMENT } from "../constants";
import { StoriesContainer } from "../containers/storiesContainers";
import { Story } from "../components/Story";

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock("../services/hnapi", () => ({
  getStory: jest.fn(),
}));

test("renders the component with contents", async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory));

  const { getByText, getByTestId } = render(<Story storyId="1" />);
  await waitFor(() => [
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('story')).toBeTruthy(),
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Twitter Deal: Elon back out")).toBeTruthy(),
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("story-by").textContent).toEqual(
      "By: Ezekiel Adetoro"
    ),
  ]);
});
