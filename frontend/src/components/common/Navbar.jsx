import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-6 py-4 border-b">
      <Link to="/" className="font-bold">JobPortal</Link>
      <div className="space-x-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;