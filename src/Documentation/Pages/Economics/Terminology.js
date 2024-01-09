import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import Container from "react-bootstrap/Container";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";


export default function Terminology() {
    const [isSidebar, setIsSidebar] = useState(false)
    const formula1 = `Staking Yield = Inflation Rate × Validator Uptime × `;
    const formula2 = `(1 -Validator Fee) × (\\frac{1}{\\% SOL Staked})`;
    const formula3 = `\\% SOL Staked =  (\\frac{Total SOL Staked}{Total Current Supply})`;




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
                        <div className="support-troubleshoot-container">
                            <div className="main-container">
                                <Container>
                                    <header>
                                        <h1 className="terminology-heading">Terminology</h1>
                                        <br />
                                    </header>
                                    <div className="terminology-para-container">
                                        <p class="text">
                                            Many terms are thrown around when discussing inflation and the
                                            related components (e.g. rewards/yield/interest), we try to
                                            define and clarify some commonly used concept here:
                                        </p>
                                        <h2>Total Current Supply [SOL]</h2>

                                        <p class="text">
                                            The total amount of tokens (locked or unlocked) that have been
                                            generated (via genesis block or protocol inflation) minus any
                                            tokens that have been burnt (via transaction fees or other
                                            mechanism) or slashed. At network launch, 500,000,000 SOL were
                                            instantiated in the genesis block. Since then the Total Current
                                            Supply has been reduced by the burning of transaction fees and a
                                            planned token reduction event. En Comt’s
                                            <em> Total Current Supply </em>can be found at{" "}
                                            <a href="url" className="green-text">
                                                https://explorer.En Comt.com/supply
                                            </a>
                                        </p>

                                        <h2>Inflation Rate [%]</h2>

                                        <p class="text">
                                            The En Comt protocol will automatically create new tokens on a
                                            predetermined inflation schedule (discussed below). The
                                            <em>Inflation Rate</em> [%] is the annualized growth rate of the <em>Total
                                                Current Supply</em> at any point in time.
                                            <br />
                                        </p>

                                        <h2>Inflation Schedule</h2>

                                        <p class="text">
                                            A deterministic description of token issuance over time. The
                                            En Comt Foundation is proposing a dis-inflationary{" "}
                                            <em>Inflation Schedule</em>. I.e. Inflation starts at its
                                            highest value, the rate reduces over time until stabilizing at a
                                            predetermined long-term inflation rate (see discussion below).
                                            This schedule is completely and uniquely parameterized by three
                                            numbers:
                                        </p>
                                        <br />

                                        <ul>
                                            <li>
                                                <b>Initial Inflation Rate [%]</b>: The starting{" "}
                                                <em>Inflation Rate</em> for when inflation is first enabled.
                                                Token issuance rate can only decrease from this point.
                                            </li>

                                            <li>
                                                <b>Dis-inflation Rate [%]</b>: The rate at which the{" "}
                                                <em>Inflation Rate</em> is reduced.
                                            </li>

                                            <li>
                                                <b>Long-term Inflation Rate [%]</b>: The stable, long-term{" "}
                                                <em>Inflation Rate</em> to be expected.
                                            </li>
                                        </ul>

                                        <h2>Effective Inflation Rate [%]</h2>

                                        <p class="text">
                                            The inflation rate actually observed on the En Comt network after
                                            accounting for other factors that might decrease the{" "}
                                            <em>Total Current Supply</em>. Note that it is not possible for
                                            tokens to be created outside of what is described by the{" "}
                                            <em>Inflation Schedule.</em> <br />
                                            <br />
                                            <ul>
                                                <li>
                                                    While the <em>Inflation Schedule</em>determines how the
                                                    protocol issues SOL, this neglects the concurrent
                                                    elimination of tokens in the ecosystem due to various
                                                    factors. The primary token burning mechanism is the burning
                                                    of a portion of each transaction fee. 50% of each
                                                    transaction fee is burned, with the remaining fee retained
                                                    by the validator that processes the transaction.
                                                </li>
                                                <li>
                                                    Additional factors such as loss of private keys and slashing
                                                    events should also be considered in a holistic analysis of
                                                    the <em>Effective Inflation Rate.</em> For example, it’s
                                                    estimated that 10 − 20% of all BTC have been lost and are
                                                    unrecoverable and that networks may experience similar
                                                    yearly losses at the rate of 1 − 2%.
                                                </li>
                                            </ul>
                                        </p>
                                        <h2>Staking Yield [%]</h2>

                                        <p class="text">
                                            The rate of return (aka interest) earned on SOL staked on the
                                            network. It is often quoted as an annualized rate (e.g. "the
                                            network <em>staking yield</em> is currently 10% per year").{" "}
                                        </p>
                                        <ul>
                                            <li>
                                                Staking yield is of great interest to validators and token
                                                holders who wish to delegate their tokens to avoid token
                                                dilution due to inflation (the extent of which is discussed
                                                below).
                                            </li>
                                            <li>
                                                100% of inflationary issuances are to be distributed to staked
                                                token-holders in proportion to their staked SOL and to
                                                validators who charge a commission on the rewards earned by
                                                their delegated SOL.
                                            </li>
                                            <ul>
                                                <li>
                                                    There may be future consideration for an additional split of
                                                    inflation issuance with the introduction of Archivers into
                                                    the economy. Archivers are network participants who provide
                                                    a decentralized storage service and should also be
                                                    incentivized with token distribution from inflation
                                                    issuances for this service. - Similarly, early designs
                                                    specified a fixed percentage of inflationary issuance to be
                                                    delivered to the Foundation treasury for operational
                                                    expenses and future grants. However, inflation will be
                                                    launching without any portion allocated to the Foundation.
                                                </li>
                                            </ul>

                                            <li>
                                                Staking yield can be calculated from the Inflation Schedule
                                                along with the fraction of the Total Current Supply that is
                                                staked at any given time. The explicit relationship is given
                                                by:
                                            </li>
                                        </ul>




                                        <div className="math-equation">
                                            <InlineMath math={formula1} /> <br />
                                            <InlineMath math={formula2} /> <br />
                                            <text className="equation-text">where:</text> <br />
                                            <InlineMath math={formula3} /> <br />
                                        </div>




                                        <br />
                                        <h2>Token Dilution [%]</h2>

                                        <p class="text">
                                            Dilution is defined here as the change in proportional
                                            representation of a set of tokens within a larger set due to the
                                            introduction of new tokens. In practical terms, we discuss the
                                            dilution of staked or un-staked tokens due to the introduction
                                            and distribution of inflation issuance across the network. As
                                            will be shown below, while dilution impacts every token holder,
                                            the <em>relative</em> dilution between staked and un-staked
                                            tokens should be the primary concern to un-staked token holders.
                                            Staking tokens, which will receive their proportional
                                            distribution of inflation issuance, should assuage any dilution
                                            concerns for staked token holders. I.e. dilution from
                                            'inflation' is offset by the distribution of new tokens to
                                            staked token holders, nullifying the 'dilutive' effects of the
                                            inflation for that group. <br />
                                        </p>

                                        <h2>Adjusted Staking Yield [%]</h2>

                                        <p class="text">
                                            A complete appraisal of earning potential from staking tokens
                                            should take into account staked <em>Token Dilution</em> and its
                                            impact on the <em>Staking Yield</em>. For this, we define the{" "}
                                            <em>Adjusted Staking Yield</em> as the change in fractional
                                            token supply ownership of staked tokens due to the distribution
                                            of inflation issuance. I.e. the positive dilutive effects of
                                            inflation.
                                            <br />
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
