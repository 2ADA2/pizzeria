import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from "../store/slice";

export const CreateModal = (props) => {
    const [added, setAdded] = useState((useSelector(state => state.manageSlice.inCart)).indexOf(props.name) +1)
    const [hidden, setHidden] = useState(true);
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(setCart({name : props.name}));
        setAdded(!added);
    }
    if (hidden){ 
    return (
    <div className = 'modal-background'>
        <div className = "menu-container">
            <div className = 'close-container'>
                <h2 onClick = {() => {setHidden(false); props.setModal()}} className = 'close'>&times;</h2>
            </div>
            
            <div className='image-container'>
                <img src={props.url}></img>
            </div>
            <div className = 'button-container'>
                <button 
                className={(added) ? 'added' : ''}
                onClick = {() => addTask()}
                >{(added) ? 'remove from cart' : 'add to cart'}</button>
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


