import {NavLink} from "react-router";
import {LayoutDashboard, User} from "lucide-react";

const Navbar = ({isOpen, setIsOpen}) => {
  const navigation = [
    {
      title: "Dashboard",
      to: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      title: "transaction form",
      to: "/transaction-from",
      icon: <LayoutDashboard size={18} />,
    },
    {
      title: "Profile",
      to: "/profile",
      icon: <User size={18} />,
    },
  ];

  return (
    <aside
      className={`
        fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64  bg-white border-r shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0  lg:static  lg:h-full  lg:w-64  lg:shadow-none  lg:flex-shrink-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <nav className="flex flex-col p-4 gap-2">
        {navigation.map((item) => (
          <NavLink
            key={item.title}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className={({isActive}) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors
              ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Navbar;
