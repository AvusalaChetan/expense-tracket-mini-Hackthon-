import { useSelector } from "react-redux";

const Dashboard = () => {
   const user =  useSelector(state => state.Auth.currentUser)
  return <>
  <div>
    <div>
      <div className="border h-20">

      </div>
    </div>
  </div>
  </>;
};

export default Dashboard;
