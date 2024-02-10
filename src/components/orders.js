import { useState, useEffect} from 'react';
import { useResize } from './useResize';
import allOrders from '../orders.json';
import CreateOrder from './order';

const orders = allOrders.pizzas

const CreateOrders = () => {
    const [orderList, setOrderList] = useState(orders.map((order) => {
        return <CreateOrder {...order} />
    }));
    const [page, setPage] = useState(0);
    const [value, setValue] = useState(2);

    function checkWidth(){
        if ((window.innerWidth > 1500) && (value === 2)) setValue(3);
        if ((window.innerWidth < 1500) && (value === 3)) setValue(2);
        if (Math.ceil(orders.length / value) < (page+1)) setPage(0);
    }

    useEffect(() => {
        checkWidth();
    }, []);

    useResize(() => checkWidth())

    async function changePage(page){
        setPage(page);
    }

    function CreatePages(){
        const pages = [];
        
        for (let i = 0; i < Math.ceil(orders.length/value); i++){
            pages.push(<button className={(i === page) ? 'set-page choosen' : 'set-page'} onClick = {() => changePage(i)} >{i+1}</button>)
        }
        return pages;
    }

    return (
        <div className = 'orders-container'>
            <div className = 'orders-container-container'>
                {
                    orderList.slice(page*value,page*value+value)
                }                
            </div>

            <div className = 'pages'>
                <CreatePages/>
            </div>
        </div>
    )
}

export default CreateOrders;