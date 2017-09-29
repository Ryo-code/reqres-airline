import React from "react";

const Create = () => {
  return(
    <div>
      <h2>Create a new attendant</h2>

      <div>
        <input 
          type="text"
          placeholder="First name"
        />
        <input 
          type="text"
          placeholder="Last name"
        />
        <input 
          type="text"
          placeholder="image URL"
        />
      </div>
      <button>submit</button>
    </div>
  )
};

export default Create;