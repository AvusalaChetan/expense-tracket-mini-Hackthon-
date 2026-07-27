import { FormIcon, LayoutDashboard, LogOut, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { Form, NavLink } from "react-router";
import { logout } from "../../features/AuthSlice";

const Navbar = ({ isOpen, setIsOpen }) => {
  const navigation = [
    {
      title: "Dashboard",
      to: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      title: "transaction form",
      to: "/transaction-from",
      icon: <FormIcon size={18} />,
    },
    {
      title: "Profile",
      to: "/profile",
      icon: <User size={18} />,
    },
  ];

  const dispatch = useDispatch();

  return (
    <aside
      className={`
        fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64  bg-white border-r shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0  lg:static  lg:h-full  lg:w-64  lg:shadow-none  
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        flex  flex-col justify-between items-start p-4
      `}
    >
      <nav className="flex flex-col w-full gap-4">
        {navigation.map((item) => (
          <NavLink
            key={item.title}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center w-full  gap-3 rounded-lg px-4 py-3 transition-colors
              ${
                isActive
                  ? "bg-slate-800 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
      <button
        onClick={() => dispatch(logout())}
        className="mx-auto w-full  border px-4 py-2 capitalize bg-red-500/20 text-red-500 font-bold "
      >
        Logout
        <span>
          <LogOut size={15} className="inline-block ml-3" />
        </span>
      </button>
    </aside>
  );
};

export default Navbar;
