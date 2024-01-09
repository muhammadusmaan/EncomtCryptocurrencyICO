import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'

export default function VoteAccountManagement() {
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
                            <h1 style={{ fontSize: "3rem" }} > Vote Account Management</h1>
                            <br />

                            <p>This page describes how to set up an on-chain <em>vote account</em>. Creating a vote
                                account is needed if you plan to run a validator node on En Comt.</p>
                            <br />
                            <h2>Create a Vote Account</h2>
                            <br />
                            <p>A vote account can be created with the create-vote-account command.
                                The vote account can be configured when first created or after the validator is
                                running. All aspects of the vote account can be changed except for the
                                vote account address, which is fixed for the lifetime
                                of the account.</p>

                            <h3>Configure an Existing Vote Account</h3>

                            <ul className="runningValidator"><li>To change the validator identity, use
                                vote-update-validator.
                            </li>
                                <li>To change the vote authority, use
                                    vote-authorize-voter-checked.</li>
                                <li>To change the authorized withdrawer, use vote-authorize-withdrawer-checked.</li>
                                <li>To change the commission, use vote-update-commission.</li>
                            </ul>
                            <br />

                            <h2>Vote Account Structure</h2>
                            <br />
                            <h3>Vote Account Address</h3>
                            <p>A vote account is created at an address that is either the public key of a
                                keypair file, or at a derived address based on a keypair file's public key and
                                a seed string.</p>

                            <p>The address of a vote account is never needed to sign any transactions,
                                but is just used to look up the account information.</p>

                            <p>When someone wants to delegate tokens in a stake account,
                                the delegation command is pointed at the vote account address of the validator
                                to whom the token-holder wants to delegate.</p>
                            <br />

                            <h3>Validator Identity</h3>
                            <p>The <em>validator identity</em> is a system account that is used to pay for all the
                                vote transaction fees submitted to the vote account.
                                Because the validator is expected to vote on most valid blocks it receives,
                                the validator identity account is frequently
                                (potentially multiple times per second) signing transactions and
                                paying fees. For this reason the validator identity keypair must be
                                stored as a "hot wallet" in a keypair file on the same system the validator
                                process is running.</p>

                            <p>Because a hot wallet is generally less secure than an offline or "cold" wallet,
                                the validator operator may choose to store only enough SOL on the identity
                                account to cover voting fees for a limited amount of time, such as a few weeks
                                or months. The validator identity account could be periodically topped off
                                from a more secure wallet.</p>

                            <p>This practice can reduce the risk of loss of funds if the validator node's
                                disk or file system becomes compromised or corrupted.</p>

                            <p>The validator identity is required to be provided when a vote account is created.
                                The validator identity can also be changed after an account is created by using
                                the vote-update-validator command.</p>
                            <br />
                            <h3>Vote Authority</h3>
                            <p>The <em>vote authority</em> keypair is used to sign each vote transaction the validator
                                node wants to submit to the cluster. This doesn't necessarily have to be unique
                                from the validator identity, as you will see later in this document. Because
                                the vote authority, like the validator identity, is signing transactions
                                frequently, this also must be a hot keypair on the same file system as the
                                validator process.</p>

                            <p>The vote authority can be set to the same address as the validator identity.
                                If the validator identity is also the vote authority, only one
                                signature per vote transaction is needed in order to both sign the vote and pay
                                the transaction fee. Because transaction fees on En Comt are assessed
                                per-signature, having one signer instead of two will result in half the transaction
                                fee paid compared to setting the vote authority and validator identity to two
                                different accounts.</p>

                            <p>The vote authority can be set when the vote account is created. If it is not
                                provided, the default behavior is to assign it the same as the validator identity.
                                The vote authority can be changed later with the vote-authorize-voter-checked command.</p>

                            <p>The vote authority can be changed at most once per epoch. If the authority is
                                changed with vote-authorize-voter-checked,
                                this will not take effect until the beginning of the next epoch.
                                To support a smooth transition of the vote signing,
                                <code>En Comt-validator</code> allows the <code>--authorized-voter</code> argument to be specified
                                multiple times. This allows the validator process to keep voting successfully
                                when the network reaches an epoch boundary at which the validator's vote
                                authority account changes.</p>

                            <br />
                            <h3>Authorized Withdrawer</h3>
                            <p>The <em>authorized withdrawer</em> keypair is used to withdraw funds from a vote account
                                using the withdraw-from-vote-account
                                command. Any network rewards a validator earns are deposited into the vote
                                account and are only retrievable by signing with the authorized withdrawer keypair.</p>

                            <p>The authorized withdrawer is also required to sign any transaction to change
                                a vote account's commission, and to change the validator
                                identity on a vote account.</p>

                            <p>Because theft of a authorized withdrawer keypair can give complete control over
                                the operation of a validator to an attacker, is is advised to keep the withdraw
                                authority keypair in an offline/cold wallet in a secure location.  The withdraw
                                authority keypair is not needed during operation of a validator and should not
                                stored on the validator itself.</p>

                            <p>The authorized withdrawer must be set when the vote account is created.  It must
                                not be set to a keypair that is the same as either the validator identity
                                keypair or the vote authority keypair.</p>

                            <p>The authorized withdrawer can be changed later with the
                                vote-authorize-withdrawer-checked
                                command.</p>
                            <br />

                            <h3>Commission</h3>
                            <p><em>Commission</em> is the percent of network rewards earned by a validator that are
                                deposited into the validator's vote account. The remainder of the rewards
                                are distributed to all of the stake accounts delegated to that vote account,
                                proportional to the active stake weight of each stake account.</p>

                            <p>For example, if a vote account has a commission of 10%, for all rewards earned
                                by that validator in a given epoch, 10% of these rewards will be deposited into
                                the vote account in the first block of the following epoch. The remaining 90%
                                will be deposited into delegated stake accounts as immediately active stake.</p>

                            <p>A validator may choose to set a low commission to try to attract more stake
                                delegations as a lower commission results in a larger percentage of rewards
                                passed along to the delegator. As there are costs associated with setting up
                                and operating a validator node, a validator would ideally set a high enough
                                commission to at least cover their expenses.</p>

                            <p>Commission can be set upon vote account creation with the <code>--commission</code> option.
                                If it is not provided, it will default to 100%, which will result in all
                                rewards deposited in the vote account, and none passed on to any delegated
                                stake accounts.</p>

                            <p>Commission can also be changed later with the vote-update-commission command.</p>

                            <p>When setting the commission, only integer values in the set [0-100] are accepted.
                                The integer represents the number of percentage points for the commission, so
                                creating an account with <code>--commission 10</code> will set a 10% commission.</p>
                            <br />

                            <h2>Key Rotation</h2>
                            <br />
                            <p>Rotating the vote account authority keys require special handling when dealing
                                with a live validator.</p>
                            <br />
                            <p>Note that vote account key rotation has no effect on the stake accounts that
                                have been delegate to the vote account. For example it is possible to use key
                                rotation to transfer all authority of a vote account from one entity to another
                                without any impact to staking rewards.</p>
                            <br />

                            <h3>Vote Account Validator Identity</h3>
                            <p>You will need access to the <em>authorized withdrawer</em> keypair for the vote account to
                                change the validator identity. The follow steps assume that
                                <code>~/authorized_withdrawer.json</code> is that keypair.</p>

                            <ol type="1" className="OrderedList"><li>Create the new validator identity keypair, <code>En Comt-keygen new -o ~/new-validator-keypair.json</code>.</li><li>Ensure that the new identity account has been funded, <code>En Comt transfer ~/new-validator-keypair.json 500</code>.</li><li>Run <code>En Comt vote-update-validator ~/vote-account-keypair.json ~/new-validator-keypair.json ~/authorized_withdrawer.json</code>
                                to modify the validator identity in your vote account</li><li>Restart your validator with the new identity keypair for the <code>--identity</code> argument</li></ol>

                            <p><strong>Additional steps are required if your validator has stake.</strong>  The leader
                                schedule is computed two epochs in advance. Therefore if your old validator
                                identity was in the leader schedule, it will remain in the leader schedule for
                                up to two epochs after the validator identity change. If extra steps are not
                                taken your validator will produce no blocks until your new validator identity is
                                added to the leader schedule.</p>

                            <p>After your validator is restarted with the new identity keypair, per step 4,
                                start a second non-voting validator on a different machine with the old identity keypair
                                without providing the <code>--vote-account</code> argument, as well as with the <code>--no-wait-for-vote-to-start-leader</code> argument.</p>

                            <p>This temporary validator should be run for two full epochs. During this time it will:</p>
                            <ul className="runningValidator"><li>Produce blocks for the remaining slots that are assigned to your old validator identity</li><li>Receive the transaction fees and rent rewards for your old validator identity</li></ul>
                            <p>It is safe to stop this temporary validator when your old validator identity is
                                no longer listed in the <code>En Comt leader-schedule</code> output.</p>
                            <br />

                            <h3>
                                Vote Account Authorized Voter
                            </h3>
                            <p>The <em>vote authority</em> keypair may only be changed at epoch boundaries and
                                requires some additional arguments to <code>En Comt-validator</code> for a seamless
                                migration.</p>
                            <ol className="OrderedList"><li>Run <code>En Comt epoch-info</code>. If there is not much time remaining time in the
                                current epoch, consider waiting for the next epoch to allow your validator
                                plenty of time to restart and catch up.</li><li>Create the new vote authority keypair, <code>En Comt-keygen new -o ~/new-vote-authority.json</code>.</li><li>Determine the current <em>vote authority</em> keypair by running <code>En Comt vote-account ~/vote-account-keypair.json</code>. It may be validator's
                                    identity account (the default) or some other keypair. The following steps
                                    assume that <code>~/validator-keypair.json</code> is that keypair.</li><li>Run <code>En Comt vote-authorize-voter-checked ~/vote-account-keypair.json ~/validator-keypair.json ~/new-vote-authority.json</code>.
                                        The new vote authority is scheduled to become active starting at the next epoch.</li><li><code>En Comt-validator</code> now needs to be restarted with the old and new vote
                                            authority keypairs, so that it can smoothly transition at the next epoch. Add
                                            the two arguments on restart: <code>--authorized-voter ~/validator-keypair.json --authorized-voter ~/new-vote-authority.json</code></li><li>After the cluster reaches the next epoch, remove the
                                    <code>--authorized-voter ~/validator-keypair.json</code> argument and restart
                                    <code>En Comt-validator</code>, as the old vote authority keypair is no longer required.</li></ol>

                            <br />

                            <h3>Vote Account Authorized Withdrawer</h3>

                            <p>No special handling or timing considerations are required.
                                Use the <code>En Comt vote-authorize-withdrawer-checked</code> command as needed.</p>

                            <br />
                            <h3>Consider Durable Nonces for a Trustless Transfer of the Authorized Voter or Withdrawer</h3>
                            <p>If the Authorized Voter or Withdrawer is to be transferred to another entity
                                then a two-stage signing process using a Durable Nonce is recommended.</p>

                            <ol className="OrderedList"><li>Entity B creates a durable nonce using <code>En Comt create-nonce-account</code></li><li>Entity B then runs a <code>En Comt vote-authorize-voter-checked</code> or <code>En Comt vote-authorize-withdrawer-checked</code> command, including:</li></ol>

                            <ul className="runningValidator"><li>the <code>--sign-only</code> argument</li><li>the <code>--nonce</code>, <code>--nonce-authority</code>, and <code>--blockhash</code> arguments to specify the nonce particulars</li><li>the address of the Entity A's existing authority, and the keypair for Entity B's new authority</li></ul>

                            <ol className="OrderedList" start="3"><li>When the <code>En Comt vote-authorize-...-checked</code> command successfully executes, it will output transaction signatures that Entity B must share with Entity A</li><li>Entity A then runs a similar <code>En Comt vote-authorize-voter-checked</code> or <code>En Comt vote-authorize-withdrawer-checked</code> command with the following changes:</li></ol>

                            <ul className="runningValidator"><li>the <code>--sign-only</code> argument is removed, and replaced with a <code>--signer</code> argument for each of the signatures provided by Entity B</li><li>the address of Entity A's existing authority is replaced with the corresponding keypair, and the the keypair for Entity B's new authority is replaced with the correponding address</li></ul>

                            <p>On success the authority is now changed without Entity A or B having to reveal keypairs to the other even though both entities signed the transaction.</p>
                            <br />

                            <h3>Close a Vote Account</h3>
                            <p>A vote account can be closed with the close-vote-account command.
                                Closing a vote account withdraws all remaining SOL funds to a supplied recipient address and renders it invalid as a vote account.
                                It is not possible to close a vote account with active stake.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
