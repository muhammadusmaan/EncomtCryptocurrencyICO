import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'





export default function TransactionFees() {
    const [isSidebar, setIsSidebar] = useState(false)

    const handleClick = () => {
        console.log(!isSidebar)
        return setIsSidebar(!isSidebar)
    }
    return (
        <>
            <div className="container-fluid p-0">
                <NavBarDoc handleClick={handleClick} />
                <div className="row justify-content-center m-0" >
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="sidebar-doc" style={{ left: isSidebar ? '-425px' : '0px' }}>
                            <SideBarDoc />
                        </div>
                    </div>
                    <div className={isSidebar ? "col-lg-12 col-md-12 col-sm-12 col-xs-12   " :
                        " col-lg-8 col-md-8 col-sm-12 col-xs-12 "}>
                        <div class="container-fluid px-lg-5 px-md-5 mt-5">
                            <h1><b>Transaction Fees</b></h1>
                            <br />
                            <h3><b>Subject to change.</b></h3>
                            <div className="text">
                                <p>Each transaction sent through the network, to be processed by the current leader validation-client
                                    and<br />confirmed as a global state transaction, contains a transaction fee. Transaction fees offer many
                                    benefits in<br />the Solana economic design, for example they:</p>
                                <br />
                                <li>provide unit compensation to the validator network for the CPU/GPU resources necessary to process<br />the
                                    state transaction,</li>
                                <br />
                                <li>reduce network spam by introducing real cost to transactions,</li>
                                <br />
                                <li>and provide potential long-term economic stability of the network through a protocol-captured<br />minimum
                                    fee amount per transaction, as described below.</li>
                                <br />
                                <p>Network consensus votes are sent as normal system transfers, which means that validators
                                    pay<br />transaction fees to participate in consensus.</p>
                                <br />
                                <p>Many current blockchain economies (e.g. Bitcoin, Ethereum), rely on protocol-based rewards to support
                                    the<br />economy in the short term, with the assumption that the revenue generated through transaction
                                    fees will<br />support the economy in the long term, when the protocol derived rewards expire. In an
                                    attempt to create a<br />sustainable economy through protocol-based rewards and transaction fees, a fixed
                                    portion (initially 50%) of<br />each transaction fee is destroyed, with the remaining fee going to the
                                    current leader processing the<br />transaction. A scheduled global inflation rate provides a source for
                                    rewards distributed to validation-clients,<br />through the process described above.</p>
                                <br />
                                <p>Transaction fees are set by the network cluster based on recent historical throughput, see <span
                                    style={{ color: "lightblue" }}>Congestion<br />Driven Fees.</span> This minimum portion of each transaction
                                    fee can be dynamically adjusted depending on<br />historical signatures-per-slot. In this way, the
                                    protocol can use the minimum fee to target a desired<br />hardware utilization. By monitoring a protocol
                                    specified signatures-per-slot with respect to a desired, target<br />usage amount, the minimum fee can be
                                    raised/lowered which should, in turn, lower/raise the actual<br />signature-per-slot per block until it
                                    reaches the target amount. This adjustment process can be thought of<br />as similar to the difficulty
                                    adjustment algorithm in the Bitcoin protocol, however in this case it is adjusting<br />the minimum
                                    transaction fee to guide the transaction processing hardware usage to a desired level.</p>
                                <br />
                                <p>As mentioned, a fixed-proportion of each transaction fee is to be destroyed. The intent of this design is
                                    to<br />retain leader incentive to include as many transactions as possible within the leader-slot time,
                                    while<br />providing an inflation limiting mechanism that protects against "tax evasion" attacks (i.e.
                                    side-channel fee<br />payments).</p>
                                <br />
                                <p>Additionally, the burnt fees can be a consideration in fork selection. In the case of a PoH fork with
                                    a<br />malicious, censoring leader, we would expect the total fees destroyed to be less than a comparable
                                    honest<br />fork, due to the fees lost from censoring. If the censoring leader is to compensate for these
                                    lost protocol<br />fees, they would have to replace the burnt fees on their fork themselves, thus
                                    potentially reducing the<br />incentive to censor in the first place.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
