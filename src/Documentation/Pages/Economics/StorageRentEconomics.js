import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'





export default function StorageRentEconomics() {
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
                        <div class="container-fluid px-lg-5 px-md-5 mt-5">
                            <h1><b>Storage Rent Economics</b></h1><br />
                            <div className="text">
                                <p>Each transaction that is submitted to the Solana ledger imposes costs. Transaction fees paid by the<br />
                                    submitter, and collected by a validator, in theory, account for the acute, transactional, costs of
                                    validating and<br />adding that data to the ledger. Unaccounted in this process is the mid-term storage of
                                    active
                                    ledger state,<br /> necessarily maintained by the rotating validator set. This type of storage imposes costs
                                    not
                                    only to<br /> validators but also to the broader network as active state grows so does data transmission and
                                    validation<br /> overhead. To account for these costs, we describe here our preliminary design and
                                    implementation
                                    of <br />storage rent.</p><br /><br />
                                <p>Storage rent can be paid via one of two methods:<br /><br />
                                    Method 1: Set it and forget it<br /><br />
                                    With this approach, accounts with two-years worth of rent deposits secured are exempt from network rent<br />
                                    charges. By maintaining this minimum-balance, the broader network benefits from reduced liquidity and
                                    the<br />account holder can rest assured that their Account::data will be retained for continual
                                    access/usage.<br /><br />
                                    Method 2: Pay per byte<br /><br />
                                    If an account has less than two-years worth of deposited rent the network charges rent on a per-epoch<br />
                                    basis, in credit for the next epoch. This rent is deducted at a rate specified in genesis, in lamports
                                    per<br />kilobyte-year.
                                    For information on the technical implementation details of this design, see the <span style={{ color: "lightblue" }}>Rent section</span>.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
