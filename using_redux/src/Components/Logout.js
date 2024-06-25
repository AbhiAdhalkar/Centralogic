import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Welcome <span className='user_name'>{user?.name}</span></h1>
      <button className='Logout_button' onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Logout;
