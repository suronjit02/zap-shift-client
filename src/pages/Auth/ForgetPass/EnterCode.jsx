import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="pl-30 pt-10">
      <div>
        <h2 className="text-secondary font-bold text-3xl mt-5">Enter Code</h2>
      </div>

      <fieldset className="fieldset border-none w-xs border">
        <legend className="fieldset-legend">
          Enter 6 digit code that we sent in your email address.
        </legend>

        <button className="btn btn-neutral bg-accent text-secondary border-none shadow-none mt-4">
          Verify Code
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
