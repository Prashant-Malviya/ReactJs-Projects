import React from "react";
import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h1 className="title">Plan With प्रशान्त</h1>
       </div>
      
      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour} key={tour.id}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
