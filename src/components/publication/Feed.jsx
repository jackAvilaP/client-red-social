import React from 'react'
import InfoHeader from '../private/InfoHeader';
import SideBar from '../private/SideBar';
import CardPublication from './CardPublication';



const Feed = () => {

  return (
    <div>
      <InfoHeader />
      <section className='grid grid-cols-6 gap-3'>
        <div className='col-start-1 col-end-5 p-2'>
          <CardPublication />
          <CardPublication />
          <CardPublication />
          <CardPublication />
        </div>
        <div className='col-span-2'>
          <SideBar />
        </div>
      </section>
    </div>
  )
}

export default Feed;