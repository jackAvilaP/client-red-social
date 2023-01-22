import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Slices
import { getUser } from '../../app/slices/users';

const InfoHeader = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users);


    useEffect(() => {
        dispatch(getUser())
    }, [1])

    return (
        <section className="header-info">
            <div className='header-title'>
                <h1 className='text-5xl font-bold'>Timeline</h1>
                <button className="btn btn-primary btn-xs  mx-2 "> show new</button>
            </div>
            <div className='p-6'>
                <h1 className='text-5xl text-primary font-bold mr-3'>Hi, {user.name}</h1>
            </div>
        </section>
    )
}

export default InfoHeader;