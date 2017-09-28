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

      <Link to={`/user/${id}`}>
        <p>see profile</p>
      </Link>
    </div>
  );
};

export default Row;