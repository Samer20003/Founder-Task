import React, {useState} from 'react'
import Fliter from '../components/Fliter'
import ListView from '../components/ListView'
import ListFliterGroup from '../components/ListFliterGroup'
import "../style/homePageContainer.css";
import {HomePageAction} from "../components/mainContext";
function HomePage() {
  console.log(process.env.NODE_ENV);

  return (
    <>
    <HomePageAction>
    <div className="container-fluid mt-5">
        <div className='row' >
           <div className='col-12 col-md-4 ' >
            <Fliter/>
            </div>
          <div className="col-12 col-md-8">
            <ListView />
          </div>
        </div>
    </div>
    <ListFliterGroup/>   
    </HomePageAction>
    </>
  )
}

export default HomePage