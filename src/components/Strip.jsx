import {
  IndianRupeeIcon,
  PenBoxIcon,
  Trash2
} from "lucide-react";

const Strip = ({ handleDelete, transaction}) => {
  return (
    <div className="border rounded-xl p-5 w-full ">
      <div className="flex justify-between items-end relative">
        <div>
          <p className="capitalize">{transaction?.transactionTitle}</p>
          <h2 className="text-xl font-semibold capitalize flex items-center justify-center ">
            <IndianRupeeIcon size={15} /> {transaction?.amount}
          </h2>
          <p className="text-sm text-gray-500">{transaction?.category}</p>
        </div>

        <div className=" flex h-full  flex-col">
          <span
            className={`absolute  z-30 -top-4 -right-2 border rounded-full px-3 py-1 text-[8px] font-medium uppercase
             ${transaction?.transactionType === "income" ? "bg-green-400/40  text-green-900" : "bg-red-500/30 text-red-500 "}`}
          >
            {transaction?.transactionType}
          </span>
          <div className="flex gap-4">
            <button>
              <PenBoxIcon size={24} />
            </button>
            <button onClick={() => handleDelete(transaction)}>
              <Trash2 size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strip;
