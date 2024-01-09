import React, { useEffect } from 'react'
import { AppName, CoinName } from '../utils/Constant'
import Logo from '../images/logo.png'

import ParticleImage, { Vector, forces } from 'react-particle-image'
import ValidatorsSvg from '../images/validators.svg'
import DevelopersSvg from '../images/developers.svg'
import BusinessSvg from '../images/business.svg'
import InvestorsSvg from '../images/investors.svg'
import AmbassadorsSvg from '../images/ambassadors.svg'
import ScalabilitySvg from '../images/scalability.svg'
import SecuritySvg from '../images/security.svg'
import FlexibilitySvg from '../images/flexibility.svg'

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y)
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50
  },
  color: ({ x, y, image }) => '#61dafb',
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width, canvasDimensions.height)
  },
}

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 2)
}
const height = window.innerHeight
const width = window.innerWidth

function About(about) {
  useEffect(() => {}, [])

  return (
    <>
      <section className='About pb-5' id='AboutUs'>
        <div className='container-fluid max-width-container'>
          <div class='col-10 m-auto px-lg-5 pt-5'>
            <div className='row justify-content-center d-flex'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 '>
                <div class='items-Explore-Encomt  d-flex justify-content-center justify-content-md-between'>
                  <a href='#validators'>
                    <div class='bubble'>
                      <div class='inner'>
                        <img
                          src={ValidatorsSvg}
                          alt=''
                          className='Validator-img'
                        />
                      </div>
                    </div>
                    <span className='bubble-title'>Validators</span>
                  </a>
                  <a href='#developers'>
                    <div class='bubble'>
                      <div class='inner'>
                        <img
                          src={DevelopersSvg}
                          alt=''
                          className='Developers-img'
                        />
                      </div>
                    </div>
                    <span className='bubble-title'>Developers</span>
                  </a>
                  <a href='#business'>
                    <div class='bubble'>
                      <div class='inner'>
                        <img
                          src={BusinessSvg}
                          alt=''
                          className='Business-img'
                        />
                      </div>
                    </div>
                    <span className='bubble-title'>Businesses</span>
                  </a>
                  <a href='#investors'>
                    <div class='bubble'>
                      <div class='inner'>
                        <img
                          src={InvestorsSvg}
                          alt=''
                          className='Investors-img'
                        />
                      </div>
                    </div>
                    <span className='bubble-title'>Investors</span>
                  </a>
                  <a href='#ambassadors'>
                    <div class='bubble'>
                      <div class='inner'>
                        <img
                          src={AmbassadorsSvg}
                          alt=''
                          className='Ambassadors-img'
                        />
                      </div>
                    </div>
                    <span className='bubble-title'>Ambassadors</span>
                  </a>
                  <a href='#ambassadors'>
                    <div class='bubble'>
                      <div class='inner'>
                        <img
                          src={AmbassadorsSvg}
                          alt=''
                          className='Ambassadors-img'
                        />
                      </div>
                    </div>
                    <span className='bubble-title'>Organisation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='text-center col-sm-12 col-md-12 col-lg-12 mt-5'>
              <ParticleImage
                className={'particle-Animation'}
                height={150}
                width={400}
                src={Logo}
                scale={1.6}
                entropy={10}
                maxParticles={2200}
                particleOptions={particleOptions}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                backgroundColor='transparent'
              />
            </div>
          </div>
        </div>

        <br />
        <div class='col-10 m-auto px-lg-5 px-md-5'>
          <div class='spacer'></div>
          <div class='row justify-content-center'>
            <div class='title text-center'>
              <h2 className='mt-5 px-lg-5  developer-heading'>
                Developers, validators and businesses use Elrond to build a new
                internet economy
              </h2>
              <p class='lead'>
                We give anyone, anywhere easy access to the digital economy, by
                bringing a 1000x <br class='d-none d-md-block' />
                improvement in blockchain speed, scale, cost and user
                experience.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div class='container-fluid max-width-container'>
            <div class='row text-center mob-card-res'>
              <div class='col-lg-3 col-md-6 mt-6 mb-5'>
                <div className='card Explore-Encomt-Cards'>
                  <div class='bubble-Relative-Position'>
                    <span className='bubble-Explore-Encomt-Cards'>
                      <img
                        src={ScalabilitySvg}
                        alt=''
                        className='scalable-img'
                      />
                    </span>
                  </div>
                  <div
                    className='about-cards-cus'
                    style={{ paddingTop: '2rem' }}
                  >
                    <span class='ante'>Adaptive State Sharding</span>
                    <h3 className='massively-title'>Massively Scalable</h3>
                    <em></em>
                    <p className='massively-subtitle'>
                      We propose a new consensus approach called Secure Proof of
                      Stake which is fast, and ensures long term security and
                      distributed fairness, while eliminating the need for
                      energy intensive PoW algorithms.
                    </p>
                    {/* <span class="btn btn-sm btn-outline-primary">Learn More</span> */}
                  </div>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 mt-6 mb-5'>
                <div className='card Explore-Encomt-Cards'>
                  <div class='bubble-Relative-Position'>
                    <span className='bubble-Explore-Encomt-Cards'>
                      <img src={SecuritySvg} alt='' className='Security-img' />
                    </span>
                  </div>
                  <div
                    className='about-cards-cus'
                    style={{ paddingTop: '2rem' }}
                  >
                    <span class='ante'>Secure Proof of Stake</span>
                    <h3 className='massively-title'>Secure &amp; Efficient</h3>
                    <em></em>
                    <p className='massively-subtitle'>
                      Adaptive State Sharding brings a 1000x improvement in
                      throughput compared to previous blockchain iterations by
                      enabling parallel transaction processing.
                    </p>
                  </div>
                  {/* <span class="btn btn-sm btn-outline-primary">Learn More</span> */}
                </div>
              </div>
              <div class='col-lg-3 col-md-6 mt-6 mb-5'>
                <div className='card Explore-Encomt-Cards'>
                  <div class='bubble-Relative-Position'>
                    <span className='bubble-Explore-Encomt-Cards'>
                      <img
                        src={FlexibilitySvg}
                        alt=''
                        className='Flexibility-img'
                      />
                    </span>
                  </div>

                  <div
                    className='about-cards-cus'
                    style={{ paddingTop: '2rem' }}
                  >
                    <span class='ante'>Multiple VM Engines</span>
                    <h3 className='massively-title'>Developer-Friendly</h3>
                    <em></em>
                    <p className='massively-subtitle'>
                      We have integrated a WASM VM engine, created a useful
                      abstraction layer, support multiple smart contract
                      languages, enabling testing and deployment in minutes.
                    </p>
                    {/* <span class="btn btn-sm btn-outline-primary">Learn More</span> */}
                  </div>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 mt-6 mb-5'>
                <div className='card Explore-Encomt-Cards'>
                  <div class='bubble-Relative-Position'>
                    <span className='bubble-Explore-Encomt-Cards'>
                      <img
                        src={ScalabilitySvg}
                        alt=''
                        className='scalable-img'
                      />
                    </span>
                  </div>
                  <div
                    className='about-cards-cus'
                    style={{ paddingTop: '2rem' }}
                  >
                    <span class='ante'>Adaptive State Sharding</span>
                    <h3 className='massively-title'>Advance Technology</h3>
                    <em></em>
                    <p className='massively-subtitle'>
                      We propose a new consensus approach called Secure Proof of
                      Stake which is fast, and ensures long term security and
                      distributed fairness, while eliminating the need for
                      energy intensive PoW algorithms.
                    </p>
                    {/* <span class="btn btn-sm btn-outline-primary">Learn More</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='spacer'></div>
        </div>
      </section>
    </>
  )
}
export default About
