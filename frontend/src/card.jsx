import React from 'react';
import { Link } from 'react-router-dom';


 const Card = (props) => {
    
  return (
    <div className="card mb-3"  style={{width:1000}}>
      <img src={props.img} className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}
      </p>
        <Link to={props.path}>
              Learn More
              </Link>
      </div>
    </div>
    
  );
}


export default Card
// THE ARM BALANCES COLLECTION
