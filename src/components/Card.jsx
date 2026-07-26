import { IndianRupee } from "lucide-react";

const Card = ({ icon, amount, cardName }) => {
  return (
   <div className="p-4 flex flex-col gap-2 border rounded-lg w-1/4 bg-white">
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
    {icon}
  </div>
  <div>
    <p className="text-sm text-gray-500">{cardName}</p>
    <p className="text-xl font-semibold flex items-center gap-2"><IndianRupee size={18}/>{amount}</p>
  </div>
</div>
  );
};

export default Card;
