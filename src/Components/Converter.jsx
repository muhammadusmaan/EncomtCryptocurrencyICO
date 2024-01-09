import React, { useState, useEffect } from 'react'
import astro from '../images/sdvsd.png'
import { AppName, CoinName } from '../utils/Constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faDollarSign,
  faExchange,
} from '@fortawesome/free-solid-svg-icons'

import coinsbg from '../images/coinsbg.jpg'
function Converter(converterRate) {
  const [usdValue, setUsdValue] = useState(1)
  const [enctValue, setEnctValue] = useState(converterRate.converterRate)

  useEffect(() => {
    setEnctValue(converterRate.converterRate)
  }, [converterRate.converterRate])

  const onUsdChange = (e) => {
    setUsdValue(e.target.value)
    setEnctValue(e.target.value * converterRate.converterRate)
  }

  const onEnctChange = (e) => {
    setEnctValue(e.target.value)
    setUsdValue(e.target.value / converterRate.converterRate)
  }

  return (
    <>
      <section className='converter container-fluid'>
        <div className='container-fluid  max-width-container'>
          <center>
            <div className='row card-bg card-bg converter-card-bg'>
              <div className='col-lg-6 col-md-6 col-sm-12 mt-5 mb-5'>
                <div className='row'>
                  <h3 className='calculator-title'>
                    <span style={{ color: '#e83184' }}>ENCT COIN</span>{' '}
                    CALCULATOR
                  </h3>
                </div>
                <div className='row pb-4'>
                  <small
                    className='calculator-subtitle'
                    style={{ fontSize: '70%' }}
                  >
                    FIND OUT THE CURRENT ENCT COIN VALUE WITH OUR EASY-TO-USE
                    CONVERTER
                  </small>
                </div>
                <div className='row '>
                  <div className='justify-content-center convertor_custom'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                      <div className='input-group Converter-Input-Group'>
                        <input
                          className='Converter-Input form-control'
                          aria-describedby='basic-addon1'
                          type='number'
                          onWheel={(event) => {
                            event.currentTarget.blur()
                          }}
                          value={usdValue}
                          onChange={onUsdChange}
                        />
                        <span
                          class='input-group-text eye-icon-rounded-corner'
                          id='basic-addon1'
                        >
                          USD
                        </span>
                      </div>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 equal-icon text-center'>
                      <span className='align-items-center equal-sign'>To</span>
                    </div>
                    <div className=' col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                      <div className='input-group Converter-Input-Group'>
                        <input
                          className='Converter-Input form-control'
                          aria-describedby='basic-addon2'
                          type='number'
                          onWheel={(event) => {
                            event.currentTarget.blur()
                          }}
                          value={enctValue}
                          onChange={onEnctChange}
                        />
                        <span
                          class='input-group-text eye-icon-rounded-corner'
                          id='basic-addon2'
                        >
                          ENCT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row text-center pb-1 pt-1'>
                  <small
                    className='calculator-subtitle'
                    style={{ fontSize: '60%', fontStyle: 'Italic' }}
                  >
                    *Data updated every 15 minutes
                  </small>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <img className='astro-img' src={astro} alt='logo'></img>
              </div>
            </div>
          </center>
        </div>
      </section>
    </>
  )
}
export default Converter
