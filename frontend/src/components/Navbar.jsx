import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[10vh] w-full bg-slate-200 flex justify-between items-center px-[100px]">
      <h1 className="text-3xl font-semibold">MERN Authentication</h1>
      <div className="flex gap-8 text-lg font-medium">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/profile">
          <p>Profile</p>
        </Link>
        <Link to="/signin">
          <p>Sign In</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
