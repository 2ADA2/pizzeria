import React, {useState, useRef, useEffect} from 'react';
import CreateOrder from './order';
import orders from '../orders.json' 
import CreateOrders from './orders';

const popular = orders.popular;

function PopularSection(){
    const [orders, setOrders] = useState(popular.map((order) => {
        return <CreateOrder {...order}/>
    })); 
    const container = useRef();
    const popularRef = useRef();
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        container.current.style.marginLeft = '0px'; 
    }, []);
    
    const arrowClick = (isLeft) => {
        setContainerWidth(popularRef.current.clientWidth);
        const orderWidth = document.querySelector('.order-container').offsetWidth + 20;
        const width = -orderWidth * orders.length;
        let margin = parseInt(container.current.style.marginLeft);
        if(isLeft && (margin <= 0)){
            if (margin + containerWidth * 0.7 <= 0) {
                
                margin = ((margin + containerWidth* 0.7));
            } else{
                margin = 0;
            }  
        } else {
                margin = ((margin - (containerWidth * 0.7)) );
            if (margin <= (width + containerWidth)){
                console.log(1);
                margin = width + containerWidth;
            }
        }
        container.current.style.marginLeft = margin + 'px'
    }

    return(
        <>
        <div className='arrow left' onClick={() => arrowClick(true)}>&#10140;</div>
        <div className = 'popular-field' ref = {popularRef}>
            <div className = 'orders-container' ref = {container}>
                {orders}
            </div>
            
        </div>
            <div className='arrow' onClick={() => arrowClick(false)}>&#10140;</div>             
        </>
       
    )

}

export default PopularSection;