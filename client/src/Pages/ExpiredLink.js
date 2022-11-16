import React from 'react';
import expiredlinksvg from '../Assets/expiredlink.svg';
import './ExpiredLink.css';

const ExpiredLink = () => {
  return (
    <div className="overflow-hidden">
      <div className="position-absolute top-50 start-50 translate-middle ">
        <div className="expiredlinksvg">
          <img className="exp" src={expiredlinksvg} />
        </div>
      </div>
    </div>
  );
};

export default ExpiredLink;
