import React from "react";
import user from "../../assets/img/user.png";

const CardPublication = () => {
  return (

    <div className='card mb-2 p-1'>
      {/* Header */}
      <div className='card-header'>
        <div className='card-img'>
          <div className="rounded-full">
            <img src={user} />
          </div>
        </div>
        <section className="flex">
          <h2 className='card-subtitle'> <strong className="text-primary">Jackson Avila</strong>  | 1 hour ago</h2>
        </section>
      </div>

      {/* body card */}
      <div className='card-body'>
        <section>
          <p>Hola, buenas noches</p>
        </section>
      </div>
    </div>

  );
};

export default CardPublication;
