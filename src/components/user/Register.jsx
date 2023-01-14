import React, { useState } from "react";
import { Global } from "../../helpers/Global";
import useForm from "../../hooks/useForm";

const Register = () => {
  const { form, changed } = useForm({});
  const [saveUser, setSaveUser] = useState("not saved");

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
    
    setSaveUser(data.message)
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
      <div className="text-center">
        {
          saveUser === "success" &&
          <h1 className="text-5xl font-bold w-60">User saved!</h1>
        }
        {
          saveUser === "Error query :(" &&
          <h1 className="text-5xl font-bold w-60">User not saved!</h1>

        }
        {
          saveUser === "users exist" &&
          <h1 className="text-5xl font-bold w-60">The user exists!</h1>
        }
        {
          saveUser === "missing data :(" || !form &&
          <h1 className="text-5xl font-bold w-60">Please enter data</h1>
        }
      </div>
    </div>
  );

};

export default Register;
