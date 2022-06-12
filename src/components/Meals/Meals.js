import React, { useEffect, useState } from 'react';
import FoodSummary from '../FoodSummary/FoodSummary';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] =useState([]);
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [])

    const selectHandler = meal => {
        const newSummary = [...summary, meal];
        setSummary(newSummary);
    }

    return (
        <div className='meals-container'>
            <div className='card-container'>
                {
                meals.map(meal => <Meal
                mealInfo = {meal}
                key = {meal.idMeal}
                handler = {selectHandler}
                ></Meal>) 
                }
            </div>
            <div className='food-summary'>
                <FoodSummary
                getSummary = {summary}
                ></FoodSummary>
            </div>
        </div>
    );
};

export default Meals;