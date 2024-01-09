import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'



export default function StakeAccountStructure() {
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
                                <h1 className="docTitle_3a4h">Stake Account Structure</h1>
                                <p>A stake account on En Comt can be used to delegate tokens to validators on
                                    the network to potentially earn rewards for the owner of the stake account.
                                    Stake accounts are created and managed differently than a traditional wallet
                                    address, known as a <em>system account</em>. A system account is only able to send and
                                    receive SOL from other accounts on the network, whereas a stake account supports
                                    more complex operations needed to manage a delegation of tokens.</p>
                                <p>Stake accounts on En Comt also work differently than those of other Proof-of-Stake
                                    blockchain networks that you may be familiar with. This document describes the
                                    high-level structure and functions of a En Comt stake account.</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="account-address"></a>Account Address<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>Each stake account has a unique address which can be used to look up the account
                                    information in the command line or in any network explorer tools. However,
                                    unlike a wallet address in which the holder of the address's keypair controls
                                    the wallet, the keypair associated with a stake account address does not necessarily have
                                    any control over the account. In fact, a keypair or private key may not even
                                    exist for a stake account's address.</p>
                                <p>The only time a stake account's address has a keypair file is when <a href="">creating
                                    a stake account using the command line tools</a>.
                                    A new keypair file is created first only to ensure that the stake account's
                                    address is new and unique.</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="understanding-account-authorities"></a>Understanding Account Authorities<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>Certain types of accounts may have one or more <em>signing authorities</em>
                                    associated with a given account. An account authority is used to sign certain
                                    transactions for the account it controls. This is different from
                                    some other blockchain networks where the holder of the keypair associated with
                                    the account's address controls all of the account's activity.</p>
                                <p>Each stake account has two signing authorities specified by their respective address,
                                    each of which is authorized to perform certain operations on the stake account.</p>
                                <p>The <em>stake authority</em> is used to sign transactions for the following operations:</p>
                                <ul><li>Delegating stake</li><li>Deactivating the stake delegation</li><li>Splitting the stake account, creating a new stake account with a portion of the
                                    funds in the first account</li><li>Merging two stake accounts into one</li><li>Setting a new stake authority</li></ul>
                                <p>The <em>withdraw authority</em> signs transactions for the following:</p>
                                <ul><li>Withdrawing un-delegated stake into a wallet address</li><li>Setting a new withdraw authority</li><li>Setting a new stake authority</li></ul>
                                <p>The stake authority and withdraw authority are set when the stake account is
                                    created, and they can be changed to authorize a new signing address at any time.
                                    The stake and withdraw authority can be the same address or two different
                                    addresses.</p>
                                <p>The withdraw authority keypair holds more control over the account as it is
                                    needed to liquidate the tokens in the stake account, and can be used to reset
                                    the stake authority if the stake authority keypair becomes lost or compromised.</p>
                                <p>Securing the withdraw authority against loss or theft is of utmost importance
                                    when managing a stake account.</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="multiple-delegations"></a>Multiple Delegations<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>Each stake account may only be used to delegate to one validator at a time.
                                    All of the tokens in the account are either delegated or un-delegated, or in the
                                    process of becoming delegated or un-delegated. To delegate a fraction of your
                                    tokens to a validator, or to delegate to multiple validators, you must create
                                    multiple stake accounts.</p>
                                <p>This can be accomplished by creating multiple stake accounts from a wallet
                                    address containing some tokens, or by creating a single large stake account
                                    and using the stake authority to split the account into multiple accounts
                                    with token balances of your choosing.</p>
                                <p>The same stake and withdraw authorities can be assigned to multiple
                                    stake accounts.</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="merging-stake-accounts"></a>Merging stake accounts<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>Two stake accounts that have the same authorities and lockup can be merged into
                                    a single resulting stake account. A merge is possible between two stakes in the
                                    following states with no additional conditions:</p>
                                <ul><li>two deactivated stakes</li><li>an inactive stake into an activating stake during its activation epoch</li></ul>
                                <p>For the following cases, the voter pubkey and vote credits observed must match:</p>
                                <ul><li>two activated stakes</li><li>two activating accounts that share an activation epoch, during the activation epoch</li></ul>
                                <p>All other combinations of stake states will fail to merge, including all "transient"
                                    states, where a stake is activating or deactivating with a non-zero effective stake.</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="delegation-warmup-and-cooldown"></a>Delegation Warmup and Cooldown<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>When a stake account is delegated, or a delegation is deactivated, the operation
                                    does not take effect immediately.</p>
                                <p>A delegation or deactivation takes several <a href="">epochs</a>
                                    to complete, with a fraction of the delegation becoming active or inactive at
                                    each epoch boundary after the transaction containing the instructions has been
                                    submitted to the cluster.</p>
                                <p>There is also a limit on how much total stake can become delegated or
                                    deactivated in a single epoch, to prevent large sudden changes in stake across
                                    the network as a whole. Since warmup and cooldown are dependent on the behavior
                                    of other network participants, their exact duration is difficult to predict.
                                    Details on the warmup and cooldown timing can be found
                                    <a href="">here</a>.</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="lockups"></a>Lockups<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>Stake accounts can have a lockup which prevents the tokens they hold from being
                                    withdrawn before a particular date or epoch has been
                                    reached. While locked up, the stake account can still be delegated, un-delegated,
                                    or split, and its stake and withdraw authorities can be changed as normal. Only
                                    withdrawal into a wallet address is not allowed.</p>
                                <p>A lockup can only be added when a stake account is first created, but it can be
                                    modified later, by the <em>lockup authority</em> or <em>custodian</em>, the address of which
                                    is also set when the account is created.</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="destroying-a-stake-account"></a>Destroying a Stake Account<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>Like other types of accounts on the En Comt network, a stake account that has a
                                    balance of 0 SOL is no longer tracked. If a stake account is not delegated
                                    and all of the tokens it contains are withdrawn to a wallet address, the account
                                    at that address is effectively destroyed, and will need to be manually
                                    re-created for the address to be used again.</p>
                                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="viewing-stake-accounts"></a>Viewing Stake Accounts<a className="hash-link" href="#" title="Direct link to heading">#</a></h4>
                                <p>Stake account details can be viewed on the <a href="" target="_blank" rel="noopener noreferrer">En Comt Explorer</a>
                                    by copying and pasting an account address into the search bar.</p>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
