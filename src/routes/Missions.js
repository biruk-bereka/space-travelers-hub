import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { fetchMissions } from '../redux/missions/missionsSlice';
import '../styles/Missions.css';

const Missions = () => {
  const { missions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div className="table-container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join/Leave</th>
          </tr>
        </thead>
        <tbody>
          {
          missions.map((mission) => (
            <tr key={mission.missionID}>
              <td>{mission.missionName}</td>
              <td className="description">{mission.description}</td>
              <td className="align-middle text-center">Not A Member</td>
              <td className="align-middle text-center">
                <Button variant="light">Join Mission</Button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </Table>

    </div>
  );
};

export default Missions;
