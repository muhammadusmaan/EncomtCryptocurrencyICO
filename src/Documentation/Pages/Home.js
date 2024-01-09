import React, { useState } from 'react'
import NavBarDoc from '../NavBarDoc'
import SideBarDoc from '../SideBarDoc'
import TokenProgram from '../Pages/TokenProgram/TokenProgram'

export default function Home() {
    const [isSidebar, setIsSidebar] = useState(false)

    const handleClick = () => {
        console.log(!isSidebar)
        return setIsSidebar(!isSidebar)
    };
    return (
        <>
            <div className="container-fluid px-0">
                <NavBarDoc handleClick={handleClick} />
                <div className="row" onClick={() => {
                    if (window.innerWidth <= 760) {
                        setIsSidebar(true);
                    }
                }}>
                    <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="sidebar-block h-auto" style={{ left: isSidebar ? '-260px' : '0px' }}>
                            <SideBarDoc />
                        </div>
                    </div>
                    <div className={isSidebar ? "col-lg-12 col-md-12 col-sm-12 col-xs-12   " :
                        " col-lg-8 col-md-8 col-sm-12 col-xs-12 "}>
                    </div>
                </div>
            </div>
        </>
    )
}
