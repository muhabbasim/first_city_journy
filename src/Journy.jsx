import React, {Component, useState} from 'react'
import './Journy.scss'
import data from './data'
import JournyLast from './components/Journy/JournyLast';


export default function Journy()  {
  
  const journyList = data.journy
  return ( 
    <section className='journy' >
      <div className="locations">
        {journyList.map((location) => {
          return (
            <div key={location.id}>
              <JournyLast location={location}/>
            </div>
          )
        })}
      </div>

      <div className="path">
        <div className="line"></div>
      </div>
    </section>
  )

}
