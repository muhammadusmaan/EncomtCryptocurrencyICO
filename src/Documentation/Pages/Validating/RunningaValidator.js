
import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'

export default function RunningaValidator() {
    const [isSidebar, setIsSidebar] = useState(false)

    const handleClick = () => {
        console.log(!isSidebar)
        return setIsSidebar(!isSidebar)
    };
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
                        <div className="container px-lg-5 px-md-5">
                            <br />
                            <br />
                            <h1 style={{ fontSize: "3rem" }} >Running a Validator</h1>
                            <br />

                            <p>This section describes how to run a Encomt validator node.</p>

                            <p>There are several clusters available to connect to; see choosing a
                                Cluster for an overview of each.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
