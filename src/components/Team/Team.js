import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Team.css';

const Team = (props) => {
    const {name, id, age, skill, position, salary, country, picture, experience} = props.programmer;
    console.log(props.programmer)
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="programmer-info border border-secondary">
            <img className="rounded-circle w-50 pro-img" src={picture} alt="" />
            <h4>{name}</h4>
            <h5>{position}</h5>
            <p><b>Skill:</b> {skill}</p>
            <p><b>Salary:</b> {salary}</p>
            <p><b>Experience:</b> {experience}</p>
            <p><b>Country:</b> {country}</p>
            <button onClick={() => props.cartHandler(props.programmer)} className="border">{element} Add To Cart</button>
        </div>
    );
};

export default Team;