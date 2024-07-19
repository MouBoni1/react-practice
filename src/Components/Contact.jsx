import React from 'react'




const Contact = (props) => {
 

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>phone:{props.phone}</h2>
      <h3>{props.address}</h3>
     
    </div>
    
  )
};


export default Contact;