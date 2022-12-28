import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    
    const count = useSelector((state) => state.counter.value);

    return (
        <div>

        </div>
    )
}

export default Counter