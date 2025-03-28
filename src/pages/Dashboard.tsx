import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store";
import { logout } from "../store/authSlice";
import UserProfile from "../components/UserProfile";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="text-center font-bold text-xl">
      <p className="mb-4 mt-7">ログイン成功！</p>

      <UserProfile/>

      <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Dashboard;
