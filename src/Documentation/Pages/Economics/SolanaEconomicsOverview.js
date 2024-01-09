import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'





export default function SolanaEconomicsOverview() {
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
                        <div className="container-fluid px-lg-5 px-md-5 mt-5">
                            <h1 className="En Comt-economy">En Comt Economics Overview</h1>
                            <strong className="strong"> Subject to change.</strong><br /><br />
                            <div className="crypto-economy">
                                <p>
                                    En Comt’s crypto-economic system is designed to promote a healthy, long
                                    term self-sustaining economy with participant<br />incentives aligned
                                    to the security and decentralization of the network. The main
                                    participants in this economy are<br />validation-clients. Their
                                    contributions to the network, state validation, and their requisite
                                    incentive mechanisms are<br />discussed below.
                                </p>
                                <br />
                                <p>
                                    The main channels of participant remittances are referred to as
                                    protocol-based rewards and transaction fees. Protocol-<br />based
                                    rewards are generated from inflationary issuances from a
                                    protocol-defined inflation schedule. These rewards will<br />constitute
                                    the total protocol-based reward delivered to validation clients, the
                                    remaining sourced from transaction fees. In<br />the early days of the
                                    network, it is likely that protocol-based rewards, deployed based on
                                    predefined issuance schedule, will<br />drive the majority of
                                    participant incentives to participate in the network.
                                </p>
                                <br />
                                <p>
                                    These protocol-based rewards are calculated per epoch and distributed
                                    across the active delegated stake and validator<br />set (per
                                    validator commission). As discussed further below, the per annum
                                    inflation rate is based on a pre-determined<br />disinflationary
                                    schedule. This provides the network with supply predictability which
                                    support<br />
                                </p>

                                <p>
                                    First, an overview of the inflation design is presented. This section
                                    starts with defining and clarifying
                                    <span style={{ color: "lightblue" }}>Terminology</span><br />commonly used
                                    subsequently in the discussion of inflation and the related
                                    components. Following that, we outline<br />En Comt's proposed
                                    <span style={{ color: "lightblue" }}>Inflation Schedule</span>, i.e. the
                                    specific parameters that uniquely parameterize the protocol-driven<br />inflationary
                                    issuance over time. Next is a brief section on
                                    <span style={{ color: "lightblue" }}>Adjusted Staking Yield</span>, and how
                                    token dilution might influence<br />staking behavior.
                                </p>
                                <br />
                                <p>
                                    An overview of
                                    <span style={{ color: "lightblue" }}>Transaction Fees </span> on En Comt is
                                    followed by a discussion of
                                    <span style={{ color: "lightblue" }}>Storage Rent Economics</span>in which
                                    we describe<br />an implementation of storage rent to account for the
                                    externality costs of maintaining the active state of the ledger.
                                </p>
                                <br />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
