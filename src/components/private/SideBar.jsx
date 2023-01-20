import React, { useEffect } from 'react';
import axios from 'axios';
import { Global } from "../../helpers/Global";
import InfoUser from '../user/InfoUser';
import CardThinking from '../private/CardThinking';


const SideBar = () => {
  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("user"))
    let token = localStorage.getItem("token")
    axios.get(Global.localhost + "user/getUser/" + userId.id, {
      headers: {
        "Authorization": token
      }
    })
      .then(res => console.log(res.data))
  }, [1])

  return (
    <aside className='p-2'>
      <InfoUser />
      <CardThinking />
    </aside>
  )
}

export default SideBar;