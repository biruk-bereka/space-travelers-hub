import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Mission = ({
  id, name, description, joined,
}) => {
  const dispatch = useDispatch();
  return (
    <tr key={id}>
      <td>{name}</td>
      <td className="description">{description}</td>
      <td className="align-middle text-center">
        {joined
          ? <Badge bg="info">Active Member</Badge>
          : <Badge bg="secondary">NOT A MEMBER</Badge>}
      </td>
      <td className="align-middle text-center">
        {
            joined
              ? <Button variant="danger" onClick={() => dispatch(leaveMission(id))}>Leave Mission</Button>
              : <Button variant="success" onClick={() => dispatch(joinMission(id))}>Join Mission</Button>
        }
      </td>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};
export default Mission;
