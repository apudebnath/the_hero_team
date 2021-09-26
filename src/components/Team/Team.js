import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart, } from '@fortawesome/free-solid-svg-icons'
import './Team.css';

const Team = (props) => {
    const {name, id, age, skill, position, salary, country, picture, experience} = props.programmer || {};
console.log(props.programmer)
// FontAwesome icon area
    const shopingCart = <FontAwesomeIcon icon={faShoppingCart} />
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter}/>
    const instagramIcon = <FontAwesomeIcon icon={faInstagram}/>

    return (
        // Programmer info area
        <div className="programmer-info border border-secondary">
            <img className="rounded-circle w-50 pro-img" src={picture} alt="" />
            <h4 className="title-pro">{name}</h4>
            <p className="p-0 m-0"><b>{position}</b></p>
            <p className="p-0 m-0"><b>Skill:</b> {skill}</p>
            <p className="p-0 m-0"><b>Salary:</b> {salary}</p>
            <p className="p-0 m-0"><b>Experience:</b> {experience}</p>
            <p className="p-0 m-0"><b>Country:</b> {country}; <b className="ps-3">Age:</b> {age}</p>
            <button onClick={() => props.cartHandler(props.programmer)} className="border rounded button-style mt-3">{shopingCart} Add To Cart</button>

            {/*  Social icon area */}
            <h4 className="pt-3 social-icon "><span>{facebookIcon}</span> <span className="mx-2">{instagramIcon}</span>  <span>{twitterIcon}</span> </h4>
        </div>
    );
};

export default Team;