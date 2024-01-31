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

    useEffect(() => {
        container.current.style.marginLeft = '0px';
        
    }, []);
    

    
    const arrowClick = (isLeft) => {
        const width = 380 * orders.length;
        const popularWidth = popularRef.current.getBoundingClientRect().width;

        if (isLeft && (container.current.style.marginLeft < '0px')) {
            container.current.style.marginLeft = (parseInt(container.current.style.marginLeft) + popularWidth * 0.7) + 'px';
        } else if (!isLeft && parseInt(container.current.style.marginLeft) > (-width + popularWidth) ) {
            container.current.style.marginLeft = (parseInt(container.current.style.marginLeft) - popularWidth * 0.7) + 'px';
        }

        console.log(parseInt(container.current.style.marginLeft) < (-width + popularWidth));
        if (container.current.style.marginLeft >= '0px'){
            container.current.style.marginLeft = '0px'
        } else if (parseInt(container.current.style.marginLeft) < (-width + popularWidth)){
            container.current.style.marginLeft = -width + popularWidth + 'px';
            console.log(1);
        }
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