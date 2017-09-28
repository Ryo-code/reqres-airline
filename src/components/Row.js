import React from "react";

const Row = (props) => {
  const { firstName, lastName, avatar } = props;
  return (
    <div className="row">
      <img 
        src={avatar} 
        alt={`${firstName} ${lastName} (pic)`}
        className="pic-small"
      />
      <p>{firstName} {lastName}</p>
    </div>
  );
};

export default Row;