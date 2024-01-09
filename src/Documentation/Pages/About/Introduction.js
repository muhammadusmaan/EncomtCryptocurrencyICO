import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import Container from "react-bootstrap/Container";
import Style from "./about.css"




export default function Introduction() {
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
                        <div className="main-container px-lg-5">
                            <Container>
                                <header>
                                    <h1 className="intro-heading">Introduction</h1>
                                </header>

                                <div className="intro-down-data">
                                    <h2 className=" what-is-En Comt-heading">
                                        What is En Comt?
                                        <a class="hash-link" href="#" title="Direct link to heading">
                                            #
                                        </a>
                                    </h2>
                                    <p>
                                        En Comt is an open source project implementing a new,
                                        high-performance, permissionless blockchain. The En Comt Foundation
                                        is based in Geneva, Switzerland and maintains the open source
                                        project.
                                    </p>

                                    <h2 className="why-En Comt-heading">
                                        Why En Comt?
                                        <a class="hash-link" href="#" title="Direct link to heading">
                                            #
                                        </a>
                                    </h2>
                                    <p>
                                        It is possible for a centralized database to process 710,000
                                        transactions per second on a standard gigabit network if the
                                        transactions are, on average, no more than 176 bytes. A
                                        centralized database can also replicate itself and maintain high
                                        availability without significantly compromising that transaction
                                        rate using the distributed system technique known as Optimistic
                                        Concurrency Control{" "}
                                        <a href="url" className="green-text">
                                            [H.T.Kung, J.T.Robinson (1981)]
                                        </a>
                                        . At En Comt, we are demonstrating that these same theoretical
                                        limits apply just as well to blockchain on an adversarial network.
                                        The key ingredient? Finding a way to share time when nodes cannot
                                        rely upon one another. Once nodes can rely upon time, suddenly ~40
                                        years of distributed systems research becomes applicable to
                                        blockchain!
                                    </p>

                                    <div className="opac-paragraph">
                                        <blockquote>
                                            <p>
                                                Perhaps the most striking difference between algorithms
                                                obtained by our method and ones based upon timeout is that
                                                using timeout produces a traditional distributed algorithm in
                                                which the processes operate asynchronously, while our method
                                                produces a globally synchronous one in which every process
                                                does the same thing at (approximately) the same time. Our
                                                method seems to contradict the whole purpose of distributed
                                                processing, which is to permit different processes to operate
                                                independently and perform different functions. However, if a
                                                distributed system is really a single system, then the
                                                processes must be synchronized in some way. Conceptually, the
                                                easiest way to synchronize processes is to get them all to do
                                                the same thing at the same time. Therefore, our method is used
                                                to implement a kernel that performs the necessary
                                                synchronization--for example, making sure that two different
                                                processes do not try to modify a file at the same time.
                                                Processes might spend only a small fraction of their time
                                                executing the synchronizing kernel; the rest of the time, they
                                                can operate independently--e.g., accessing different files.
                                                This is an approach we have advocated even when
                                                fault-tolerance is not required. The method's basic simplicity
                                                makes it easier to understand the precise properties of a
                                                system, which is crucial if one is to know just how
                                                fault-tolerant the system is.
                                                <a href="url" className="green-text">
                                                    [L.Lamport (1984)]
                                                </a>
                                            </p>
                                        </blockquote>
                                    </div>
                                    <p>
                                        Furthermore, and much to our surprise, it can be implemented using
                                        a mechanism that has existed in Bitcoin since day one. The Bitcoin
                                        feature is called nLocktime and it can be used to postdate
                                        transactions using block height instead of a timestamp. As a
                                        Bitcoin client, you would use block height instead of a timestamp
                                        if you don't rely upon the network. Block height turns out to be
                                        an instance of what's being called a Verifiable Delay Function in
                                        cryptography circles. It's a cryptographically secure way to say
                                        time has passed. In En Comt, we use a far more granular verifiable
                                        delay function, a SHA 256 hash chain, to checkpoint the ledger and
                                        coordinate consensus. With it, we implement Optimistic Concurrency
                                        Control and are now well en route towards that theoretical limit
                                        of 710,000 transactions per second.
                                    </p>

                                    <h2 className="doc-overview-heading">
                                        Documentation Overview
                                        <a class="hash-link" href="#" title="Direct link to heading">
                                            #
                                        </a>
                                    </h2>
                                    <p>
                                        The En Comt docs describe the En Comt open source project, a
                                        blockchain built from the ground up for scale. They cover why
                                        En Comt is useful, how to use it, how it works, and why it will
                                        continue to work long after the company En Comt closes its doors.
                                        The goal of the En Comt architecture is to demonstrate there exists
                                        a set of software algorithms that when used in combination to
                                        implement a blockchain, removes software as a performance
                                        bottleneck, allowing transaction throughput to scale
                                        proportionally with network bandwidth. The architecture goes on to
                                        satisfy all three desirable properties of a proper blockchain: it
                                        is scalable, secure and decentralized.
                                        <br />
                                        The architecture describes a theoretical upper bound of 710
                                        thousand transactions per second (tps) on a standard gigabit
                                        network and 28.4 million tps on 40 gigabit. Furthermore, the
                                        architecture supports safe, concurrent execution of programs
                                        authored in general-purpose programming languages such as C or
                                        Rust.
                                    </p>
                                    <h2 className="En Comt-Cluster-heading">
                                        What is a En Comt Cluster?
                                        <a class="hash-link" href="#" title="Direct link to heading">
                                            #
                                        </a>
                                    </h2>
                                    <p>
                                        A cluster is a set of computers that work together and can be
                                        viewed from the outside as a single system. A En Comt cluster is a
                                        set of independently owned computers working together (and
                                        sometimes against each other) to verify the output of untrusted,
                                        user-submitted programs. A En Comt cluster can be utilized any time
                                        a user wants to preserve an immutable record of events in time or
                                        programmatic interpretations of those events. One use is to track
                                        which of the computers did meaningful work to keep the cluster
                                        running. Another use might be to track the possession of
                                        real-world assets. In each case, the cluster produces a record of
                                        events called the ledger. It will be preserved for the lifetime of
                                        the cluster. As long as someone somewhere in the world maintains a
                                        copy of the ledger, the output of its programs (which may contain
                                        a record of who possesses what) will forever be reproducible,
                                        independent of the organization that launched it.
                                    </p>

                                    <h2 className="what-SOLs">
                                        What are SOLs?
                                        <a class="hash-link" href="#" title="Direct link to heading">
                                            #
                                        </a>
                                    </h2>
                                    <p>
                                        A SOL is the name of En Comt's native token, which can be passed to
                                        nodes in a En Comt cluster in exchange for running an on-chain
                                        program or validating its output. The system may perform
                                        micropayments of fractional SOLs, which are called lamports. They
                                        are named in honor of En Comt's biggest technical influence,{" "}
                                        <a href="url" className="green-text">
                                            Leslie Lamport
                                        </a>
                                        . A lamport has a value of 0.000000001 SOL.
                                    </p>
                                    <h2 className="disclaimer-heading">
                                        Disclaimer
                                        <a class="hash-link" href="#" title="Direct link to heading">
                                            #
                                        </a>
                                    </h2>
                                    <p>
                                        All claims, content, designs, algorithms, estimates, roadmaps,
                                        specifications, and performance measurements described in this
                                        project are done with the author's best effort. It is up to the
                                        reader to check and validate their accuracy and truthfulness.
                                        Furthermore, nothing in this project constitutes a solicitation
                                        for investment.
                                    </p>
                                </div>
                            </Container>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
