import {useState, useEffect} from "react";
import {setCart} from "../store/slice";
import { useDispatch } from "react-redux";

export const CreateOrder = (props) => {
    const setTotal = () => props.setTotal(order.name, price);
    const order = props.order;
    const firstPrice = order.price;
    const [value, setValue] = useState(1);
    const [inputValue, setInputValue] = useState(value);
    const [price, setPrice] = useState(order.price);
    
    function handleClick(more){
        if ((value > 1) && !more)  {
            setValue(value - 1);
            setPrice(Number((value-1) * firstPrice).toFixed(2));
            setInputValue(value - 1);
        }
        if (more && value<10)  {
            setValue(value + 1);
            setPrice(Number((value + 1) * firstPrice).toFixed(2));
            setInputValue(value + 1);
        }
    }

    const dispatch = useDispatch();
    const delOrder = () => {
        dispatch(setCart({name : order.name}));
    }

    useEffect(() => {
        setTotal();
    })

    function handleInput(e) {
        let newValue = e.target.value || 1;
        if (newValue === '') {
            setValue(1);
        } else if (!isNaN(parseInt(newValue))) {
            if (newValue > 10) newValue = 10;
            if (newValue < 1) newValue = 1;
            setValue(parseInt(newValue));
            setPrice(Number(newValue * firstPrice).toFixed(2));
        }
        setInputValue(newValue);
    }

    function handleChange(e){
        const newValue = e.target.value;
        setInputValue(parseInt(newValue) || '');
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
                        <input 
                        onBlur={(e) => handleInput(e)} 
                        value={inputValue} 
                        onChange={(e) => handleChange(e)}
                        onKeyDown={(e) => { 
                            if (e.code == 'Enter') {
                                console.log(e.code)
                                handleChange(e);
                                e.target.blur();
                                }
                            }}
                        ></input>
                        <button onClick={() => handleClick(true)}>+</button>
                    </div>
                    <h2 className='order-price'>{price}$</h2>
                </div>

            </div>
        </div>
    )

}