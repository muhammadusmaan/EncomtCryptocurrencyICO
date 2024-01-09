import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'

export default function PerformanceMetrics() {
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
                <div className="row justify-content-center m-0">
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
                            <h1 style={{ fontSize: "3rem" }} >Performance Metrics</h1>
                            <br />
                            <p>Solana cluster performance is measured as average number of transactions per second that the network can sustain (TPS). And, how long it takes for a transaction to be confirmed by super majority of the cluster (Confirmation Time).</p>
                            <p>Each cluster node maintains various counters that are incremented on certain events. These counters are periodically uploaded to a cloud based database. Solana's metrics dashboard fetches these counters, and computes the performance metrics and displays it on the dashboard.</p>

                            <h2><a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_2LWZ" id="tps"></a>TPS<a class="hash-link" href="#tps" title="Direct link to heading">#</a></h2>
                            <p>Each node's bank runtime maintains a count of transactions that it has processed. The dashboard first calculates the median count of transactions across all metrics enabled nodes in the cluster. The median cluster transaction count is then averaged over a 2 second period and displayed in the TPS time series graph. The dashboard also shows the Mean TPS, Max TPS and Total Transaction Count stats which are all calculated from the median transaction count.</p>
                            
                            <h2><a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_2LWZ" id="confirmation-time"></a>Confirmation Time<a class="hash-link" href="#confirmation-time" title="Direct link to heading">#</a></h2>
                            <p>Each validator node maintains a list of active ledger forks that are visible to the node. A fork is considered to be frozen when the node has received and processed all entries corresponding to the fork. A fork is considered to be confirmed when it receives cumulative super majority vote, and when one of its children forks is frozen.</p>
                            <p>The node assigns a timestamp to every new fork, and computes the time it took to confirm the fork. This time is reflected as validator confirmation time in performance metrics. The performance dashboard displays the average of each validator node's confirmation time as a time series graph.</p>

                            <h2><a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_2LWZ" id="hardware-setup"></a>Hardware setup<a class="hash-link" href="#hardware-setup" title="Direct link to heading">#</a></h2>

                            <p>The validator software is deployed to GCP n1-standard-16 instances with 1TB pd-ssd disk, and 2x Nvidia V100 GPUs. These are deployed in the us-west-1 region.</p>
                            <p>solana-bench-tps is started after the network converges from a client machine with n1-standard-16 CPU-only instance with the following arguments: <code>--tx\_count=50000 --thread-batch-sleep 1000</code></p>
                            <p>TPS and confirmation metrics are captured from the dashboard numbers over a 5 minute average of when the bench-tps transfer stage begins.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
