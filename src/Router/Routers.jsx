import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/publication/NavBar';
import Home from '../pages/Home';
import People from '../pages/People';
import Posts from '../pages/Posts';
import TimeLine from '../pages/TimeLine';


const Routers = () => {
    return (
        <HashRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/people' element={<People />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/timeline' element={<TimeLine />} />
            </Routes>
        </HashRouter>
    )
}

export default Routers;