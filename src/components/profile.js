import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {setName, setUrl} from '../store/slice';

export const Profile = () => {
    const state = useSelector(state => state.manageSlice);
    const [userName, setUserName] = useState(state.userName);
    const [link, setLink] = useState(state.avatarLink);
    const dispatch = useDispatch();

    function handleInput(value, set, limit = false){
        if(((value.length > 15) || (value.length < 3)) & limit) {
            alert(value);
            setUserName(state.userName);
            return;
        }
        dispatch(set({value:value}))
    }

    return (
        <div className = 'profile-container'>
            <div className ='control-panel'>
                <div className = 'input-container input-name'>
                    <span>name:</span>
                    <input 
                    className = 'change-name' 
                    value = {userName}
                    onChange = {(e) => setUserName(e.target.value)}
                    onBlur={() => handleInput(userName, setName, true)}
                    onKeyDown={(e) => {
                        if (e.code == 'Enter'){
                            handleInput(userName, setName, true);
                        }
                    }}
                    ></input>                    
                </div>
                
                <div className="input-container ">
                    <span>avatar-url:</span>
                    <textarea 
                    className = 'change-avatar'
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    onBlur={() => handleInput(link, setUrl)}
                    onKeyDown={(e) => {
                        if (e.code == 'Enter') {
                            handleInput(link, setUrl);
                            e.target.blur();
                        }
                    }}
                    ></textarea>                    
                </div>
            </div>
            <div className = 'user-info'>
                <img src = {state.avatarLink}></img>
                <h2>{state.userName}</h2>
                <h2>balance: {state.balance.toFixed(2)}$</h2>
            </div>

            
        </div>
    )
}


