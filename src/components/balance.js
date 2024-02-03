import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMoney, writeOffMoney, roundBalance } from '../store/slice';
import animateBalance from '../components/animation';

export const Balance = () => {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const balance = useSelector((state) => state.manageSlice.balance);
    const increase = () => {
        animateBalance(() => dispatch(addMoney({
             value: value.toFixed(2)/100,
             order:false,
            })));
        dispatch(roundBalance());
        setValue(0);
    }

    const writeOff = () => {
        dispatch(roundBalance());        
        if (value > balance.toFixed(2)){
            alert('Ошибка!');
        } else{
            animateBalance(() => dispatch(writeOffMoney({ 
                value: value.toFixed(2) /100,
                order:false,
            })));
            setValue(0);     
        }

    }

    function handleChange(e){
        const newValue = e.target.value;
        if (newValue === '') {
            setValue('');
        } else if (!isNaN(parseInt(newValue))){
            setValue(parseInt(newValue));
        }
    }

    return (
        <div className = 'balance-control'>
            <div>
                <input className='balance-field' value={value} onChange={(e) => handleChange(e)}></input>
                <div className = 'control-panel'>
                    <button className="button add" onClick={() => increase()}>add</button>
                    <button className="button subtract" onClick={() => writeOff()}>subtract</button>
                    <button className="button clear" onClick = {() => setValue(0)}>clear</button>                    
                </div>
            </div>
            <div className = 'balance'>Now your balance is: {(balance).toFixed(2)}$</div>
        </div>
    )
}

