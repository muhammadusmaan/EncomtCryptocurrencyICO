import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import { Style } from './validating.css'

export default function ValidatorRequirements() {
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
                <div className="row mx-0 justify-content-center m-0" >
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
                            <h1 style={{ fontSize: "3rem" }} >Validator Requirements</h1>
                            <br />
                            <h2>Minimum SOL requirements</h2>

                            <br />
                            <p>There is no strict minimum amount of SOL required to run a validator on En Comt.</p>
                            <p>However in order to participate in consensus, a vote account is required which
                                has a rent-exempt reserve of 0.02685864 SOL. Voting also requires sending a vote
                                transaction for each block the validator agrees with, which can cost up to
                                1.1 SOL per day.</p>
                            <br />
                            <h2>Hardware Recommendations</h2>
                            <br />

                            <ul>
                                <li className="runningValidator">CPU
                                    <ul  >
                                        <li>12 cores / 24 threads, or more</li>
                                        <li>2.8GHz, or faster</li>
                                        <li>AVX2 instruction support (to use official release binaries, self-compile
                                            otherwise)</li>
                                        <li>Support for AVX512f and/or SHA-NI instructions is helpful</li>
                                        <li>The AMD Zen3 series is popular with the validator community</li>
                                    </ul>
                                </li>

                                <li className="runningValidator">RAM
                                    <ul>
                                        <li>128GB, or more</li>
                                        <li>Motherboard with 256GB capacity suggested</li>
                                    </ul>
                                </li>
                                <li className="runningValidator">Disk<ul>
                                    <li>PCIe Gen3 x4 NVME SSD, or better</li>
                                    <li>Accounts: 500GB, or larger. High TBW (Total Bytes Written)</li>
                                    <li>Ledger: 1TB or larger. High TBW suggested</li><li>OS: (Optional) 500GB, or larger. SATA OK</li><li>The OS may be installed on the ledger disk, though testing has shown better
                                        performance with the ledger on its own disk</li><li>Accounts and ledger <em>can</em> be stored on the same disk, however due to high
                                            IOPS, this is not recommended</li><li>The Samsung 970 and 980 Pro series SSDs are popular with the validator community</li></ul></li>
                                <li className="runningValidator">GPUs<ul><li>Not strictly necessary at this time</li><li>Motherboard and power supply speced to add one or more high-end GPUs in the
                                    future suggested</li></ul></li></ul>

                            <br />
                            <h3>PRC Node Recommendations</h3>

                            <br />
                            <p>The hardware recommendations above should be considered
                                bare minimums if the validator is intended to be employed as an RPC node. To provide
                                full functionality and improved reliability, the following adjustments should be
                                made.</p>

                            <ul><li className="runningValidator">CPU<ul><li>16 cores / 32 threads, or more</li></ul></li>
                                <li className="runningValidator">RAM<ul><li>256 GB, or more</li></ul></li>
                                <li className="runningValidator">Disk<ul><li>Consider a larger ledger disk if longer transaction history is required</li><li>Accounts and ledger should not be stored on the same disk</li></ul></li></ul>

                            <br />
                            <h2>Virtual machines on Cloud Platforms</h2>
                            <br />

                            <p>However, it may be convenient to run non-voting api nodes on VM instances for
                                your own internal usage. This use case includes exchanges and services built on
                                En Comt.</p>

                            <p>In fact, the mainnet-beta validators operated by the team are currently
                                (Mar. 2021) run on GCE <code>n2-standard-32</code> (32 vCPUs, 128 GB memory) instances with
                                2048 GB SSD for operational convenience.</p>

                            <p>For other cloud platforms, select instance types with similar specs.</p>
                            <p>Also note that egress internet traffic usage may turn out to be high,
                                especially for the case of running staked validators.</p>
                            <br />

                            <h2>Docker</h2>
                            <p>Running validator for live clusters (including mainnet-beta) inside Docker is
                                not recommended and generally not supported. This is due to concerns of general
                                Docker's containerzation overhead and resultant performance degradation unless
                                specially configured.</p>

                            <p>We use Docker only for development purposes. Docker Hub contains images for all
                                releases at <a>EncomtLabs</a>.</p>

                            <br />
                            <h2>Software</h2>
                            <br />
                            <ul><li>We build and run on Ubuntu 20.04.</li><li>See <a href="/cli/install-En Comt-cli-tools">Installing En Comt</a> for the current En Comt software release.</li></ul>
                            <br />

                            <p>Prebuilt binaries are available for Linux x86_64 on CPUs supporting AVX2 (Ubuntu 20.04 recommended).
                                MacOS or WSL users may build from source.</p>
                            <br />

                            <h2>Networking</h2>
                            <br />

                            <p>Internet service should be at least 300Mbit/s symmetric, commercial. 1GBit/s preferred</p>
                            <br />
                            <h3>Port Forwarding</h3>
                            <br />
                            <p>The following ports need to be open to the internet for both inbound and outbound</p>
                            <br />
                            <p>It is not recommended to run a validator behind a NAT. Operators who choose to
                                do so should be comfortable configuring their networking equipment and debugging
                                any traversal issues on their own.</p>
                            <br />
                            <h4>Required</h4>
                            <ul><li className="runningValidator">8000-10000 TCP/UDP - P2P protocols (gossip, turbine, repair, etc). This can
                                be limited to any free 13 port range with <code>--dynamic-port-range</code></li></ul>

                            <br />
                            <h4>Optional</h4>
                            <p>For security purposes, it is not suggested that the following ports be open to
                                the internet on staked, mainnet-beta validators.</p>
                            <ul ><li className="runningValidator">8899 TCP - JSONRPC over HTTP. Change with `--rpc-port RPC_PORT``</li><li className="runningValidator">8900 TCP - JSONRPC over Websockets. Derived. Uses <code>RPC_PORT + 1</code></li></ul>
                            <br />
                            <h2>GPU Requirements</h2>
                            <p>CUDA is required to make use of the GPU on your system. The provided En Comt
                                release binaries are built on Ubuntu 20.04 with <a href="https://developer.nvidia.com/cuda-toolkit-archive" target="_blank" rel="noopener noreferrer">CUDA Toolkit 10.1 update 1</a>. If your machine is using
                                a different CUDA version then you will need to rebuild from source.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
