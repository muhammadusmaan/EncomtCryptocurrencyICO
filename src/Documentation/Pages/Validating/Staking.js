import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Staking() {
    const [isSidebar, setIsSidebar] = useState(false)
    const codeString = `En Comt catchup ~/validator-keypair.json`;
    const codeString1 = `En Comt-keygen new -o ~/validator-stake-keypair.json`;
    const codeString2 = `En Comt create-stake-account ~/validator-stake-keypair.json 1`;
    const codeString3 = `En Comt delegate-stake ~/validator-stake-keypair.json ~/vote-account-keypair.json`;
    const codeString4 = `En Comt delegate-stake ~/validator-stake-keypair.json ~/some-other-vote-account-keypair.json`;
    const codeString5 = `  // Request
    curl -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getEpochInfo"}' http://localhost:8899
  
    // Result
    {"jsonrpc":"2.0","result":{"epoch":3,"slotIndex":126,"slotsInEpoch":256},"id":1}`;
    const codeString6 = `En Comt deactivate-stake ~/validator-stake-keypair.json`;


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
                            <h1 style={{ fontSize: "3rem" }} >Staking</h1>
                            <br />
                            <p><strong>By default your validator will have no stake.</strong> This means it will be
                                ineligible to become leader.</p>
                            <br />

                            <h2>Monitoring Catch Up</h2>

                            <p>To delegate stake, first make sure your validator is running and has caught up
                                to the cluster. It may take some time to catch up after your validator boots.
                                Use the <code>catchup</code> command to monitor your validator through this process:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString}
                            </SyntaxHighlighter>
                            <br />
                            <p>Until your validator has caught up, it will not be able to vote successfully and
                                stake cannot be delegated to it.</p>

                            <p>Also if you find the cluster's slot advancing faster than yours, you will likely
                                never catch up. This typically implies some kind of networking issue between
                                your validator and the rest of the cluster.</p>
                            <br />
                            <h2>Create Stake Keypair</h2>

                            <p>If you haven’t already done so, create a staking keypair. If you have completed
                                this step, you should see the “validator-stake-keypair.json” in your En Comt
                                runtime directory.</p>
                            <br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString1}
                            </SyntaxHighlighter>
                            <br />
                            <h2>Delegate Stake</h2>
                            <p>Now delegate 1 SOL to your validator by first creating your stake account:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString2}
                            </SyntaxHighlighter>
                            <p>and then delegating that stake to your validator:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString3}
                            </SyntaxHighlighter>

                            <blockquote><p>Don’t delegate your remaining SOL, as your validator will use those tokens to vote.</p></blockquote>

                            <p>Stakes can be re-delegated to another node at any time with the same command,
                                but only one re-delegation is permitted per epoch:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString4}
                            </SyntaxHighlighter>

                            <p>Assuming the node is voting, now you're up and running and generating validator
                                rewards. Rewards are paid automatically on epoch boundaries.</p>
                            <p>The rewards lamports earned are split between your stake account and the vote
                                account according to the commission rate set in the vote account. Rewards can
                                only be earned while the validator is up and running. Further, once staked, the
                                validator becomes an important part of the network. In order to safely remove a
                                validator from the network, first deactivate its stake.</p>

                            <p>At the end of each slot, a validator is expected to send a vote transaction.
                                These vote transactions are paid for by lamports from a validator's identity
                                account.</p>

                            <p>This is a normal transaction so the standard transaction fee will apply. The
                                transaction fee range is defined by the genesis block. The actual fee will
                                fluctuate based on transaction load. You can determine the current fee via the
                                RPC API “getRecentBlockhash” before submitting a transaction.</p>
                            <br />

                            <h2>Validator Stake Warm-up</h2>

                            <p>To combat various attacks on consensus, new stake delegations are subject to
                                a <a href="/staking/stake-accounts#delegation-warmup-and-cooldown">warm-up</a>
                                period.</p>
                            <p>Monitor a validator's stake during warmup by:</p>

                            <ul className="runningValidator"><li>View your vote account:<code>En Comt vote-account ~/vote-account-keypair.json</code> This displays the current state of all the votes the validator has submitted to the network.</li>
                                <li>View your stake account, the delegation preference and details of your stake:<code>En Comt stake-account ~/validator-stake-keypair.json</code></li>
                                <li><code>En Comt validators</code> displays the current active stake of all validators, including yours</li>
                                <li><code>En Comt stake-history</code> shows the history of stake warming up and cooling down over recent epochs</li>
                                <li>Look for log messages on your validator indicating your next leader slot: <code>[2019-09-27T20:16:00.319721164Z INFO En Comt_core::replay_stage] &lt;VALIDATOR_IDENTITY_PUBKEY&gt; voted and reset PoH at tick height ####. My next leader slot is ####</code></li>
                                <li>Once your stake is warmed up, you will see a stake balance listed for your validator by running <code>En Comt validators</code></li>
                            </ul>
                            <br />
                            <h2>Monitor Your Staked Validator</h2>
                            <p>Confirm your validator becomes a leader</p>

                            <ul className="runningValidator"><li>After your validator is caught up, use the <code>En Comt balance</code> command to monitor the earnings as your validator is selected as leader and collects transaction fees</li>
                                <li>En Comt nodes offer a number of useful JSON-RPC methods to return information about the network and your validator's participation. Make a request by using curl (or another http client of your choosing), specifying the desired method in JSON-RPC-formatted data. For example:</li>
                            </ul>
                            <br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString5}
                            </SyntaxHighlighter>
                            <br />
                            <p>Helpful JSON-RPC methods:</p>

                            <ul className="runningValidator"><li><code>getEpochInfo</code>An epoch is the time, i.e. number of slots, for which a leader schedule is valid. This will tell you what the current epoch is and how far into it the cluster is.</li>
                                <li><code>getVoteAccounts</code> This will tell you how much active stake your validator currently has. A % of the validator's stake is activated on an epoch boundary. You can learn more about staking on En Comt.</li>
                                <li><code>getLeaderSchedule</code> At any given moment, the network expects only one validator to produce ledger entries. The validator currently selected to produce ledger entries is called the “leader”. This will return the complete leader schedule (on a slot-by-slot basis) for currently activated stake, the identity pubkey will show up 1 or more times here.</li>
                            </ul>
                            <br />

                            <h2>Deactivating Stake</h2>
                            <p>Before detaching your validator from the cluster, you should deactivate the
                                stake that was previously delegated by running:</p>
                            <br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString6}
                            </SyntaxHighlighter>
                            <br />

                            <p>Stake is not deactivated immediately and instead cools down in a similar fashion
                                as stake warm up. Your validator should remain attached to the cluster while
                                the stake is cooling down. While cooling down, your stake will continue to earn
                                rewards. Only after stake cooldown is it safe to turn off your validator or
                                withdraw it from the network. Cooldown may take several epochs to complete,
                                depending on active stake and the size of your stake.</p>

                            <p>Note that a stake account may only be used once, so after deactivation, use the
                                cli's <code>withdraw-stake</code> command to recover the previously staked lamports.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
