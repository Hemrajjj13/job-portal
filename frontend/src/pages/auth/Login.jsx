import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulated backend response
    login({
      id: "123",
      name: "Hemraj",
      role: "candidate",
    });

    navigate("dashboard/candidate");
  };

  return (
    <div className='p-6'>
      <h1 className="mb-4">Login Page</h1>

      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-black text-white"
      >
        Login (mock)
      </button>
    </div>
  );
};

export default Login;