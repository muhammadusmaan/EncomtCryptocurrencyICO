import React from 'react'

import RoadMap from '../images/roadmap.png'
import { AppName, CoinName } from '../utils/Constant'

function AlRoadMap(props) {
  return (
    <>
      <section className='Airoadmap'>
        <div className='container-fluid max-width-container'>
          <div className='row'>
            <div className='col-10 mx-auto mt-5'>
              <div className='text-center'>
                <p className='text-center ico-roadmap-small'></p>
                <h2 className='converter-h ico-roadmap-heading'>
                  En Comt Roadmap
                </h2>
                <p className='text-center ico-subtitle text-muted'>
                  A roadmap for all of our launches and announcement
                </p>
              </div>
              <div className='row justify-content-center px-lg-5 px-md-5 ico-row-cus'>
                <div className='col-lg-12 col-md-12 d-flex justify-content-center'>
                  <img src={RoadMap} alt='' className='roadmap-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AlRoadMap
