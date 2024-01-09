import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import Container from "react-bootstrap/Container";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import graph1 from "./images/graph1.png";
import graph2 from "./images/graph2.png";
import graph3 from "./images/graph3.png";
import graph4 from "./images/graph4.png";
import styles from "./Economics.css"
export default function AdjustStakingYield() {
    const [isSidebar, setIsSidebar] = useState(false)
    const formula1 = `P{sub{us}{(t1)}} `;



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
                        <div className="Adjusted-Staking-Yield-container">
                            <div className="main-container">
                                <Container>
                                    <header>
                                        <h1 className="Staking-heading">Adjusted Staking Yield</h1>
                                        <br />
                                    </header>
                                    <div className="Staking-para-container">
                                        <h2>Token Dilution</h2>
                                        <p class="text">
                                            Similarly we can look at the expected <em>Staked Dilution</em>{" "}
                                            (i.e.
                                            <em> Adjusted Staking Yield</em>) and{" "}
                                            <em>Un-staked Dilution</em> as previously defined. Again,{" "}
                                            <em>dilution</em> in this context is defined as the change in
                                            fractional representation (i.e. ownership) of a set of tokens
                                            within a larger set. In this sense, dilution can be a positive
                                            value: an increase in fractional ownership (staked dilution /{" "}
                                            <em>Adjusted Staking Yield</em>), or a negative value: a
                                            decrease in fractional ownership (un-staked dilution).
                                        </p>
                                        <br />
                                        <p class="text">
                                            We are interested in the relative change in ownership of staked
                                            vs un-staked tokens as the overall token pool increases with
                                            inflation issuance. As discussed, this issuance is distributed
                                            only to staked token holders, increasing the staked token
                                            fractional representation of the <em>Total Current Supply</em>.
                                        </p>
                                        <br />
                                        <p class="text">
                                            Continuing with the same <em>Inflation Schedule</em> parameters
                                            as above, we see the fraction of staked supply grow as shown
                                            below.
                                        </p>
                                        <br />
                                        <div className="graph-staked-supply-container">
                                            <img
                                                className="graph-staked-supply-img"
                                                id="graph-1"
                                                src={graph1}
                                            ></img>
                                        </div>
                                        <br />
                                        <br />
                                        <p>
                                            Due to this relative change in representation, the proportion of
                                            stake of any token holder will also change as a function of the
                                            <em>Inflation Schedule</em> and the proportion of all tokens
                                            that are staked.
                                        </p>
                                        <br />
                                        <p>
                                            Of initial interest, however, is the <em>dilution</em> of{" "}
                                            <em>
                                                {" "}
                                                <b>un-staked</b> tokens
                                            </em>
                                            , or D
                                            <sub>
                                                <i>us</i>
                                            </sub>{" "}
                                            . In the case of un-staked tokens, token dilution is only a
                                            function of the Inflation Schedule because the amount of
                                            un-staked tokens doesn't change over time.
                                        </p>
                                        <br />
                                        <p>
                                            This can be seen by explicitly calculating un-staked dilution as
                                            D
                                            <sub>
                                                <i>us</i>
                                            </sub>
                                            . The un-staked proportion of the token pool at time <em>t</em>{" "}
                                            is P
                                            <sub>
                                                <i>us</i>
                                            </sub>
                                            (t
                                            <sub>
                                                <i>N</i>
                                            </sub>
                                            ) and{" "}
                                            <em>
                                                I<sub>t</sub>{" "}
                                            </em>
                                            is the incremental inflation rate applied between any two
                                            consecutive time points.{" "}
                                            <i>
                                                SOL<sub>us</sub>(t){" "}
                                            </i>
                                            and{" "}
                                            <i>
                                                SOL<sub>total</sub>(t)
                                            </i>{" "}
                                            is the amount of un-staked and total SOL on the network,
                                            respectively, at time <em>t</em>. Therefore{" "}
                                            <i>
                                                P
                                                <sub>
                                                    <i>us</i>
                                                </sub>
                                                (t) = SOL<sub>us</sub>(t){" "}
                                            </i>
                                            and{" "}
                                            <i>
                                                SOL<sub>total</sub>(t)
                                            </i>
                                            .
                                        </p>
                                        <br />
                                        <InlineMath>{formula1}</InlineMath>
                                        <br />
                                        <br />
                                        <p>
                                            However, because inflation issuance only increases the total
                                            amount and the un-staked supply doesn't change:
                                        </p>
                                        <br />
                                        <p id="SOL-equation">
                                            {" "}
                                            <i>
                                                SOL<sub>us</sub>(t
                                            </i>
                                            <sub>2</sub>) ={" "}
                                            <i>
                                                SOL<sub>us</sub>(t
                                            </i>
                                            <sub>1</sub>){" "}
                                        </p>
                                        <br />
                                        <p id="SOL-equation">
                                            {" "}
                                            <i>
                                                SOL<sub>total</sub>(t
                                            </i>
                                            <sub>2</sub>) ={" "}
                                            <i>
                                                SOL<sub>total</sub>(t
                                            </i>
                                            <sub>1</sub>) × (1 +{" "}
                                            <em>
                                                I
                                                <sub>
                                                    t<sub>1</sub>
                                                </sub>
                                            </em>
                                            )
                                        </p>
                                        <br />
                                        <p>
                                            So D
                                            <sub>
                                                <em>us</em>
                                            </sub>{" "}
                                            becomes:
                                        </p>
                                        <br />
                                        <InlineMath>{formula1}</InlineMath>
                                        <br />
                                        <br />
                                        <p>
                                            Or generally, dilution for un-staked tokens over any time frame
                                            undergoing inflation <em>I</em>:
                                        </p>
                                        <br />
                                        <InlineMath>{formula1}</InlineMath>
                                        <br />
                                        <br />
                                        <p>
                                            So as guessed, this dilution is independent of the total
                                            proportion of staked tokens and only depends on inflation rate.
                                            This can be seen with our example <em>Inflation Schedule</em>{" "}
                                            here:
                                        </p>
                                        <br />
                                        <div className="graph-staked-supply-container">
                                            <img
                                                className="graph-staked-supply-img"
                                                id="graph-2"
                                                src={graph2}
                                            ></img>
                                        </div>
                                        <br />
                                        <h2>Estimated Adjusted Staked Yield</h2>
                                        <p class="text">
                                            We can do a similar calculation to determine the dilution of
                                            staked token holders, or as we've defined here as the Adjusted
                                            Staked Yield, keeping in mind that dilution in this context is
                                            an increase in proportional ownership over time. We'll use the
                                            terminology Adjusted Staked Yield to avoid confusion going
                                            forward.
                                        </p>
                                        <br />
                                        <p>
                                            To see the functional form, we calculate,{" "}
                                            <em>
                                                Y<sub>adj</sub>
                                            </em>
                                            , or the <em>Adjusted Staked Yield</em> (to be compared to{" "}
                                            <em>
                                                D<sub>us</sub>
                                            </em>{" "}
                                            the dilution of un-staked tokens above), where{" "}
                                            <em>
                                                P<sub>s</sub>( t )
                                            </em>{" "}
                                            is the staked proportion of token pool at time <em>t</em> and{" "}
                                            <em>
                                                I<sub>t</sub>
                                            </em>{" "}
                                            is the incremental inflation rate applied between any two
                                            consecutive time points. The definition of{" "}
                                            <em>
                                                Y<sub>adj</sub>
                                            </em>{" "}
                                            is therefore:
                                        </p>
                                        <br />
                                        <InlineMath>{formula1}</InlineMath>
                                        <br />
                                        <br />
                                        <p>
                                            As seen in the plot above, the proportion of staked tokens
                                            increases with inflation issuance. Letting{" "}
                                            <i>
                                                SOL<sub>s</sub>(t){" "}
                                            </i>
                                            and{" "}
                                            <i>
                                                SOL<sub>total</sub>(t)
                                            </i>{" "}
                                            represent the amount of staked and total SOL at time <em>t</em>{" "}
                                            respectively:
                                        </p>
                                        <br />
                                        <InlineMath>{formula1}</InlineMath>
                                        <br />
                                        <br />
                                        <p>
                                            Where{" "}
                                            <i>
                                                SOL<sub>total</sub>(t
                                            </i>
                                            <sub>1</sub>) × <em>I(t</em>
                                            <sub>1</sub>) is the additional inflation issuance added to the
                                            staked token pool. Now we can write{" "}
                                            <em>
                                                A<sub>adj</sub>
                                            </em>{" "}
                                            in common terms <em>t</em>
                                            <sub>1</sub> = <em>t</em>:
                                        </p>
                                        <br />
                                        <InlineMath>{formula1}</InlineMath>
                                        <br />
                                        <br />
                                        <p>which simplifies to:</p>
                                        <br />
                                        <InlineMath>{formula1}</InlineMath>
                                        <br />
                                        <br />
                                        <p>
                                            So we see that the <em>Adjusted Staked Yield</em> a function of
                                            the inflation rate and the percent of staked tokens on the
                                            network. We can see this plotted for various staking fractions
                                            here:
                                        </p>{" "}
                                        <br />
                                        <br />
                                        <div className="graph-staked-supply-container">
                                            <img
                                                className="graph-staked-supply-img"
                                                id="graph-3"
                                                src={graph3}
                                            ></img>
                                        </div>
                                        <br />
                                        <br />
                                        <p>
                                            It is also clear that in all cases, dilution of un-staked tokens
                                            {" >"} adjusted staked yield (i.e. dilution of staked tokens).
                                            Explicitly we can look at the{" "}
                                            <em>
                                                relative dilution of un-staked tokens to staked tokens: D
                                                <sub>us</sub> / Y<sub>adj</sub>{" "}
                                            </em>
                                            . Here the relationship to inflation drops out and the relative
                                            dilution, i.e. the impact of staking tokens vs not staking
                                            tokens, is purely a function of the % of the total token supply
                                            staked.
                                        </p>
                                        <p>From above</p>
                                        <br />
                                        <InlineMath>{formula1}</InlineMath>
                                        <br />
                                        <br />
                                        <p>which simplifies as,</p>
                                        <br />
                                        <InlineMath>{formula1}</InlineMath>
                                        <br />
                                        <br />
                                        <p>
                                            Where we can see a primary dependence of the relative dilution
                                            of un-staked tokens to staked tokens is on the function of the
                                            proportion of total tokens staked. As shown above, the
                                            proportion of total tokens staked changes over time (i.e.{" "}
                                            <em>
                                                P<sub>s</sub>
                                            </em>{" "}
                                            ={" "}
                                            <em>
                                                P<sub>s</sub>
                                            </em>{" "}
                                            (t)) due to the re-staking of inflation issuance thus we see
                                            relative dilution grow over time as:
                                        </p>
                                        <br />
                                        <div className="graph-staked-supply-container">
                                            <img
                                                className="graph-staked-supply-img"
                                                id="graph-4"
                                                src={graph4}
                                            ></img>
                                        </div>
                                        <br />
                                        <p class="text">
                                            As might be intuitive, as the total fraction of staked tokens
                                            increases the relative dilution of un-staked tokens grows
                                            dramatically. E.g. with 80% of the network tokens staked, an
                                            un-staked token holder will experience ~ 400% more dilution
                                            than a staked holder.
                                        </p>
                                        <br />
                                        <p>
                                            Again, this represents the change in fractional change in
                                            ownership of staked tokens and illustrates the built-in
                                            incentive for token holder to stake their tokens to earn <em>Staked
                                                Yield</em> and avoid <em>Un-staked Dilution</em>.
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
