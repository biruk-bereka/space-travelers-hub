import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <section>
      <div className="row">
        <div className="col-md-2"><img width="200px" height="200px" src="images/planet.png" alt="rocket" /></div>
        <div className="col-md-10">
          <h4>Title</h4>
          <p>Paragraph</p>
          <button type="button" className="btn btn-primary">Reserve Rocket</button>
        </div>
      </div>
    </section>
  );
};

export default Rockets;
