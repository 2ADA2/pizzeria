import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMoney, writeOffMoney, roundBalance } from '../store/slice';
import animateBalance from '../components/animation';

export const Balance = () => {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const balance = useSelector((state) => state.manageSlice.balance);
    const increase = () => {
        const count = parseFloat(value);
        if ((count <= 0) || !count) return; 
        animateBalance(() => dispatch(addMoney({
             value: Number(parseFloat(count) || 0).toFixed(2)/100,
             order:false,
            })));
        dispatch(roundBalance());
        setValue(0);
    }

    const writeOff = () =>  {  
        const count = parseFloat(value);
        if((count <= 0) || !count) return;
        if (Number(count) > balance.toFixed(2)){
            alert('Ошибка!');
        } else{
            animateBalance(() => dispatch(writeOffMoney({ 
                value: Number(parseFloat(count) || 0).toFixed(2)/100,
                order:false,
            })));
            setValue(0);     
        }
    }

    function handleChange(e){
        const value = e.target.value;
        setValue(value);
    }

    return (
        <div className= 'balance-control-page'>
            <div>
                <input 
                className='balance-field' 
                value={value} 
                onChange={(e) => handleChange(e)}
                onFocus={() => setValue('')}
                onKeyDown={(e) => {
                    if(e.code == 'Enter'){
                        increase(e);
                        e.target.blur();
                    }
                }}
                ></input>
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

