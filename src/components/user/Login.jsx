import React from "react";
import { Global } from "../../helpers/Global";
import useForm from "../../hooks/useForm";

const Login = () => {
  const { form, changed } = useForm({});

  const loginUser = async (e) => {
    e.preventDefault();
    let login = form;

    const request = await fetch(Global.localhost + "user/login",{
      method:"POST",
      body:JSON.stringify(login),
      headers:{
        "content-type":"application/json"
      }
    })
    const data = await request.json();
    console.log(data);
  }

  return (
    <div className="min-h-screen text-center bg-base-200">

      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={loginUser} className="card-body">

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
