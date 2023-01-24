import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getUser } from '../../app/slices/users';
import CardPublication from './CardPublication'

const Publications = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser())
    }, [1])
    return (
        <>
            <h1>Publications</h1>
            <CardPublication />
            <CardPublication />
            <CardPublication />
            <CardPublication />
        </>
    )
}

export default Publications