import React from 'react';
import UserOutputStyle from './UserOutput.css'; // eslint-disable-next-line

const userOutput = (props) => {
  return (
    <div className="UserOutputStyle">
        <p>Hi, my name is {props.userName}</p>
    </div>
  );
};

export default userOutput;