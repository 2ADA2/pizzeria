import React, {useState, useEffect} from "react";
import {setCart} from "../store/slice";
import { useDispatch } from "react-redux";

export const CreateOrder = (props) => {
    const setTotal = () => props.setTotal(order.name, price);
    const order = props.order;
    const firstPrice = order.price;
    const [value, setValue] = useState(1);
    const [price, setPrice] = useState(order.price);
    
    function handleClick(more){
        if ((value > 1) && !more)  {
            setValue(value - 1);
            setPrice(Number((value-1) * firstPrice).toFixed(2))
            
        }
        if (more && value<10)  {
            setValue(value + 1);
            setPrice(Number((value + 1) * firstPrice).toFixed(2));
        }
    }

    const dispatch = useDispatch();
    const delOrder = () => {
        dispatch(setCart({name : order.name}));
    }

    useEffect(() => {
        setTotal()
    })

    function handleChange(e) {
        let newValue = e.target.value;
        if (newValue === '') {
            setValue(0);
        } else if (!isNaN(parseInt(newValue))) {
            if (newValue > 10) newValue = 10;
            setValue(parseInt(newValue));
        }
    }

    return (
        <div className='order'>
            <img src={order.url}></img>
            <div className="order-info">
                <div className = 'order-header'>
                    <h2 className='order-name'>{order.name}</h2>
                    <h2 className='order-name cross' onClick={() => delOrder()}>&times;</h2>
                </div>
                
                <p className='order-description'>{order.definition}</p>
                <div className = 'balance-control'>
                    <div className = 'counter'>
                        <button onClick={() => handleClick(false)}>-</button>
                        <input value = {value} onChange = {(e) => handleChange(e)}></input>
                        <button onClick={() => handleClick(true)}>+</button>
                    </div>
                    <h2 className='order-price'>{price}$</h2>
                </div>

            </div>
        </div>
    )

}