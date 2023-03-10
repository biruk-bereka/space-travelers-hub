import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../routes/Missions';
import '@testing-library/jest-dom';

jest.mock('../redux/missions/missionsSlice', () => ({
  __esModule: true,
  fetchMissions: jest.fn(),
  joinMission: jest.fn(),
  leaveMission: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Missions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            missionID: '1',
            missionName: 'Test Mission',
            description: 'A mission for testing',
            joined: false,
          },
        ],
        isLoading: false,
      },
    });
  });

  it('should render a table with missions', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(getByText('Mission')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
    expect(getByText('Test Mission')).toBeInTheDocument();
    expect(getByText('A mission for testing')).toBeInTheDocument();
  });
});
