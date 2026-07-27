import {useState} from "react";
import {Outlet} from "react-router";
import {Menu, X} from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="h-16 border-b bg-white flex items-center justify-between px-4 shadow-sm">
        <h2 className="text-xl font-semibold">Expense Tracker</h2>

        <button
          className="lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
     
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>

     <Footer/>
    </div>
  );
};

export default MainLayout;
