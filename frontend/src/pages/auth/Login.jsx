import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../api/auth.api'


const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        email: "test@test.com",
        password: "123456",
      });

      login(response.data.user);

      navigate("/dashboard/candidate");
    } catch (error) {
      console.error("Login failed", error);
    }
    
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