import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMissions } from '../redux/missions/missionsSlice';
import '../styles/Missions.css';
import Mission from '../components/Mission';

const Missions = () => {
  const { missions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  return (
    <div className="table-container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          { missions.map((mission) => (
            <Mission
              key={mission.missionID}
              id={mission.missionID}
              name={mission.missionName}
              description={mission.description}
              joined={mission.joined}
            />
          ))}
        </tbody>
      </Table>

    </div>
  );
};

export default Missions;
