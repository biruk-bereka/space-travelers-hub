import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const { allRockets, status } = useSelector((store) => store.rockets);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getRockets());
    }
  }, [status, dispatch]);

  return (
    <section className="rockets">
      <ul>
        {
          allRockets.map((rocket) => (
            <Rocket key={rocket.id} rocket={rocket} />
          ))
        }
      </ul>
    </section>
  );
};

export default Rockets;
