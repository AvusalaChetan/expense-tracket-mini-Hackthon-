import { ArrowBigDownDash, ArrowBigUpDash, Banknote, History } from "lucide-react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Card from "../components/Card";
import Strip from "../components/Strip";
import {
  deleteTransaction,
  editTransaction,
} from "../features/transactionSlice";
import { getAmount } from "../helpers/getAmount";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allTransaction = useSelector(
    (state) => state.allTransactions.transactions,
  );
  const [income, expense, balance] = getAmount(allTransaction);

  const handleDelete = (transaction) => {
    dispatch(deleteTransaction(transaction));
    toast.success("transaction deleted");
  };

  // let e = useSelector((state) => state.allTransactions.editTransaction);
  const handileEdit = (transaction) => {
    dispatch(editTransaction(transaction));
    navigate("/transaction-from");
  };

  return (
    <>
      <ToastContainer />
      <div className="h-full ">
        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center justify-around gap-4">
            <Card cardName={"balance"} amount={balance} icon={<Banknote />} />
            <Card
              cardName={"expense"}
              amount={expense}
              icon={<ArrowBigDownDash />}
            />
            <Card
              cardName={"income"}
              amount={income}
              icon={<ArrowBigUpDash />}
            />
            <Card
              cardName={"total transaction"}
              amount={allTransaction.length}
              icon={<History />}
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
                  handileEdit={handileEdit}
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
