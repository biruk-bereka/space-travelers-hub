import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import missionsReducer from './missions/missionsSlice';

const logger = createLogger({
  collapsed: true,
});

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});

export default store;
