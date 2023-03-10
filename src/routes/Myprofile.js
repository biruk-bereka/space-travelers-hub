import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../styles/Myprofile.css';

const Myprofile = () => {
  const { missions } = useSelector((store) => store.missions);
  const { allRockets } = useSelector((store) => store.rockets);
  const joinedMissions = missions.filter((mission) => mission.joined);
  const reservedRockets = allRockets.filter((rocket) => rocket.reserved === true);

  let rocketContent;

  if (reservedRockets.length === 0) {
    rocketContent = <p style={{ color: 'red' }}>No reserved rocket</p>;
  } else {
    rocketContent = (
      <ListGroup>
        {
          reservedRockets.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>
          ))
        }
      </ListGroup>
    );
  }

  return (
    <div className="list-container">
      <div>
        <h4>My Missions</h4>
        {
          joinedMissions.length === 0 ? <p style={{ color: 'red' }}>No joined missions</p>

            : (
              <ListGroup>
                {
            joinedMissions.map((mission) => (
              <ListGroup.Item key={mission.missionID}>{mission.missionName}</ListGroup.Item>
            ))
          }
              </ListGroup>
            )
}
      </div>
      <div>
        <h4>My Rockets</h4>
        {rocketContent}
      </div>

    </div>
  );
};

export default Myprofile;
