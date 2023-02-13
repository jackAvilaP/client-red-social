import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../app/slices/users";
import PaginateBtn from "../public/PaginateBtn";
import CardPeople from "./CardPeople";

const People = () => {
  const dispatch = useDispatch();
  const { listUsers } = useSelector((state) => state.users);
  const totalPages = 3
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
        <PaginateBtn totalPages={totalPages} />
      </section>
    </div>
  );
};

export default People;
