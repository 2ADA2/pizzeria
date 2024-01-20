import React, {useState, useRef, useEffect} from 'react';
import CreateOrder from './order';
import orders from '../orders.json' 

const popular = orders.popular;

function PopularSection(){
    const [orders, setOrders] = useState(popular.map((order) => {
        return <CreateOrder {...order}/>
    })); 

    const container = useRef();
    useEffect(() => {
        container.current.style.marginLeft = '0px';
        

    }, []);
    

    
    const arrowClick = (isLeft) => {
        if (isLeft && (container.current.style.marginLeft != '0px')){
            container.current.style.marginLeft = (parseInt(container.current.style.marginLeft) + 380*2) + 'px';
            return;
        }
        else if (!isLeft && (parseInt(container.current.style.marginLeft) > -380 * (orders.length-2))){
            container.current.style.marginLeft = (parseInt(container.current.style.marginLeft) - 380 * 2) + 'px';
            return;
        }
    }

    return(
        <>
        <div className='arrow left' onClick={() => arrowClick(true)}>&#10140;</div>
        <div className = 'popular-field'>
            <div className = 'orders-container' ref = {container}>
                {orders}
            </div>
            
        </div>
            <div className='arrow' onClick={() => arrowClick(false)}>&#10140;</div>             
        </>
       
    )

}

export default PopularSection;