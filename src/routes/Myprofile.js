import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../styles/Myprofile.css';

const Myprofile = () => {
  const { missions } = useSelector((store) => store.missions);
  const joinedMissions = missions.filter((mission) => mission.joined);

  return (
    <div className="list-container">
      <div>
        <h4>My Missions</h4>
        <ListGroup>
          {
            joinedMissions.map((mission) => (
              <ListGroup.Item key={mission.missionID}>{mission.missionName}</ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div>
        <h4>My Rockets</h4>
        <ListGroup>
          <ListGroup.Item>Rocket 1</ListGroup.Item>
          <ListGroup.Item>Rocket 2</ListGroup.Item>
          <ListGroup.Item>Rocket 3</ListGroup.Item>
        </ListGroup>
      </div>

    </div>
  );
};

export default Myprofile;
