import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounter } from "../../app/slices/users";
import userImg from "../../assets/img/user.png";


const InfoUser = () => {
  const { user, counters } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCounter())
  }, [])

  return (
    <>
      <div className='p-6'>
        <h1 className='text-5xl text-primary font-bold mr-3'>Hi, {user.name}</h1>
      </div>
      <div className="card">
        {/* Header */}
        <div className="card-header">
          <div className="card-img">
            <div className="rounded-full">
              {user.image == "default.png" && <img src={userImg} />}

            </div>
          </div>
          <section>
            <h1 className="card-title">{user.name}</h1>
            <h2 className="card-subtitle">{user.nick}</h2>
          </section>
        </div>

        {/* body card */}
        <div className="card-body">
          <ul className="card-list">
            <li className="card-li">
              <p className="mb-2 border-solid border-b-2 border-gray-200">
                Following
              </p>
              <p className="card-number">{counters.following}</p>
            </li>
            <li className="card-li">
              <p className="mb-2 border-solid border-b-2 border-gray-200">
                Followers
              </p>
              <p className="card-number">{counters.followed}</p>
            </li>
            <li className="card-li">
              <p className="mb-2 border-solid border-b-2 border-gray-200">
                Publications
              </p>
              <p className="card-number">{counters.publications}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfoUser;
