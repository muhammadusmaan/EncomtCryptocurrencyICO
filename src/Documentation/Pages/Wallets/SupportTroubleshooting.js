import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import Container from "react-bootstrap/Container";




export default function SupportTroubleshooting() {
    const [isSidebar, setIsSidebar] = useState(false)

    const handleClick = () => {
        console.log(!isSidebar)
        return setIsSidebar(!isSidebar)
    }
    useEffect(() => {
        if (window.innerWidth <= 760) {
            setIsSidebar(true);
        }
    }, [])
    return (
        <>
            <div className="container-fluid p-0">
                <NavBarDoc handleClick={handleClick} />
                <div className="row justify-content-center m-0">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="sidebar-doc" style={{ left: isSidebar ? '-425px' : '0px' }}>
                            <SideBarDoc />
                        </div>
                    </div>
                    <div className={isSidebar ? "col-lg-12 col-md-12 col-sm-12 col-xs-12   " :
                        " col-lg-8 col-md-8 col-sm-12 col-xs-12 "}>
                        <div className="support-troubleshoot-container px-lg-5 px-md-5">
                            <div className="main-container">
                                <Container>
                                    <header>
                                        <h1 className="troubleshoot-heading">
                                            Support / Troubleshooting
                                        </h1>
                                        <br />
                                    </header>
                                    <div className="troubleshoot-para-container">
                                        <p>
                                            If you have questions or are having trouble setting up or using
                                            your wallet of choice, please make sure you've read through{" "}
                                            <br /> all the relevant pages in our{" "}
                                            <a className="green-text">
                                                Wallet Guide
                                            </a>
                                            . The En Comt team is working hard to support new features on
                                            popular wallets,
                                            <br /> and we do our best to keep our documents up to date with
                                            the latest available features.
                                        </p>
                                        <br />
                                        <p>
                                            If you have questions after reading the docs, feel free to reach
                                            out to us on our{" "}
                                            {/* <a href="url" className="green-text">
                                                Telegram
                                            </a> */}
                                            .
                                        </p>
                                        <br />

                                        <p>
                                            For <b> technical support</b>, please ask a question on{" "}
                                            {/* <a href="url" className="green-text">
                                                StackOverflow{" "}
                                            </a>{" "} */}
                                            and tag your questions with{" "}
                                            <code className="box-text"> En Comt </code>.
                                        </p>
                                        <br />
                                    </div>
                                </Container>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
