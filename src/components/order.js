import React, {useState} from 'react';
import { CreateModal } from './modal';

function CreateOrder(order){
    let description = (order.description || order.ingredients);
    if (order.description) {
        const oldDescription = description;
        description = [];
        for (let i in oldDescription){
            description.push(<p className= 'order-description bigger-description'>{`${i} : ${oldDescription[i]}`}</p>);
        }
    } else {
        description = 'ingredients: ' + description.slice(' ').join(', ');
    }

    const [modal, setModal] = useState(0);

    return (
        <>
            <div 
            className = 'order-container' 
            onClick = {() => setModal(1)}
            >
                <div className = 'image-container'>
                    <img src = {order.url}></img>
                </div>
                <h3 className = 'order-name'>{order.name}</h3>
                <div className = 'order-info'>
                    <p className = 'order-description'>{Array.from(description) || 1}</p>
                    <h4 className = 'order-price'>{order.price}$</h4>
                </div>
                 
            </div>            
        {(modal) ? <CreateModal setModal = {() => setModal(0)} {...order} description = {description}/> : <></>}
        
        </>

    )
}

export default CreateOrder