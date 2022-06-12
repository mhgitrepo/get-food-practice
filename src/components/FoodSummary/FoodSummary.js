import React from 'react';
import './FoodSummary.css';

const FoodSummary = ({getSummary}) => {
    return (
        <div className='summary'>
            <h2>Food Summary</h2>
            {/* <p>Food Item Name: {getSummary}</p> */}
            <ul>
               {
                 getSummary.map(foodName => <li key = {foodName} className='food-summary'>{foodName}</li>)
               }
            </ul>
        </div>
    );
};

export default FoodSummary;