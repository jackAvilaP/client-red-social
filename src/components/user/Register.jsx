import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveUser } from "../../app/slices/users";

import useForm from "../../hooks/useForm";

const Register = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.users);
  const { form, changed } = useForm({});

  const saveRegister = async (e) => {
    e.preventDefault();
    let newUser = form;
    dispatch(saveUser(newUser));
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={saveRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              onChange={changed}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Nick</span>
            </label>
            <input
              type="text"
              name="nick"
              placeholder="Nick"
              className="input input-bordered"
              onChange={changed}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              onChange={changed}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              onChange={changed}
            />
          </div>
          <div className="form-control mt-2">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="text-center">
        {message === "success" && (
          <h1 className="text-5xl font-bold w-60">User saved!</h1>
        )}
        {message === "Error query :(" ||
          (message === "not saved" && (
            <h1 className="text-5xl font-bold w-60">User not saved!</h1>
          ))}
        {message === "users exist" && (
          <h1 className="text-5xl font-bold w-60">The user exists!</h1>
        )}
        {message === "missing data :(" ||
          (!form && (
            <h1 className="text-5xl font-bold w-60">Please enter data</h1>
          ))}
      </div>
    </div>
  );
};

export default Register;
