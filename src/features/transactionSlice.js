import {createSlice} from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user_session"));


const transactionState = {
  transactions:JSON.parse(localStorage.getItem(`transactions_${user?.username}`)) ?? [],
};

const transactionSlice = createSlice({
  name: "allTransactions",
  initialState: transactionState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
  },
});

export const {addTransaction} = transactionSlice.actions;

export default transactionSlice.reducer;
