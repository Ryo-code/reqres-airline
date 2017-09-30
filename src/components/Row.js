import React from "react";
import { Link } from 'react-router-dom';

const Row = (props) => {
  const { first_name, last_name, avatar, id } = props.person;
  return (
    <div className="row" key={id}>
      <img 
        src={avatar} 
        alt={`${first_name} ${last_name} (pic)`}
        className="pic-small"
      />

      <p>{first_name} {last_name}</p>

      <Link to={`/users/${id}`}>
        <img 
          alt="Go to profile page"
          className="pic-small"
          src="https://png.icons8.com/forward-button/win10/1600"
        />
      </Link>
    </div>
  );
};

export default Row;