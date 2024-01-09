import React from 'react'
import Slider from 'react-slick'
import ReactTimeAgo from 'react-time-ago'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchange, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


function Blog(props) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [title, setTitle] = React.useState('View Blog')
  const [modalData, setModalData] = useState({})
  const [slideIndex, setSlideIndex] = useState(0)

  const showModal = () => {
    setIsOpen(true)
    document.body.style.backgroundColor = 'white'
  }
  const hideModal = () => {
    setIsOpen(false)
  }

  const truncateText = (str) => {
    return str.length > 10 ? str.substring(0, 40) + '...' : str
  }
  const truncateTitleText = (str) => {
    return str.length > 10 ? str.substring(0, 10) + '...' : str
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  }

  return (
    <>
      <section className='blog-sec' id='blog-sec'>
        <div className='container-fluid max-width-container'>
          <div className='row'>
            <div className='col-12 mx-auto '>
              <div className='d-flex justify-content-center'>
                <h6 className='converter-h blogs-news'>
                  Latest News / Blog Post
                </h6>
              </div>
              <div className='row'>
                <div className='d-flex flex-wrap justify-content-center blog-gap-custom mt-5 col-lg-12 col-md-12 col-sm-12'>
                  {props.blogData.map((singleBlog, indx) => {
                    return (
                      <div
                        key={indx}
                        class='col-lg-4 col-md-4 col-sm-12 card text-white page-blog-item'
                        style={{
                          width: '',
                          height: '',
                        }}
                      >
                        <img
                          class='card-img Blog-card-img'
                          src={singleBlog.image}
                          alt='Blog'
                        />
                        <div class='card-img-overlay Blog-card-img-mask'>
                        <small class="card-text"><ReactTimeAgo date={singleBlog.created} locale="en-US" /></small>
                          <h2 class='card-title mt-2 mb-3'>
                            {truncateTitleText(singleBlog.title)}
                          </h2>
                          <p class='card-text fs-6 page-blog-des'>
                            {' '}
                          </p>
                          <a
                            onClick={() => {
                              showModal()
                              setModalData(singleBlog)
                            }}
                            className='float-start btn btn-outline-primary btn-load text-decoration-none pe-3 page-blog-btn'
                          >
                            Read more <FontAwesomeIcon icon={faArrowDown} />
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='notify-sub' id='blog-sec'></section>

      {/* ----------View Model----------- */}
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='card card-body-bg px-3 py-3 card-model-border'>
            <div className='d-flex justify-content-center'>
              <img
                src={modalData.image}
                width='50%'
                className='card-img-model img-fluid opacity'
                alt='...'
              />
            </div>
             <div class="card-text" dangerouslySetInnerHTML={{__html: modalData.content}} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-bg' onClick={hideModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Blog
