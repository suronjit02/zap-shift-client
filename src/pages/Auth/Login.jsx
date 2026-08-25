import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();

  // login function
  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pl-30 pt-10">
      <div>
        <h2 className="text-secondary font-bold text-3xl my-5">Welcome Back</h2>
      </div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset border-none w-xs border">
          <legend className="fieldset-legend text-xl">
            Login with ZapShift
          </legend>

          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600">email is required.</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">password is required</p>
          )}

          <Link
            to={"/password-reset"}
            className="text-secondary hover:underline"
          >
            Forgot Password?
          </Link>

          <button className="btn btn-neutral bg-accent text-secondary border-none shadow-none mt-4">
            Login
          </button>
          <p className="my-2 text-[15px] text-secondary font-semibold">
            Don't have any account?{" "}
            <Link to={"/register"} className="text-primary hover:underline">
              Register
            </Link>
          </p>
        </fieldset>
      </form>
      <p className="text-center text-lg text-secondary-content">or</p>

      {/* social login: Google */}
      <div className="w-xs">
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
