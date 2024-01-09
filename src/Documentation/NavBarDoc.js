import React, { useState, useEffect } from 'react'
import Logo from '../images/logo.png'


export default function NavBarDoc({ handleClick }) {
    const [isTablet, setIsTablet] = useState(false);


    const openSidebar = () => {
        handleClick();
    }
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsTablet(true)
        }
    }, [])
    return (
        <>
            <nav className="navbar cardBg rounded-0 navbar-doc">
                <div className="container-fluid px-5 justify-content-md-start">
                    <div style={{ display: isTablet ? 'inline-block' : "none" }}>
                        <span className='hamburger' onClick={() => { openSidebar() }}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5 user-icon'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                    clipRule='evenodd' /> </svg>
                        </span>
                    </div>
                    <a className="navbar-brand d-flex align-items-baseline gap-2 text-white doc_fs navbar-doc" href="#">
                        <img src={Logo} alt="" className="d-flex w-50" />
                        Documentation
                    </a>
                </div>
            </nav>
        </>
    )
}
