import React from "react";

const Row = (props) => {
  const { firstName, lastName, avatar } = props;
  return (
    <div className="row">
      <p>{firstName} {lastName}</p>
      <img 
        src={avatar} 
        alt={`${firstName} ${lastName} (pic)`}
        className="pic-small"
      />
    </div>
  );
};

export default Row;