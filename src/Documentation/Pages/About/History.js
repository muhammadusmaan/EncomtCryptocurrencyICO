import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import Container from "react-bootstrap/Container";
import Style from "./about.css"



export default function History() {
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
                        <div className="container-fluid main-history-container px-lg-5 px-md-5">
                            <div className="main-container">
                                <div className="history-data">
                                    <h2 className="history-heading">History</h2>
                                    <p>
                                        In November of 2017, Anatoly Yakovenko published a whitepaper
                                        describing Proof of History, a technique for keeping time <br /> between
                                        computers that do not trust one another. From Anatoly's previous
                                        experience designing distributed systems at<br /> Qualcomm, Mesosphere
                                        and Dropbox, he knew that a reliable clock makes network
                                        synchronization very simple. When<br /> synchronization is simple the
                                        resulting network can be blazing fast, bound only by network
                                        bandwidth.
                                        <br />
                                        <br />
                                        Anatoly watched as blockchain systems without clocks, such as
                                        Bitcoin and Ethereum, struggled to scale beyond 15 <br />transactions
                                        per second worldwide when centralized payment systems such as Visa
                                        required peaks of 65,000 tps. Without <br />a clock, it was clear they'd
                                        never graduate to being the global payment system or global
                                        supercomputer most had dreamed <br />them to be. When Anatoly solved the
                                        problem of getting computers that don’t trust each other to agree
                                        on time, he knew he <br />had the key to bring 40 years of distributed
                                        systems research to the world of blockchain. The resulting cluster
                                        wouldn't be <br />just 10 times faster, or a 100 times, or a 1,000
                                        times, but 10,000 times faster, right out of the gate!
                                        <br />
                                        <br />
                                        Anatoly's implementation began in a private codebase and was
                                        implemented in the C programming language. Greg<br /> Fitzgerald, who
                                        had previously worked with Anatoly at semiconductor giant Qualcomm
                                        Incorporated, encouraged him to<br /> reimplement the project in the
                                        Rust programming language. Greg had worked on the LLVM compiler
                                        infrastructure, which <br />underlies both the Clang C/C++ compiler as
                                        well as the Rust compiler. Greg claimed that the language's safety
                                        guarantees<br /> would improve software productivity and that its lack
                                        of a garbage collector would allow programs to perform as well as<br />
                                        those written in C. Anatoly gave it a shot and just two weeks
                                        later, had migrated his entire codebase to Rust. Sold. With<br /> plans
                                        to weave all the world's transactions together on a single,
                                        scalable blockchain, Anatoly called the project Loom.
                                        <br />
                                        <br />
                                        On February 13th of 2018, Greg began prototyping the first open
                                        source implementation of Anatoly's whitepaper. The<br /> project was
                                        published to GitHub under the name Silk in the loomprotocol
                                        organization. On February 28th, Greg made his <br />first release,
                                        demonstrating 10 thousand signed transactions could be verified
                                        and processed in just over half a second.<br /> Shortly after, another
                                        former Qualcomm cohort, Stephen Akridge, demonstrated throughput
                                        could be massively improved<br /> by offloading signature verification
                                        to graphics processors. Anatoly recruited Greg, Stephen and three
                                        others to co-found a<br /> company, then called Loom.
                                        <br />
                                        <br />
                                        Around the same time, Ethereum-based project Loom Network sprung
                                        up and many people were confused about whether <br />they were the same
                                        project. The Loom team decided it would rebrand. They chose the
                                        name En Comt, a nod to a small<br /> beach town North of San Diego called
                                        En Comt Beach, where Anatoly, Greg and Stephen lived and surfed for
                                        three years <br />when they worked for Qualcomm. On March 28th, the team
                                        created the En Comt GitHub organization and renamed Greg's<br />
                                        prototype Silk to En Comt.
                                        <br />
                                        <br />
                                        In June of 2018, the team scaled up the technology to run on
                                        cloud-based networks and on July 19th, published a 50-node,<br />
                                        permissioned, public testnet consistently supporting bursts of
                                        250,000 transactions per second. In a later release in<br /> December,
                                        called v0.10 Pillbox, the team published a permissioned testnet
                                        running 150 nodes on a gigabit network and <br />demonstrated soak tests
                                        processing an average of 200 thousand transactions per second with
                                        bursts over 500 thousand. <br />The project was also extended to support
                                        on-chain programs written in the C programming language and run
                                        concurrently <br />in a safe execution environment called BPF.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
