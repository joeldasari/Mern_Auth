import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const regex = /[a-zA-Z0-9._%+-]+@gmail\.com/;
      const validEmail = regex.test(formData.email);
      if (validEmail) {
        const result = await axios.post(
          "http://localhost:5000/users/signup",
          formData
        );
        if (result.status == 201) {
          enqueueSnackbar(result.data?.message, { variant: "success" });
          setLoading(false);
          navigate("/signin");
        } else {
          enqueueSnackbar(result.data?.message, { variant: "error" });
          setLoading(false);
        }
      } else {
        enqueueSnackbar("Please Enter valid Email", { variant: "error" });
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      enqueueSnackbar(e.message, { variant: "error" });
    }
  };

  return (
    <div className="h-[90vh] w-full flex justify-center pt-10">
      <div className="flex flex-col items-center p-8 border rounded-md shadow-xl w-[400px] h-fit">
        <h1 className="text-xl font-semibold">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[350px] p-2 gap-4"
        >
          <input
            className="p-2 border-2 border-black rounded-md outline-none "
            type="text"
            id="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            required
            autoFocus
          />
          <input
            className="p-2 border-2 border-black rounded-md outline-none "
            type="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            className="p-2 border-2 border-black rounded-md outline-none "
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <button
            className={
              loading
                ? "p-2 text-white bg-black rounded-md hover:opacity-80 cursor-not-allowed"
                : "p-2 text-white bg-black rounded-md hover:opacity-80"
            }
            type="submit"
            disabled={loading && true}
          >
            {loading ? "Please wait..." : "SIGN UP"}
          </button>
          <span>
            Have an account?{" "}
            <Link to="/signin" className="text-red-500 hover:underline">
              Sign In
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
