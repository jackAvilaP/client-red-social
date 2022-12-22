import React from "react";
import { Global } from "../../helpers/Global";
import useForm from "../../hooks/useForm";

const Register = () => {
  const { form, changed } = useForm({});

  const saveRegister = async (e) => {
    e.preventDefault();
    let newUser = form;
    const request = await fetch(Global.localhost + "user/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await request.json();

    console.log(data);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
