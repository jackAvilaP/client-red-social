import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../app/slices/users";
import CardPeople from "./CardPeople";

const People = () => {
  const dispatch = useDispatch();
  const { listUsers } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getListUser());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="p-6">
        <h1 className="text-5xl text-primary font-bold">People</h1>
      </div>
      <section className="justify-center flex flex-col items-center">
        <div className="mt-4">
          {listUsers.map((list) => (
            <CardPeople list={list} key={list._id} />
          ))}
        </div>
        <div className="btn-group">
          <input type="radio" name="options" data-title="1" className="btn" />
          <input
            type="radio"
            name="options"
            data-title="2"
            className="btn"
          />
          <input type="radio" name="options" data-title="3" className="btn" />
          <input type="radio" name="options" data-title="4" className="btn" />
        </div>
      </section>
    </div>
  );
};

export default People;
