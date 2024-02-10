import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {order} from '../store/slice';
import orders from '../orders.json';
import { CreateOrder } from "./orderInCart";

function findOrder(name){
    let order;
    for (let elem in orders){      
        orders[elem].forEach(elem => {
            if (elem.name == name) {
                order = elem;
            }
        });

    } 
    

    let description = (order.description || order.ingredients);
    if (order.description) {
        const oldDescription = description;
        description = [];
        for (let i in oldDescription) {
            description.push(<p className='order-description bigger-description'>{`${i} : ${oldDescription[i]}`}</p>);
        }
    } else {
        description = 'ingredients: ' + description.slice(' ').join(', ');
    }

    order.definition = description;
    return order;
}


export const OrdersPage = () => {
    let orders = useSelector(state => state.manageSlice.inCart);
    let total = {}
    const [sum, setSum] = useState(0);

    const dispatch = useDispatch();
    const balance = useSelector(state => state.manageSlice.balance);

    const setTotal = (name, value) => {
        total[name] = Number(value).toFixed(2);
        calcTotal()
    }

    function calcTotal(){
        let sum = 0;
        for (let elem in total){
            sum += Number(total[elem]);
        }
        setSum(Number(sum).toFixed(2));
    }

    function toOrder(){
        if (balance > sum) {
            console.log(1);
            dispatch(order({price:sum}));
            total = {}
        }
        
    }

    if (!orders.length) {
        return( 
        <>
            <div className='empty'>cart is empty</div>
            <div className='total'>total: {0}$</div>  
        </>
        )
    }

    return (
        <div className = 'orderPage'>
        {
            orders = orders.map(name => {
            const order = findOrder(name);

                return <CreateOrder order={order} setTotal = {(name, value) => setTotal(name, value)}/>
        })   
       }    
            <div className = 'total'>total: {sum}$</div>

            <div className = 'button-container'>
                <button className = 'toOrder' onClick = {() => toOrder()}>Order!</button>      
            </div>
            
        </div>
    )
}
