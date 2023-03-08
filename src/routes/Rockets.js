import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllRockets,
  getRockets,
  getRocketsStatus,
} from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockesStatus = useSelector(getRocketsStatus);
  const rockets = useSelector(getAllRockets);
  console.log('all rockets', rockets);

  useEffect(() => {
    if (rockesStatus === 'idle') {
      dispatch(getRockets());
    }
  }, [rockesStatus, dispatch]);

  return (
    <section className="rockets">
      <ul>
        {
          rockets.map((rocket) => (
            <li key={rocket.id} className="list-group-item mb-3">
              <div className="d-flex item">
                <div className="me-3">
                  <img width="200px" height="200px" src={rocket.flickrImages[0]} alt={rocket.name} />
                </div>
                <div className="">
                  <h4>{rocket.name}</h4>
                  <p>{rocket.description}</p>
                  <button type="button" className="btn btn-primary">Reserve Rocket</button>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Rockets;
