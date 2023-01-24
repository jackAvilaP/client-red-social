import React from "react";


import InfoHeader from "../private/InfoHeader";
import CardPublication from "./CardPublication";


const Feed = () => {


  return (


    <section >
      <div className="mt-11">
        <InfoHeader />
      </div>
      <div className="mt-7">
        <CardPublication />
        <CardPublication />
        <CardPublication />
        <CardPublication />
      </div>

    </section>

  );
};

export default Feed;
