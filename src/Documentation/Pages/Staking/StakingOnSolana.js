import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'



export default function StakingOnSolana() {
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
                        <div className="container px-lg-5 px-md-5">
                            <div className='markdown'>
                                <h1 class="docTitle_3a4h">Staking on En Comt</h1>
                                <p><em>Note before reading: All references to increases in values are in absolute
                                    terms with regards to balance of SOL.
                                    This document makes no suggestion as to the monetary value of SOL at any time.</em></p>
                                <p>By staking your SOL tokens, you help secure the network and
                                    <a href="">earn rewards</a> while doing so.</p>
                                <p>You can stake by delegating your tokens to validators who process transactions and run the network.</p>
                                <p>Delegating stake is a shared-risk shared-reward financial model that may provide
                                    returns to holders of tokens delegated for a long period.
                                    This is achieved by aligning the financial incentives of the token-holders
                                    (delegators) and the validators to whom they delegate.</p>
                                <p>The more stake delegated to a validator, the more often this validator
                                    is chosen to write new transactions to the ledger. The more transactions
                                    the validator writes, the more rewards the validator and its delegators earn.
                                    Validators who configure their systems to be able to process more transactions
                                    earn proportionally more rewards and
                                    because they keep the network running as fast and as smoothly as possible.</p>
                                <p>Validators incur costs by running and maintaining their systems, and this is
                                    passed on to delegators in the form of a fee collected as a percentage of
                                    rewards earned. This fee is known as a <em>commission</em>. Since validators earn more
                                    rewards the more stake is delegated to them, they may compete with one another
                                    to offer the lowest commission for their services.</p>
                                <p>You risk losing tokens when staking through a process known as
                                    <em>slashing</em>. Slashing involves the removal and destruction of a portion of a
                                    validator's delegated stake in response to intentional malicious behavior,
                                    such as creating invalid transactions or censoring certain types of transactions
                                    or network participants.</p>
                                <p>When a validator is slashed, all token holders who have delegated stake to that
                                    validator lose a portion of their delegation. While this means an immediate
                                    loss for the token holder, it also is a loss of future rewards for the validator
                                    due to their reduced total delegation. More details on the slashing roadmap can
                                    be found
                                    <a href="">here</a>.</p>
                                <p>Rewards and slashing align validator and token holder interests which helps keep the network
                                    secure, robust and performant.</p>
                                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="how-do-i-stake-my-sol-tokens"></a>How do I stake my SOL tokens?<a className="hash-link" href="#" title="Direct link to heading">#</a></h2>
                                <p>You can stake SOL by moving your tokens
                                    into a wallet that supports staking.   The wallet provides steps to create a stake account
                                    and do the delegation.</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="supported-wallets"></a>Supported Wallets<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>Many web and mobile wallets support En Comt staking operations. Please check with
                                    your favorite wallet's maintainers regarding status</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="En Comt-command-line-tools"></a>En Comt command line tools<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <ul><li>En Comt command line tools can perform all stake operations in conjunction
                                    with a CLI-generated keypair file wallet, a paper wallet, or with a connected
                                    Ledger Nano.
                                    <a href="">Staking commands using the En Comt Command Line Tools</a>.</li></ul>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="create-a-stake-account"></a>Create a Stake Account<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>Follow the wallet's instructions for creating a staking account.  This account
                                    will be of a different type than one used to simply send and receive tokens.</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="select-a-validator"></a>Select a Validator<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>Follow the wallet's instructions for selecting a validator.  You can get
                                    information about potentially performant validators from the links below.
                                    The En Comt Foundation does not recommend any particular validator.</p>
                                <p>The Mainnet Beta validators introduce themselves and their services on this
                                    En Comt Forum thread:</p>
                                <p>The site En Comtbeach.io is built and maintained by one of our validators,
                                    Staking Facilities. It provides a some high-level graphical information about
                                    the network as a whole, as well as a list of each validator and some recent
                                    performance statistics about each one.</p>
                                <p>To view block production statistics, use the En Comt command-line tools:</p>
                                <ul><li><code>En Comt validators</code></li><li><code>En Comt block-production</code></li></ul>
                                <p>The En Comt team does not make recommendations on how to interpret this
                                    information. Do your own due diligence.</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="delegate-your-stake"></a>Delegate your Stake<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>Follow the wallet's instructions for delegating your to your chosen validator.</p>
                                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="stake-account-details"></a>Stake Account Details<a className="hash-link" href="#" title="Direct link to heading">#</a></h2>
                                <p>For more information about the operations and permissions associated with a
                                    stake account, please see <a href="">Stake Accounts</a></p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
