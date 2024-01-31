import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {writeOffMoney} from "../store/slice";

export const CreateModal = (props) => {
    const [hidden, setHidden] = useState(1);
    const dispatch = useDispatch();
    const addTask = () => dispatch(writeOffMoney({price: props.price}));
    if (hidden){ 
    return (
    <div className = 'modal-background'>
        <div className = "menu-container">
            <div className = 'close-container'>
                <h2 onClick = {() => {setHidden(0); props.setModal()}} className = 'close'>&times;</h2>
            </div>
            
            <div className='image-container'>
                <img src={props.url}></img>
            </div>
            <div className = 'button-container'>
                <button className = 'toOrder' onClick = {() => addTask()}>Order!</button>
            </div>
            
            <div className = 'modal-head'>
                <h2 className = 'prder-name'>{props.name}</h2>
                <h3 className = 'order-price'>{props.price}$</h3>
            </div>
            
            <p className = 'order-description'>{props.description}</p>

        </div>
    </div>
    )}
}


