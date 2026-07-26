import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "../features/AuthSlice";
import transactionReducer from "../features/transactionSlice";

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    allTransactions: transactionReducer,
  },
});
