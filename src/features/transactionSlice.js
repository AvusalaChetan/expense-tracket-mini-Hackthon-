import { createSlice } from "@reduxjs/toolkit";
import { getUserName } from "../helpers/getUserName";

const user = JSON.parse(localStorage.getItem("user_session")) || null;
const username = getUserName(user?.email) || ''

const transactionState = {
  transactions:
    JSON.parse(localStorage.getItem(`transactions_${username}`)) ?? [],
};

const transactionSlice = createSlice({
  name: "allTransactions",
  initialState: transactionState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    deleteTransaction:(state,action)=>{
    state.transactions =  state.transactions.filter((t) => t.id !== action.payload.id);
     localStorage.setItem(`transactions_${username}`,JSON.stringify(state.transactions))
    }
  },
});

export const { addTransaction ,deleteTransaction} = transactionSlice.actions;

export default transactionSlice.reducer;
