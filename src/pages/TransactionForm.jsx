import {IndianRupee} from "lucide-react";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addTransaction} from "../features/transactionSlice";
import {current} from "@reduxjs/toolkit";
import {getUserName} from "../helpers/getUserName";

const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    // formState: {errors},
    reset,
  } = useForm();

  const [transactionType, setTransactionType] = useState("");

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.Auth.currentUser);

  console.log("tForm", currentUser);

  const allTransaction = useSelector(
    (state) => state.allTransactions.transactions,
  );

  const onSubmit = (data) => {
    dispatch(addTransaction(data));
    reset();
  };

  let username = getUserName(currentUser.email);

  useEffect(() => {
    localStorage.setItem(
      `transaction_${username}`,
      JSON.stringify([...allTransaction]),
    );
  }, [allTransaction,username]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100"
    >
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Add New Transaction
      </h2>

      <div className="flex gap-4 mb-6">
        <label className="flex-1 cursor-pointer">
          <input
            type="radio"
            name="transactionType"
            value="expense"
            className="peer sr-only"
            {...register("transactionType", {required: true})}
            onChange={() => setTransactionType("expense")}
          />
          <div className="text-center py-2 px-4 rounded-lg border border-gray-200 text-gray-600 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-700 transition-all">
            Expense
          </div>
        </label>
        <label className="flex-1 cursor-pointer">
          <input
            type="radio"
            name="transactionType"
            value="income"
            className="peer sr-only"
            onClick={() => setTransactionType("income")}
            {...register("transactionType", {required: true})}
          />
          <div className="text-center py-2 px-4 rounded-lg border border-gray-200 text-gray-600 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-700 transition-all">
            Income
          </div>
        </label>
      </div>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="e.g., Groceries"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          {...register("transactionTitle", {
            required: "this field is required",
          })}
        />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <IndianRupee size={14} />
            </span>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="enter your amount"
              className="w-full pl-7 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              {...register("amount", {
                required: "this field is required",
              })}
            />
          </div>
        </div>
        <div className="flex-1">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            {...register("date", {
              required: "this field is required",
            })}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all"
          {...register("category", {
            required: "this field is required",
          })}
        >
          <option value="">Select a category</option>
          {transactionType === "expense" && (
            <option value="food">Food & Dining</option>
          )}
          {transactionType === "expense" && (
            <option value="transport">Transportation</option>
          )}
          {transactionType === "expense" && (
            <option value="utilities">Utilities</option>
          )}
          {transactionType === "expense" && (
            <option value="entertainment">Entertainment</option>
          )}
          {transactionType === "income" && (
            <option value="salary">Salary</option>
          )}
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Notes (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows="3"
          placeholder="Add any extra details here..."
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          {...register("transactionNotes")}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-slate-800 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-slate-900 transition-colors active:scale-[0.98]"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
