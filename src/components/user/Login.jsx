import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";

//Slices
import { postUser } from "../../app/slices/users";

const Login = () => {
  const { form, changed } = useForm({});
  const dispatch = useDispatch();
  const { message: loginMessage } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    let login = form;
    dispatch(postUser(login));
  };
  useEffect(() => {
    if (loginMessage === "success") {
      setTimeout(() => {
        navigate("/social");
      }, 1000)


    } else {
      navigate("/");
    }
  }, [loginMessage])

  return (
    <div className=" min-h-screen text-center bg-base-200">
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={loginUser} className="card-body">
            <div>
              {loginMessage === "success" && (
                <h1 className="text-2xl font-bold">Login successful</h1>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
