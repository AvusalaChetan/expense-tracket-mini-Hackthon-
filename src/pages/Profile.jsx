import { Hand, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../helpers/getUserName";
import { logout } from "../features/AuthSlice";
const Profile = () => {
  let user = useSelector((state) => state.Auth.currentUser);
  let username = getUserName(user.email);
  const dispatch = useDispatch()
  return (
    <>
      <div className="h-full ">
        <div className="p-4 flex flex-col gap-4">
          <div className="h-[70%] border shadow-lg p-4 flex flex-col items-start gap-4  ">
            <p className="flex items-center gap-4 capitalize ">
              hello, <Hand />
            </p>
            <div className="flex items-center gap-4">
              <span
                className="h-10 w-10 border rounded-full flex items-center justify-center 
              
              "
              >
                {username.charAt(0).toUpperCase()}
              </span>
              <h3 className=" font-bold capitalize text-xl ">{username}</h3>
            </div>
            <button 
            onClick={()=> dispatch(logout())}
            className=" border px-4 py-2 capitalize bg-red-500/20 text-red-500 font-bold rounded-xl">
              Logout
              <span>
                <LogOut size={15} className="inline-block ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
