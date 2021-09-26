import React from 'react';
import './Cart.css';

const Cart = (props) => {
const{programmerInfos} = props;
    console.log(props.programmerInfos);
    let name = '';
    let picture = '';
    let total = 0;
    
    for(const programmerInfo of programmerInfos){
        name = programmerInfo.name
        picture = programmerInfo.picture;
        total = total + programmerInfo.salary;
        console.log(programmerInfo.salary);
        console.log(total);
    }
    //const totalCost = total + parseInt(phone);
    return (
        <div className="cart-container">
            <h4>Programmer added: {props.programmerInfos.length}</h4>
            <h5>Total cost: {total}</h5>
            <br />
            <div className="d-flex align-items-center">
                <img className="w-25 rounded-circle me-3" src={picture} alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Cart;