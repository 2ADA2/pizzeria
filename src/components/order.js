import React from 'react';

function CreateOrder(order){
    const description = 
    (Array.from(Object.keys(order)).slice(-2 , -1)) 
    + ' : ' + 
    (Array.from(Object.values(order)).slice(-2, -1));
    
    return (
        <div className = 'order-container'>
            <img src = {order.url}></img>
            <h3 className = 'order-name'>{order.name}</h3>
            <div className = 'order-info'>
                <p className='order-description'>{description}</p>
                <h4 className = 'order-price'>{order.price}$</h4>
            </div>

        </div>
    )
}

export default CreateOrder