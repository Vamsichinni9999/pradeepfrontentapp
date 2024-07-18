import React from "react";
import'./card.css'
 function Cardbody(props){
 
    return(
        
          <div className="card shadow-lg ">
          <div className="card-body bg-dark text-white rounded ">
            <img src={props.image} alt="imag" height={200} width={180} ></img><br></br><br></br>
            <h5 > {props.title}</h5>
            <h5>{props.price}</h5>
            <p>Exercitation laborum laborum mollit in non ullamco.</p>
            <p className="btn btn-warning text-dark">Place the order</p>
          </div>
        </div>
        
    );

 }
 export default Cardbody;