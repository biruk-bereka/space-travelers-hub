import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rocketsSlice';

const Myprofile = () => {
  const dispatch = useDispatch();
  const { allRockets } = useSelector((store) => store.rockets);
  const { status } = useSelector((store) => store.rockets);
  const reservedRockets = allRockets.filter((rocket) => rocket.reserved === true);

  let content;

  if (reservedRockets.length === 0) {
    content = <p>No reserved rocket</p>;
  } else {
    content = (
      <ul className="ps-0">
        {
          reservedRockets.map((rocket) => (
            <Rocket key={rocket.id} rocket={rocket} />
          ))
        }
      </ul>
    );
  }

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getRockets());
    }
  }, [status, dispatch]);

  return (
    <div className="m-4">
      <section className="container-fluid shadow p-3 mb-5 bg-body-tertiary rounded">
        <h4 className="py-3">Reserved rockets</h4>
        {content}
      </section>
    </div>
  );
};
export default Myprofile;
