import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Meal.css';

const Meal = (props) => {
    const {strMeal, strMealThumb, strArea, strInstructions} = props.mealInfo;
    const {handler} = props;

    return (
        <div>
            <Card className='card-single'>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <h4 className='food-title'>{strMeal}</h4>
                    <h5 className='food-origin'><small>Food Origin:</small> {strArea}</h5>
                    <Card.Text><b>Instruction: </b>
                    {strInstructions.slice(0, 150)}
                    </Card.Text>
                    <Button onClick={() => handler(strMeal)} variant="primary">Select This Food
                    <FontAwesomeIcon className='f-w-icon' icon={faUtensils}></FontAwesomeIcon>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Meal;