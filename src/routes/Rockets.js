import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsObj } from '../redux/rockets/rocketsSlice';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsArr = useSelector(getRocketsObj);
  const rockets = rocketsArr.allRockets;
  const rockesStatus = rocketsArr.status;
  console.log('all rockets', rockets);

  useEffect(() => {
    if (rockesStatus === 'idle') {
      dispatch(getRocketsObj());
    }
  }, [rockesStatus, dispatch]);

  return (
    <section className="rockets">
      <ul>
        {
          rockets.map((rocket) => (
            <Rocket key={rocket.id} rocket={rocket} />
          ))
        }
      </ul>
    </section>
  );
};

export default Rockets;
