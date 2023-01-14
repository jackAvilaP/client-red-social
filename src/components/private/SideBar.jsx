import React, { useEffect } from 'react';
import axios from 'axios';
import { Global } from "../../helpers/Global";


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
    <aside>
      <header>
        side bar
      </header>
    </aside>
  )
}

export default SideBar