import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Slices
import { getUser, updateUser, uploadFile } from "../../app/slices/users";

import userImg from "../../assets/img/user.png";
import { Global } from "../../helpers/Global";
import { SerializeForm } from "../../helpers/SerializeForm";

const Setting = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const userUpdate = async (e) => {
    e.preventDefault();

    let newData = SerializeForm(e.target);
    let newFile = new FormData();

    let data = newData;

    data["image"] = "default.png";

    const fileInput = document.querySelector("#file");

    newFile.append("file0", fileInput.files[0]);

    //upload image
    fileInput.files[0] && dispatch(uploadFile(newFile));
    dispatch(updateUser(data));
  };

  return (
    <div className="mt-14 max-w-lg flex flex-col justify-center">
      <section className="header-info">
        <div className="header-title">
          <h1 className="text-5xl font-bold">Setting</h1>
        </div>
      </section>
      <div className="card mt-3">
        <section className="card-body">
          <form className="card-body" onSubmit={userUpdate}>
            <div className="form-control">
              <label className="label">
                <span className="card-title">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                defaultValue={user.name}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="card-title">Nick</span>
              </label>
              <input
                type="text"
                name="nick"
                placeholder="Nick"
                className="input input-bordered"
                defaultValue={user.nick}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="card-title">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                defaultValue={user.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="card-title">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="card-title">Avatar</span>
              </label>
              <div className="avatar mb-3">
                <div className="w-20 rounded-full">
                  {user.image == "default.png" && (
                    <img src={userImg} alt="profile photo" />
                  )}
                  {user.image != "default.png" && (
                    <img
                      src={Global.localhost + "user/avatar" + user.image}
                      alt="profile photo"
                    />
                  )}
                </div>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full "
                name="image"
                id="file"
              />
            </div>

            <div className="form-control mt-2">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
              <button className="btn loading mt-2">loading</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Setting;
