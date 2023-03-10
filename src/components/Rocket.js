import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cancelReserveRocket, reserveRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  let button;
  let reserveEtiquette = '';
  if (rocket.reserved) {
    button = (
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => dispatch(cancelReserveRocket(rocket.id))}
      >
        Cancel Reservation
      </button>
    );
    reserveEtiquette = <span className="badge text-bg-primary">Reserved</span>;
  } else {
    button = (
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(reserveRocket(rocket.id))}
      >
        Reserve Rocket
      </button>
    );
  }

  return (
    <li className="list-group-item mb-3">
      <div className="d-flex item">
        <div className="me-3">
          <img width="200px" height="200px" src={rocket.flickrImages[0]} alt={rocket.name} />
        </div>
        <div className="">
          <h4>{rocket.name}</h4>
          <p>
            {reserveEtiquette}
            {rocket.description}
          </p>
          {button}
          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(reserveRocket(rocket.id))}
          >
            Reserve Rocket
          </button> */}
        </div>
      </div>
    </li>
  );
};

Rocket.defaultProps = {
  rocket: null,
};
Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object),
};
export default Rocket;
