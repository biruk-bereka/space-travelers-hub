import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rockets from '../routes/Rockets';
import '@testing-library/jest-dom';

jest.mock('../redux/rockets/rocketsSlice', () => ({
  __esModule: true,
  getRockets: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Rockets', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      rockets: {
        allRockets: [
          {
            id: 'falcon1',
            name: 'Falcon 1',
            type: 'rocket',
            description: 'A small, partially reusable launch vehicle designed by SpaceX.',
            flickrImages: ['https://imgur.com/DaCfMsj.jpg'],
            reserved: false,
          },
        ],
        status: 'succeeded',
        error: null,
      },
    });
  });
  it('should render a list with rockets', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const imgElement = screen.getByAltText('Falcon 1'); 
    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
    expect(screen.getByText('A small, partially reusable launch vehicle designed by SpaceX.')).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });
});