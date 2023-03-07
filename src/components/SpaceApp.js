import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Rockets from '../routes/Rockets';
import Missions from '../routes/Missions';
import Myprofile from '../routes/Myprofile';

const SpaceApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myprofile" element={<Myprofile />} />
    </Route>
  </Routes>
);

export default SpaceApp;
