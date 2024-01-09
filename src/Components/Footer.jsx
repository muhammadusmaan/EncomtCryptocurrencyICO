import React from 'react'
import Animation from '../images/anim.png'
import { AppName, CoinName } from '../utils/Constant'
import { Link } from 'react-router-dom'
import Telegram from '../images/telegram-3-24.png'
import Reddit from '../images/reddit-24.png'
import Twitter from '../images/twitter-5-24.png'
import Instagram from '../images/instagram-5-24.png'
import Youtube from '../images/youtube-5-24.png'
import Medium from '../images/medium-connection-24.png'
import Linkedin from '../images/linkedin-5-24.png'
import Facebook from '../images/facebook-5-24.png'
import Tiktok from '../images/tiktok-3-24.png'

function Footer(props) {
  return (
    <>
      <section className='footer-sec animation'>
        <div className='container-fluid max-width-container'>
          <div className='row'>
            <div className='col-10 mx-auto mt-5'>
              <div className=''>
                {/*<h1 className='footer-h'>Get more out of {AppName}</h1> */}
                {/* <img src={Animation} className="img-fluid opacity" alt="..." /> */}
              </div>
              <div className='row mt-5'>
                <div className='col-10 col-md-3 col-lg-3'>
                  <ul className='list-unstyled d-flex flex-column gap-2'>
                    <li className='pb-2 foo-h'>Company</li>
                    <li className='li-items'>
                      <a href='#' className='text-decoration-none text-white'>
                        Home
                      </a>
                    </li>
                    <li className='li-items'>
                      <a
                        href='#AboutUs'
                        className='text-decoration-none text-white'
                      >
                        About us
                      </a>
                    </li>
                    <li className='li-items'>
                      <a
                        href='#AboutUs'
                        className='text-decoration-none text-white'
                      >
                        Products
                      </a>
                    </li>
                    <li className='li-items'>
                      <a
                        href='#AboutUs'
                        className='text-decoration-none text-white'
                      >
                        Events
                      </a>
                    </li>
                    <li className='li-items'>
                      <a
                        href='#blog-sec'
                        className='text-decoration-none text-white'
                      >
                        Blog
                      </a>
                    </li>
                    <li className='li-items text-decoration-none text-white'>
                      <a
                        className='text-decoration-none text-white'
                        href={props.footerLinksData.location}
                        target='_blank'
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-10 col-md-3 col-lg-3'>
                  <ul className='list-unstyled d-flex flex-column gap-2'>
                    <li className='pb-2 foo-h'>Technology</li>
                    <li className='li-items'>
                      <a
                        href='#AboutUs'
                        className='text-decoration-none text-white'
                      >
                        Blockchain
                      </a>
                    </li>
                    <li className='li-items'>
                      <a
                        href='#AboutUs'
                        className='text-decoration-none text-white'
                      >
                        Speed & Security
                      </a>
                    </li>{' '}
                    <li className='li-items'>
                      <a
                        href='#AboutUs'
                        className='text-decoration-none text-white'
                      >
                        Developers
                      </a>
                    </li>{' '}
                    <li className='li-items'>
                      <a
                        href='#AboutUs'
                        className='text-decoration-none text-white'
                      >
                        Validators
                      </a>
                    </li>{' '}
                    <li className='li-items'>
                      <a
                        href='#AboutUs'
                        className='text-decoration-none text-white'
                      >
                        Flexibility &amp; Productivity
                      </a>
                    </li>
                    <li className='li-items'>
                      <a
                        href='#AboutUs'
                        className='text-decoration-none text-white'
                      >
                        Roadmap
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-10 col-md-3 col-lg-3'>
                  <ul className='list-unstyled d-flex flex-column gap-2'>
                    <li className='pb-2 foo-h'>Resources</li>
                    <li className='li-items'>
                      <a
                        href='#blog-sec'
                        className='text-decoration-none text-white'
                      >
                        Whitepaper
                      </a>
                    </li>
                    <li className='li-items'>
                      <a
                        href='#blog-sec'
                        className='text-decoration-none text-white'
                      >
                        Community
                      </a>
                    </li>
                    <li className='li-items'>
                      <a
                        href='#blog-sec'
                        className='text-decoration-none text-white'
                      >
                        Security Policy
                      </a>
                    </li>
                    <li className='li-items'>
                      <a
                        href='#blog-sec'
                        className='text-decoration-none text-white'
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className='li-items'>
                      <a
                        href='#blog-sec'
                        className='text-decoration-none text-white'
                      >
                        FAQs
                      </a>
                    </li>
                    <li className='li-items'>
                      <a
                        href='#blog-sec'
                        className='text-decoration-none text-white'
                      >
                        Teams and Advisors
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-10 col-md-3 col-lg-3'>
                  <ul className='list-unstyled d-flex flex-column gap-2'>
                    <li className='pb-2 foo-h d-flex'>Join Us</li>
                    <li>
                      <div className='row gap-1'>
                        <div className='col-12'>
                          <ul className='f-sm-icons'>
                            <li className='li-items text-decoration-none text-white'>
                              <a
                                className='text-decoration-none text-white'
                                href={props.footerLinksData.telegram}
                                target='_blank'
                              >
                                <img src={Telegram} alt='' />
                              </a>
                            </li>
                            <li className='li-items text-decoration-none text-white'>
                              <a
                                className='text-decoration-none text-white'
                                href={props.footerLinksData.reddit}
                                target='_blank'
                              >
                                <img src={Reddit} alt='' />
                              </a>
                            </li>
                            <li className='li-items text-decoration-none text-white'>
                              <a
                                className='text-decoration-none text-white'
                                href={props.footerLinksData.twitter}
                                target='_blank'
                              >
                                <img src={Twitter} alt='' />
                              </a>
                            </li>

                            <li className='li-items text-decoration-none text-white'>
                              <a
                                className='text-decoration-none text-white'
                                href={props.footerLinksData.instagram}
                                target='_blank'
                              >
                                <img src={Instagram} alt='' />
                              </a>
                            </li>
                            <li className='li-items text-decoration-none text-white'>
                              <a
                                className='text-decoration-none text-white'
                                href={props.footerLinksData.facebook}
                                target='_blank'
                              >
                                <img src={Facebook} alt='' />
                              </a>
                            </li>
                            <li className='li-items text-decoration-none text-white'>
                              <a
                                className='text-decoration-none text-white'
                                href={props.footerLinksData.youtube}
                                target='_blank'
                              >
                                <img src={Youtube} alt='' />
                              </a>
                            </li>

                            <li className='li-items text-decoration-none text-white'>
                              <a
                                className='text-decoration-none text-white'
                                href={props.footerLinksData.medium}
                                target='_blank'
                              >
                                <img src={Medium} alt='' />
                              </a>
                            </li>
                            <li className='li-items text-decoration-none text-white'>
                              <a
                                className='text-decoration-none text-white'
                                href={props.footerLinksData.linkedin}
                                target='_blank'
                              >
                                <img src={Linkedin} alt='' />
                              </a>
                            </li>
                            <li className='li-items text-decoration-none text-white'>
                              <a
                                className='text-decoration-none text-white'
                                href={props.footerLinksData.discord}
                                target='_blank'
                              >
                                <img src={Tiktok} alt='' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    {/* <li className="li-items text-decoration-none text-white">
                                            <a className="text-decoration-none text-white" href={props.footerLinksData.youtube} target="_blank" >Youtube</a>
                                        </li>
                                        <li className="li-items text-decoration-none text-white">
                                            <a className="text-decoration-none text-white" href={props.footerLinksData.instagram} target="_blank" >Instagram</a>
                                        </li> */}
                  </ul>
                </div>
              </div>
              <div className='mt-5 d-flex justify-content-center text-muted'>
                <p className='copyright'>
                  Copyright &copy;2022 {AppName}, All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Footer
