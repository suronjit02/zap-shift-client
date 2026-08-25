import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    console.log(data);

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-secondary font-bold text-3xl my-5">
          Create an Account
        </h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset border-none w-xs border">
          <legend className="fieldset-legend text-xl">
            Register with ZapShift
          </legend>

          {/* name */}
          <label className="label">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-600">Name is required</p>
          )}

          {/* email */}
          <label className="label">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600">Email is required</p>
          )}

          {/* password */}
          <label className="label">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">
              Password must be 6 character or longer.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must contain at least one uppercase letter, one lowercase
              letter, and one number.
            </p>
          )}

          <button className="btn btn-neutral bg-accent text-secondary border-none shadow-none mt-4">
            Register
          </button>
          <p className="my-2 text-[15px] text-secondary font-semibold">
            Already have an account?{" "}
            <Link to={"/login"} className="text-primary hover:underline">
              Login
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

export default Register;
