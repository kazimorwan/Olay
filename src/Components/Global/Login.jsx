import React, { useState } from "react";
import UserIcon from "./Icons/UserIcon";
import KeyIcon from "./Icons/KeyIcon";
import EyeIcon from "./Icons/EyeIcon";
import EyeSlashIcon from "./Icons/EyeSlashIcon";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const idPass = ["admin123", "passWORD123"];

  const togglePass = () => {
    setShowPass((prev) => !prev);
  };

  const formSubmit = (e) => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    e.preventDefault();
    if (username.value == idPass[0] && password.value == idPass[1]) {
      navigate("/user", { replace: true });
    } else {
      alert("Wrong Username/Password");
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-radial-[at_50%_25%] from-0% from-[#af0a11] to-100% to-[#4d0000] px-6 md:px-10 ">
      <form onSubmit={formSubmit} className="bg-black text-white w-full max-w-[400px] text-center rounded-3xl px-6 py-10 shadow-2xl inset-shadow-md">
        <h2 className="text-4xl mb-10 font-bold">Login</h2>
        <div className="flex items-center bg-[#120d0d] h-10 mb-5 rounded-sm">
          <div className="size-10 min-w-10 p-2 bg-[#3b3636] relative rounded-s-sm">
            <UserIcon />
          </div>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="size-full ps-4 pt-0.5 pe-0.5 border border-[#6a6969] focus:border-[#8b8b8b] border-l-0 outline-none rounded-e-sm transition"
            pattern="(?=.*\d)(?=.*[a-z]).{4,16}"
            minLength={4}
            maxLength={16}
            required
          />
        </div>
        <div className="flex items-center bg-[#120d0d] px-4 h-10 rounded-sm">
          <div className="size-10 min-w-10 p-2 bg-[#3b3636] relative -left-4 rounded-s-sm">
            <KeyIcon />
          </div>
          <input
            id="password"
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="size-full pt-0.5 pe-0.5 border-none outline-none"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // autocomplete="new-password" // For Suggest New Strong Password
            // aria-autocomplete="list"
            required
          />
          <button
            type="button"
            onClick={togglePass}
            className="size-10 min-w-10 p-2 bg-[#2d2929] relative -right-4 text-[#9b9b9b] rounded-e-sm cursor-pointer"
            title={showPass ? "Hide Password" : "Show Password"}>
            {showPass ? <EyeIcon /> : <EyeSlashIcon />}
          </button>
        </div>
        <div className="flex justify-between py-3 mt-3 underline">
          <Link to="resetPass">Forgot Password?</Link>
          <Link to="/signup">Signup</Link>
        </div>

        <div className="flex items-center justify-center gap-5 mt-5">
          <button type="button" onClick={() => navigate("/")} className="bg-black text-white border-2 px-10 py-2 cursor-pointer">
            Back
          </button>
          <button type="submit" className="bg-white hover:bg-gray-200 text-black border-2 border-white px-10 py-2 cursor-pointer transition font-medium">
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
