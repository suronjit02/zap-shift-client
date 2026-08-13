import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="pl-30 pt-10">
      <div>
        <h2 className="text-secondary font-bold text-3xl mt-5">
          Reset Password
        </h2>
      </div>
      <fieldset className="fieldset border-none w-xs border">
        <legend className="fieldset-legend">Enter your password.</legend>

        <label className="label">New Password</label>
        <input type="password" className="input" placeholder="Password" />

        <label className="label">Confirm Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral bg-accent text-secondary border-none shadow-none mt-4">
          Reset Password
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
