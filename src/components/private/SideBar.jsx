import React from 'react';
import InfoUser from '../user/InfoUser';
import CardThinking from '../private/CardThinking';


const SideBar = () => {

  return (
    <aside className='p-2'>
      <InfoUser />
      <CardThinking />
    </aside>
  )
}

export default SideBar;