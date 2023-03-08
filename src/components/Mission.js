import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';

const Mission = ({ id, name, description }) => {
  const dispatch = useDispatch();
  return (
    <tr key={id}>
      <td>{name}</td>
      <td className="description">{description}</td>
      <td className="align-middle text-center">Not A Member</td>
      <td className="align-middle text-center">
        <Button variant="light" onClick={() => dispatch(joinMission(id))}>Join Mission</Button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Mission;
