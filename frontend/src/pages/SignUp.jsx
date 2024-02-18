import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-[90vh] w-full flex justify-center pt-10">
      <div className="flex flex-col items-center p-8 border rounded-md shadow-xl w-[400px] h-fit">
        <h1 className="text-xl font-semibold">Sign Up</h1>
        <form className="flex flex-col w-[350px] p-2 gap-4">
          <input
            className="p-2 border-2 border-black rounded-md outline-none "
            type="text"
            placeholder="Username"
          />
          <input
            className="p-2 border-2 border-black rounded-md outline-none "
            type="text"
            placeholder="Email"
          />
          <input
            className="p-2 border-2 border-black rounded-md outline-none "
            type="text"
            placeholder="Password"
          />
          <button
            className="p-2 text-white bg-black rounded-md hover:opacity-80"
            type="submit"
          >
            SIGN UP
          </button>
          <span>
            Have an account?{" "}
            <Link to="/signin" className="text-red-500">
              Sign In
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
