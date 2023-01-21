import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import InfoUser from '../user/InfoUser';
import CardThinking from '../private/CardThinking';


const SideBar = () => {
  useEffect(() => {
    //let token = localStorage.getItem("token");
    //const dispatch = useDispatch();

    // axios.get(Global.localhost + "user/getUser/" + userId.id, {
    //   headers: {
    //     "Authorization": token
    //   }
    // })
    //   .then(res => console.log(res.data))
  }, [])

  return (
    <aside className='p-2'>
      <InfoUser />
      <CardThinking />
    </aside>
  )
}

export default SideBar;