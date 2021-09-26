import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
import { library } from '@fortawesome/fontawesome-svg-core';

const Cart = (props) => {
const{programmerInfos} = props ||{};

const user = <FontAwesomeIcon icon={faUser} />



    let total = 0;
    for(const programmerInfo of programmerInfos){
        total = total + programmerInfo.salary;
    }

    return (
        <div className="cart-container">
            <h4>{user} Programmer added: {props.programmerInfos.length}</h4>
            <h5 className="pt-3">Total cost: {total} $</h5>
            <br />
            <ul className="list-style">
                {
                    programmerInfos.map(programmerInfo => <li ><div className="d-flex align-items-center p-3">
                    <img className="w-25 rounded-circle me-3" src={programmerInfo.picture} alt="" />
                    <h4>{programmerInfo.name}</h4>
                </div></li> )
                }
                    
            </ul>
            <br />
            <div className=" col-4 mx-auto ">
                <button className="border rounded px-3 py-1 by-button">By Now</button>
            </div>
        </div>
    );
};

export default Cart;