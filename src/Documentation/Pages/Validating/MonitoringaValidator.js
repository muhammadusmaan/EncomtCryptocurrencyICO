import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function MonitoringaValidator() {
    const codeString = `En Comt gossip`;
    const codeString1 = `En Comt balance --lamports`;
    const codeString2 = `En Comt vote-account ~/vote-account-keypair.json`;
    const codeString3 = `# Similar to En Comt-gossip, you should see your validator in the list of cluster nodes
    curl -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getClusterNodes"}' http://api.devnet.En Comt.com
    # If your validator is properly voting, it should appear in the list of "current" vote accounts. If "staked", stake should be > 0
    curl -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getVoteAccounts"}' http://api.devnet.En Comt.com
    # Returns the current leader schedule
    curl -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getLeaderSchedule"}' http://api.devnet.En Comt.com
    # Returns info about the current epoch. slotIndex should progress on subsequent calls.
    curl -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getEpochInfo"}' http://api.devnet.En Comt.com`;
    const [isSidebar, setIsSidebar] = useState(false)


    const styling = {
        backgroundColor: `BLACK`,
        color: `#fff`,
        padding: "1em"
    }
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
                <div className="row justify-content-center m-0" >
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
                            <h1 style={{ fontSize: "3rem" }} >Monitoring a Validator</h1>
                            <br />
                            <h2>Check Gossip</h2>
                            <p>Confirm the IP address and <strong>identity pubkey</strong> of your validator is visible in
                                the gossip network by running:</p>
                            <br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString}
                            </SyntaxHighlighter>
                            <br />

                            <h2>Check Your Balance</h2>
                            <p>Your account balance should decrease by the transaction fee amount as your
                                validator submits votes, and increase after serving as the leader. Pass the
                                <code>--lamports</code> are to observe in finer detail:</p>

                            <br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString1}
                            </SyntaxHighlighter>
                            <br />

                            <h2>Check Vote Activity</h2>

                            <p>The <code>En Comt vote-account</code> command displays the recent voting activity from
                                your validator:</p>

                            <br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString2}
                            </SyntaxHighlighter>
                            <br />

                            <h2>Get Cluster Info</h2>
                            <p>There are several useful JSON-RPC endpoints for monitoring your validator on the
                                cluster, as well as the health of the cluster:</p>
                            <br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString3}
                            </SyntaxHighlighter>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
