import {createSlice} from '@reduxjs/toolkit';

export const manageSlice = createSlice({
    name:'manage',
    initialState:{
        userName:'ADA',
        avatarLink:'data:image/png;base64,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',
        balance : 10.00,
        inCart : [],
    },
    reducers: {
        writeOffMoney:(state, action) => {
            state.balance = state.balance - action.payload.value;
            if (action.payload.order) state.inCart = [];
        },
        addMoney:(state, action) => {
            state.balance = state.balance + action.payload.value;
        },
        roundBalance: (state, action) => {
            state.balance = Number((state.balance).toFixed(2));
        },
        setCart: (state, action) => {
            const cart = state.inCart;
            const name = action.payload.name;
            if (cart.indexOf(name)+1) {
                cart.splice(state.inCart.indexOf(name),1);
                state.inCart = cart;
            } else{
                state.inCart.push(name);
            }
        }

    }
});

export const { writeOffMoney, addMoney, roundBalance, setCart } = manageSlice.actions;

export default manageSlice.reducer;
