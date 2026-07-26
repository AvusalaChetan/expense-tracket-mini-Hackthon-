import { Banknote } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Strip from "../components/Strip";
import { getAmount } from "../helpers/getAmount";
import { deleteTransaction } from "../features/transactionSlice";
import { nanoid } from "nanoid";
import { toast, ToastContainer } from "react-toastify";

const Dashboard = () => {
  const dispatch = useDispatch();
  const allTransaction = useSelector(
    (state) => state.allTransactions.transactions,
  );
  const [income, expense, balance] = getAmount(allTransaction);

  const handleDelete = (transaction) => {
   dispatch(deleteTransaction(transaction))
   toast.success('transaction deleted')
  };

  return (
    <>
    <ToastContainer/>
      <div className="h-full ">
        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center justify-around gap-4">
            <Card cardName={"balance"} amount={balance} icon={<Banknote />} />
            <Card cardName={"expense"} amount={expense} icon={<Banknote />} />
            <Card cardName={"income"} amount={income} icon={<Banknote />} />
            <Card
              cardName={"total transaction"}
              amount={allTransaction.length}
              icon={<Banknote />}
            />
          </div>

          <div className="h-[70%]">
            <h3 className=" font-bold capitalize text-xl ">all Transactions</h3>
            <div className="scrip-Con   mt-4">
              {allTransaction.map((transaction) => (
                <Strip
                  transaction={transaction}
                  key={nanoid()}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
