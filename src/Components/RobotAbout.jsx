import React, { useState, Suspense } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchange, faThunderstorm } from '@fortawesome/free-solid-svg-icons'
import { Canvas } from 'react-three-fiber'
import Robot02 from '../Components/Robot02glb'
import { OrbitControls } from '@react-three/drei'
import { AppName, CoinName } from '../utils/Constant'
import mainImage from '../images/diagram-01.png'
import mainImageIn from '../images/diagram-011.png'
import mainImageOut from '../images/diagram-0111.png'

function RobotAbout() {
  const [main, setMain] = useState(true)
  const [isShow, setIsShow] = useState(false)

  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true)
    setMain(false)
  }
  const handleMouseOut = () => {
    setIsHovering(false)
    setMain(true)
  }
  //img2
  const [isHovering2, setIsHovering2] = useState(false)
  const handleMouseOver2 = () => {
    setIsHovering2(true)
    setMain(false)
  }
  const handleMouseOut2 = () => {
    setIsHovering2(false)
    setMain(true)
  }

  //img3
  const [isHovering3, setIsHovering3] = useState(false)
  const handleMouseOver3 = () => {
    setIsHovering3(true)
    setMain(false)
  }
  const handleMouseOut3 = () => {
    setIsHovering3(false)
    setMain(true)
  }
  //img4
  const [isHovering4, setIsHovering4] = useState(false)
  const handleMouseOver4 = () => {
    setIsHovering4(true)
    setMain(false)
  }
  const handleMouseOut4 = () => {
    setIsHovering4(false)
    setMain(true)
  }
  //img5
  const [isHovering5, setIsHovering5] = useState(false)
  const handleMouseOver5 = () => {
    setIsHovering5(true)
    setMain(false)
  }
  const handleMouseOut5 = () => {
    setIsHovering5(false)
    setMain(true)
  }
  //img6
  const [isHovering6, setIsHovering6] = useState(false)
  const handleMouseOver6 = () => {
    setIsHovering6(true)
    setMain(false)
  }
  const handleMouseOut6 = () => {
    setIsHovering6(false)
    setMain(true)
  }

  return (
    <>
      <section className='RobotAbout'>
        <div className='container-fluid max-width-container'>
          <div className='row'>
            <div className='col-10 mx-auto py-lg-4'>
              <div class='row px-lg-5'>
                <div class='title text-center'>
                  <h2 className='px-lg-5 px-md-5 ecosys-title'>
                    EN COMT ECOSYSTEM
                  </h2>
                  <p class='lead'>
                    The EN COMT Ecosystem aims to provide innovative Blockchain
                    and Technology solutions to companies and individuals to
                    improve their economic scalability.
                  </p>
                </div>
              </div>

              <div className='row'>
                <div className='col-12 justify-content-center'>
                  <div className='container container-logo'>
                    <div className='main-image'>
                      <div className='forWidth d-flex'>
                        <a href=''>
                          {' '}
                          <img src={mainImage} alt='' className='active0' />
                          <img src={mainImageIn} alt='' className='active1' />
                          <img src={mainImageOut} alt='' className='active2' />
                        </a>
                      </div>
                    </div>
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
export default RobotAbout
