import React from 'react'
import user from "../../assets/img/user.png";

const InfoUser = () => {
    return (
        
            <div className='card'>
                {/* Header */}
                <div className='card-header'>
                    <div className='card-img'>
                        <div className="rounded-full">
                            <img src={user} />
                        </div>
                    </div>
                    <section>
                        <h1 className='card-title'>Jackson avila</h1>
                        <h2 className='card-subtitle'> Nick name</h2>
                    </section>
                </div>

                {/* body card */}
                <div className='card-body'>
                    <ul className='card-list'>
                        <li className='card-li'>
                            <p className='mb-2 border-solid border-b-2 border-gray-200'>Siguendo</p>
                            <p className='card-number'>23</p>
                        </li>
                        <li className='card-li'>
                            <p className='mb-2 border-solid border-b-2 border-gray-200'>
                                Seguidores
                            </p>
                            <p className='card-number'>23</p>
                        </li>
                        <li className='card-li'>
                        <p className='mb-2 border-solid border-b-2 border-gray-200'>
                            Publicaciones
                        </p>
                            <p className='card-number'>23</p>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default InfoUser;