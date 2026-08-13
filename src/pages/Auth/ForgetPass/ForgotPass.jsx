import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="pl-30 pt-10">
      <div>
        <h2 className="text-secondary font-bold text-3xl mt-5">
          Forgot Password
        </h2>
      </div>
      <fieldset className="fieldset border-none w-xs border">
        <legend className="fieldset-legend">
          Enter your email address and we’ll send you a reset link.
        </legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <button className="btn btn-neutral bg-accent text-secondary border-none shadow-none mt-4">
          Send
        </button>
        <p className="my-2 text-[15px] text-secondary font-semibold">
          Remember your password?{" "}
          <Link to={"/login"} className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </fieldset>
    </div>
  );
};

export default Login;
