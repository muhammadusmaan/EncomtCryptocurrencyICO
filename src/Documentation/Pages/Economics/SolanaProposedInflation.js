import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import Container from "react-bootstrap/Container";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import graph1_1 from "./images/graph1_1.png";
import graph1_2 from "./images/graph1_2.png";
import graph1_3 from "./images/graph1_3.png";

export default function SolanaProposedInflation() {
    const [isSidebar, setIsSidebar] = useState(false)
    const formula1 = `\\% SOL Staked =  \\frac{Total SOL Staked}{Total Current Supply}`;

    useEffect(() => {
        if (window.innerWidth <= 760) {
            setIsSidebar(true);
        }
    }, [])



    const handleClick = () => {
        console.log(!isSidebar)
        return setIsSidebar(!isSidebar)
    }
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
                        <div className="proposed-inflation-schedule-container">
                            <div className="main-container">
                                <Container>
                                    <header>
                                        <h1 className="inflation-schedule-heading">
                                            En Comt's Proposed Inflation Schedule
                                        </h1>
                                    </header>
                                    <br />

                                    <div className="inflation-schedule-data">
                                        <p>
                                            As mentioned above, the network's <em>Inflation Schedule</em> is uniquely
                                            described by three parameters: <em>Initial Inflation Rate</em>,
                                            <em>Dis-inflation Rate</em> and <em>Long-term Inflation Rate</em>. When considering
                                            these numbers, there are many factors to take into account:
                                        </p>
                                        <br />
                                        <ul>
                                            <li>
                                                A large portion of the SOL issued via inflation will be
                                                distributed to stake-holders in proportion to the SOL they have
                                                staked. We want to ensure that the <em>Inflation Schedule</em> design
                                                results in reasonable <em>Staking Yields</em> for token holders who
                                                delegate SOL and for validation service providers (via
                                                commissions taken from <em>Staking Yields</em>).
                                            </li>

                                            <li>
                                                The primary driver of <em>Staked Yield</em> is the amount of SOL staked
                                                divided by the total amount of SOL (% of total SOL staked).
                                                Therefore the distribution and delegation of tokens across
                                                validators are important factors to understand when determining
                                                initial inflation parameters.
                                            </li>
                                            <li>
                                                <a href="url" className="green-text">
                                                    Yield throttling
                                                </a>{" "}
                                                is a current area of research that would impact <em>staking-yields</em>.
                                                This is not taken into consideration in the discussion here or
                                                the modeling below.
                                            </li>
                                            <li>
                                                Overall token issuance - i.e. what do we expect the Current
                                                Total Supply to be in 10 years, or 20 years?
                                            </li>
                                            <li>
                                                Long-term, steady-state inflation is an important consideration
                                                not only for sustainable support for the validator ecosystem and
                                                the En Comt Foundation grant programs, but also should be tuned
                                                in consideration with expected token losses and burning over
                                                time.
                                            </li>

                                            <li>
                                                The rate at which we expect network usage to grow, as a
                                                consideration to the dis-inflationary rate. Over time, we plan
                                                for inflation to drop and expect that usage will grow.
                                            </li>
                                        </ul>
                                        <br />
                                        <p>
                                            Based on these considerations and the community discussions
                                            following the initial {" "}<a href="url" className="green-text">
                                                design
                                            </a>{" "}, the En Comt Foundation proposes the
                                            following Inflation Schedule parameters:
                                        </p>
                                        <br />

                                        <ul>
                                            <li>Initial Inflation Rate: 8%</li>
                                            <li>Dis-inflation Rate: - {" "}15%</li>
                                            <li>Long-term Inflation Rate: 1.5%</li>
                                        </ul>
                                        <br />
                                        <p>
                                            These parameters define the proposed <em>Inflation Schedule</em>. Below we
                                            show implications of these parameters. These plots only show the
                                            impact of inflation issuances given the Inflation Schedule as
                                            parameterized above. They <em>do not account</em> for other factors that
                                            may impact the Total Supply such as fee/rent burning, slashing or
                                            other unforeseen future token destruction events. Therefore, what
                                            is presented here is an <b>upper limit</b> on the amount of SOL issued
                                            via inflation.
                                        </p>
                                        <br />
                                        <div className="graph-proposed-inflation-schedule-container">
                                            <img
                                                className="graph-proposed-inflation-schedule-img"
                                                id="graph-1-1"
                                                src={graph1_1}
                                            ></img>
                                        </div>
                                        <br />
                                        <p>
                                            In the above graph we see the annual inflation rate [%] over
                                            time, given the inflation parameters proposed above.
                                        </p>
                                        <br />
                                        <div className="graph-proposed-inflation-schedule-container">
                                            <img
                                                className="graph-proposed-inflation-schedule-img"
                                                id="graph-1-2"
                                                src={graph1_2}
                                            ></img>
                                        </div>
                                        <br />
                                        <p>
                                            Similarly, here we see the <em>Total Current Supply</em> of SOL [MM] over
                                            time, assuming an initial <em>Total Current Supply</em> of{" "}
                                            <code className="box-text"> 488,587,349 SOL </code>. (i.e. for
                                            this example, taking the <em>Total Current Supply</em> as of{" "}
                                            <code className="box-text"> 2020-01-25</code>. and simulating
                                            inflation starting from that day).
                                        </p>
                                        <br />

                                        <p>
                                            Setting aside validator uptime and commissions, the expected
                                            Staking Yield and Adjusted Staking Yield metrics are then
                                            primarily a function of the % of total SOL staked on the network.
                                            Therefore we can we can model <em>Staking Yield</em>, if we introduce an
                                            additional parameter <em>% of Staked SOL</em>:
                                        </p>
                                        <br />
                                        <div className="math-equation">
                                            <InlineMath math={formula1} /> <br />
                                        </div>
                                        <br />

                                        <p>
                                            This parameter must be estimated because it is a dynamic property
                                            of the token holders and staking incentives. The values of <em>% of
                                                Staked SOL</em> presented here range from 60% {" "} - {" "} 90%, which we feel
                                            covers the likely range we expect to observe, based on feedback
                                            from the investor and validator communities as well as what is
                                            observed on comparable Proof-of-Stake protocols.
                                        </p>
                                        <br />
                                        <div className="graph-proposed-inflation-schedule-container">
                                            <img
                                                className="graph-proposed-inflation-schedule-img"
                                                id="graph-1-3"
                                                src={graph1_3}
                                            ></img>

                                        </div>
                                        <br />
                                        <p>
                                            Again, the above shows an example <em>Staked Yield</em> that a staker might
                                            expect over time on the En Comt network with the <em>Inflation Schedule</em>
                                            as specified. This is an <em>idealized Staked</em> Yield as it neglects
                                            validator uptime impact on rewards, validator commissions,
                                            potential yield throttling and potential slashing incidents. It
                                            additionally ignores that <em>% of Staked SOL</em> is dynamic by design -
                                            the economic incentives set up by this <em>Inflation Schedule</em> are more
                                            clearly seen when <em>Token Dilution</em> is taken into account (see the
                                            Adjusted Staking Yield section below).
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
