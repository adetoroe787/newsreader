import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup, waitFor } from '@testing-library/react';
import { storyIds, singularStory } from '../fixtures/index'
import { getStory, getStoryIds } from '../services/hnapi';
import { useInfiniteScroll } from '../hooks/useInfinitScroll';
import { STORY_INCREEMENT } from '../constants';
import { StoriesContainer } from '../containers/storiesContainers';

beforeEach(cleanup);

jest.mock('../hooks/useInfinitScroll.js');
jest.mock('../services/hnapi', () => ({
    getStory: jest.fn(),
    getStoryIds: jest.fn(),
}));

test('renders the application', async () => {
    useInfiniteScroll.mockImplementation(() => ({
        count: STORY_INCREEMENT,
    }));
    getStory.mockImplementation(()=> Promise.resolve(singularStory));
    getStoryIds.mockImplementation(()=>Promise.resolve(storyIds));

    const { getByText, queryByTestId } = render(<StoriesContainer />);
    await waitFor(()=> [
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText('Hacker News Stories')).toBeTruthy(),
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText('Twitter Deal: Elon back out')).toBeTruthy(),
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(queryByTestId('story-by').textContent).toEqual('By: Ezekiel Adetoro'),
    ]);
});