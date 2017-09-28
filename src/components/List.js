import React from "react";
import Row from './Row';

const List = (props) => {
  return(
    <section className="row-list"> 
    { 
      props.data.map((person) => {
        return (
          <Row 
            firstName={person.first_name} 
            lastName={person.last_name} 
            avatar={person.avatar} 
            key={person.avatar}
          />
        )
      })
    }
    </section>
  )
}

export default List;