import React, { useEffect } from 'react'
import { useCountdown } from './useCountdown'
import Progressbar from './Progressbar'
import LineGraphSection from './LineGraphSection'

function DaysCounter({
  GraphData,
  targetDate,
  diffInDays,
  startDate,
  endDate,
}) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  useEffect(() => { }, [targetDate])
  return (
    <>
      <section className='counter'>
        <div className='container-fluid  max-width-container'>
          <div
            className='row d-flex justify-content-center'
            style={{ marginTop: '5rem' }}
          >
            <div className='col-lg-8 col-md-10 col-sm-10 col-xs-10'>
              <LineGraphSection GraphData={GraphData} />
            </div>

            <div
              className='col-lg-4 col-md-10 col-sm-10 col-xs-10 d-flex justify-content-center counter_days_margin'
            >
              <div
                className='card card-bg card_bottom_custom'
                style={{ width: '26rem' }}
              >
                <div className='card-body counter-card-body page-counter'>
                  <div className='row mt-2'>
                    <h5 className='d-flex justify-content-center coin-release-title'>
                      COIN RELEASE ENDS IN
                    </h5>
                  </div>

                  <div className='d-flex justify-content-center mt-2'>
                    <ul className='d-flex list-unstyled gap-2  counter-box-cus'>
                      {days < 0 ? (
                        <li className='d-grid text-center'>
                          <span className=' count-text TimerBg p-2' id='days'>
                            0
                          </span>
                          Days
                        </li>
                      ) : (
                        <li className='d-grid text-center'>
                          <span className=' count-text TimerBg p-2' id='days'>
                            {days}
                          </span>
                          Days
                        </li>
                      )}
                      <span></span>
                      {hours < 0 ? (
                        <li className='d-grid text-center'>
                          <span className=' count-text TimerBg p-2' id='hours'>
                            0
                          </span>
                          Hours
                        </li>
                      ) : (
                        <li className='d-grid text-center'>
                          <span className='count-text TimerBg p-2' id='hours'>
                            {hours}
                          </span>
                          Hours
                        </li>
                      )}
                      <span></span>
                      {minutes < 0 ? (
                        <li className='d-grid text-center'>
                          <span
                            className=' count-text TimerBg p-2'
                            id='minutes'
                          >
                            0
                          </span>
                          Minutes
                        </li>
                      ) : (
                        <li className='d-grid text-center'>
                          <span className='count-text TimerBg p-2' id='minutes'>
                            {minutes}
                          </span>
                          Minutes
                        </li>
                      )}
                      <span></span>
                      {seconds < 0 ? (
                        <li className='d-grid text-center'>
                          <span className='count-text TimerBg p-2' id='seconds'>
                            0
                          </span>
                          Seconds
                        </li>
                      ) : (
                        <li className='d-grid text-center'>
                          <span className='count-text TimerBg p-2' id='seconds'>
                            {seconds}
                          </span>
                          Seconds
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className='px-lg-5 px px-md-5'>
                    <progress
                      style={{ width: '100%' }}
                      id='progress'
                      value={diffInDays}
                      max='30'
                    >
                      {diffInDays}
                    </progress>
                    <br></br>
                    <label className='progress-label' for='progress'>
                      {diffInDays} days have been passed{' '}
                    </label>
                  </div>

                  {/* <Progressbar bgcolor="orange" startDate={startDate} endDate={endDate} progress={diffInDays}  height={20} /> */}

                  {/* <hr className="hLine"></hr> */}

                  <div className='mt-5 d-flex justify-content-center'>
                    <a
                      className='btn btn-get-started text-white'
                      href='/Signup'
                    >
                      Buy Coin Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DaysCounter
