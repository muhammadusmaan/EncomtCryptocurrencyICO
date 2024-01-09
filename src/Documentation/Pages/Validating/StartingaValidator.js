import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function StartingaValidator() {
    useEffect(() => {
        if (window.innerWidth <= 760) {
            setIsSidebar(true);
        }
    }, [])
    const codeString = `En Comt config set --url http://api.devnet.En Comt.com`
    const codeString1 = `En Comt transaction-count`
    const codeString2 = `sudo $(command -v En Comt-sys-tuner) --user $(whoami) > sys-tuner.log 2>&1 &`
    const codeString3 = `sudo bash -c "cat >/etc/sysctl.d/21-En Comt-validator.conf <<EOF
    # Increase UDP buffer sizes
    net.core.rmem_default = 134217728
    net.core.rmem_max = 134217728
    net.core.wmem_default = 134217728
    net.core.wmem_max = 134217728
    
    # Increase memory mapped files limit
    vm.max_map_count = 1000000
    
    # Increase number of allowed open file descriptors
    fs.nr_open = 1000000
    EOF"`
    const codeString4 = `sudo sysctl -p /etc/sysctl.d/21-En Comt-validator.conf`
    const codeString5 = `LimitNOFILE=1000000`
    const codeString6 = `DefaultLimitNOFILE=1000000`
    const codeString7 = `sudo systemctl daemon-reload`
    const codeString8 = `sudo bash -c "cat >/etc/security/limits.d/90-En Comt-nofiles.conf <<EOF
    # Increase process file descriptor count limit
    * - nofile 1000000
    EOF"`
    const codeString9 = `### Close all open sessions (log out then, in again) ###`
    const codeString10 = `En Comt-keygen new -o ~/validator-keypair.json`
    const codeString11 = `En Comt-keygen pubkey ~/validator-keypair.json`
    const codeString12 = `En Comt-keygen new --no-outfile`
    const codeString13 = `En Comt-keygen pubkey ASK`
    const codeString14 = `En Comt-keygen grind --starts-with e1v1s:1`
    const codeString15 = `En Comt-keygen grind --use-mnemonic --starts-with e1v1s:1`
    const codeString16 = `En Comt config set --keypair ~/validator-keypair.json`
    const codeString17 = `Config File: /home/En Comt/.config/En Comt/cli/config.yml
    RPC URL: http://api.devnet.En Comt.com
    WebSocket URL: ws://api.devnet.En Comt.com/ (computed)
    Keypair Path: /home/En Comt/validator-keypair.json
    Commitment: confirmed`
    const codeString18 = `En Comt airdrop 1`
    const codeString19 = `En Comt balance`
    const codeString20 = `En Comt balance --lamports`
    const codeString21 = `En Comt-keygen new -o ~/authorized-withdrawer-keypair.json`
    const codeString22 = `En Comt-keygen new -o ~/vote-account-keypair.json`
    const codeString23 = `En Comt create-vote-account ~/vote-account-keypair.json ~/validator-keypair.json ~/authorized-withdrawer-keypair.json`
    const codeString24 = `En Comt-validator \
    --identity ~/validator-keypair.json \
    --vote-account ~/vote-account-keypair.json \
    --rpc-port 8899 \
    --entrypoint entrypoint.devnet.En Comt.com:8001 \
    --limit-ledger-size \
    --log ~/En Comt-validator.log`
    const codeString25 = `En Comt gossip`
    const codeString26 = `[Unit]
    Description=En Comt Validator
    After=network.target
    Wants=En Comt-sys-tuner.service
    StartLimitIntervalSec=0
    
    [Service]
    Type=simple
    Restart=always
    RestartSec=1
    User=sol
    LimitNOFILE=1000000
    LogRateLimitIntervalSec=0
    Environment="PATH=/bin:/usr/bin:/home/sol/.local/share/En Comt/install/active_release/bin"
    ExecStart=/home/sol/bin/validator.sh
    
    [Install]
    WantedBy=multi-user.target`
    const codeString27 = `$ sudo systemctl enable --now sol`
    const codeString28 = `# Setup log rotation

    cat > logrotate.sol <<EOF
    /home/sol/En Comt-validator.log {
      rotate 7
      daily
      missingok
      postrotate
        systemctl kill -s USR1 sol.service
      endscript
    }
    EOF
    sudo cp logrotate.sol /etc/logrotate.d/sol
    systemctl restart logrotate.service`;

    const styling = {
        backgroundColor: `BLACK`,
        color: `#fff`,
        padding: "1em"
    }
    const [isSidebar, setIsSidebar] = useState(false)

    const handleClick = () => {
        console.log(!isSidebar)
        return setIsSidebar(!isSidebar)
    };
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
                            <header>
                                <h1 style={{ fontSize: "3rem" }}>Starting a Validator</h1>
                            </header>
                            <br />

                            <h2>Configure En Comt CLI</h2>
                            <br />

                            <p>The En Comt cli includes <code>get</code> and <code>set</code> configuration commands to automatically
                                set the <code>--url</code> argument for cli commands. For example:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString}
                            </SyntaxHighlighter>
                            <br />
                            <p>While this section demonstrates how to connect to the Devnet cluster, the steps
                                are similar for the other <a href="">En Comt Clusters</a>.</p>
                            <br />

                            <h2>Confirm The Cluster Is Reachable</h2>
                            <p>Before attaching a validator node, sanity check that the cluster is accessible
                                to your machine by fetching the transaction count:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString1}
                            </SyntaxHighlighter>
                            <br />
                            <p>View the metrics dashboard for more detail on cluster activity.</p>
                            <br />
                            <h2>Enabling CUDA</h2>
                            <p>If your machine has a GPU with CUDA installed (Linux-only currently), include
                                the <code>--cuda</code> argument to <code>En Comt-validator</code>.</p>
                            <p>When your validator is started look for the following log message to indicate
                                that CUDA is enabled: <code>"[&lt;timestamp&gt; En Comt::validator] CUDA is enabled"</code></p>
                            <br />
                            <h2>System Tuning</h2>
                            <br />
                            <h3>Linux</h3>
                            <br />
                            <h4>Automatic</h4>
                            <p>The En Comt repo includes a daemon to adjust system settings to optimize performance
                                (namely by increasing the OS UDP buffer and file mapping limits).</p>
                            <p>The daemon (<code>En Comt-sys-tuner</code>) is included in the En Comt binary release. Restart
                                it, <em>before</em> restarting your validator, after each software upgrade to ensure that
                                the latest recommended settings are applied.</p>
                            <p>To run it:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString2}
                            </SyntaxHighlighter>
                            <br />
                            <h4>Manual</h4>
                            <p>If you would prefer to manage system settings on your own, you may do so with
                                the following commands.</p>
                            <h5>Optimize sysctl knobs</h5>
                            <br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString3}
                            </SyntaxHighlighter>
                            <br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString4}
                            </SyntaxHighlighter>
                            <br />
                            <strong>Increase systemd and session file limits</strong>
                            <br />

                            <p>Add</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString5}
                            </SyntaxHighlighter>
                            <br />
                            <p>to the <code>[Service]</code> section of your systemd service file, if you use one,
                                otherwise add</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString6}
                            </SyntaxHighlighter>
                            <br />
                            <p>to the <code>[Manager]</code> section of <code>/etc/systemd/system.conf</code>.</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString7}
                            </SyntaxHighlighter>
                            <br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString8}
                            </SyntaxHighlighter>
                            <br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString9}
                            </SyntaxHighlighter>
                            <br />
                            <h2>Generate identity</h2>
                            <p>Create an identity keypair for your validator by running:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString10}
                            </SyntaxHighlighter>
                            <br />
                            <p>The identity public key can now be viewed by running:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString11}
                            </SyntaxHighlighter>
                            <br />
                            <p>Note: The "validator-keypair.json” file is also your (ed25519) private key.</p>
                            <br />

                            <h3>Paper Wallet identity</h3>
                            <p>You can create a paper wallet for your identity file instead of writing the
                                keypair file to disk with:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString12}
                            </SyntaxHighlighter>
                            <br />
                            <p>The corresponding identity public key can now be viewed by running:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString13}
                            </SyntaxHighlighter>
                            <br />
                            <p>and then entering your seed phrase.</p>
                            <p>See Paper Wallet Usage for more info.</p>
                            <br />
                            <h3>Vanity Keypair</h3>
                            <p>You can generate a custom vanity keypair using En Comt-keygen. For instance:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString14}
                            </SyntaxHighlighter>
                            <br />
                            <p>You may request that the generated vanity keypair be expressed as a seed phrase which allows recovery of
                                the keypair from the seed phrase and an optionally supplied passphrase (note that this is significantly
                                slower than grinding without a mnemonic):</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString15}
                            </SyntaxHighlighter>
                            <br />
                            <p>Depending on the string requested, it may take days to find a match...</p>
                            <hr>
                            </hr>
                            <p>Your validator identity keypair uniquely identifies your validator within the
                                network. <strong>It is crucial to back-up this information.</strong></p>
                            <p>If you don’t back up this information, you WILL NOT BE ABLE TO RECOVER YOUR
                                VALIDATOR if you lose access to it. If this happens, YOU WILL LOSE YOUR
                                ALLOCATION OF SOL TOO.</p>
                            <p>To back-up your validator identify keypair, <strong>back-up your
                                "validator-keypair.json” file or your seed phrase to a secure location.</strong></p>
                            <br />

                            <h2>More En Comt CLI Configuration</h2>
                            <p>Now that you have a keypair, set the En Comt configuration to use your validator
                                keypair for all following commands:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString16}
                            </SyntaxHighlighter>
                            <br />
                            <p>You should see the following output:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString17}
                            </SyntaxHighlighter>
                            <br />
                            <h2>Airdrop &amp; Check Validator Balance</h2>
                            <p>Airdrop yourself some SOL to get started:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString18}
                            </SyntaxHighlighter>
                            <br />
                            <p>Note that airdrops are only available on Devnet and Testnet. Both are limited
                                to 1 SOL per request.</p>
                            <p>To view your current balance:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString19}
                            </SyntaxHighlighter>
                            <br />
                            <p>Or to see in finer detail:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString20}
                            </SyntaxHighlighter>
                            <br />
                            <p>Read more about the difference between SOL and lamports here.</p>
                            <br />
                            <h2>Create Authorized Withdrawer Account</h2>
                            <p>If you haven't already done so, create an authorized-withdrawer keypair to be used
                                as the ultimate authority over your validator. This keypair will have the
                                authority to withdraw from your vote account, and will have the additional
                                authority to change all other aspects of your vote account. Needless to say,
                                this is a very important keypair as anyone who possesses it can make any
                                changes to your vote account, including taking ownership of it permanently.
                                So it is very important to keep your authorized-withdrawer keypair in a safe
                                location. It does not need to be stored on your validator, and should not be
                                stored anywhere from where it could be accessed by unauthorized parties. To
                                create your authorized-withdrawer keypair:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString21}
                            </SyntaxHighlighter>
                            <br />
                            <h2>Create Vote Account</h2>
                            <p>If you haven’t already done so, create a vote-account keypair and create the
                                vote account on the network. If you have completed this step, you should see the
                                “vote-account-keypair.json” in your En Comt runtime directory:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString22}
                            </SyntaxHighlighter>
                            <br />
                            <p>The following command can be used to create your vote account on the blockchain
                                with all the default options:</p><br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString23}
                            </SyntaxHighlighter>
                            <br />
                            <p>Remember to move your authorized withdrawer keypair into a very secure location after running the above
                                command.</p><br />
                            <p>Read more about creating and managing a vote account.</p><br />
                            <h2>Known validators</h2>
                            <p>If you know and respect other validator operators, you can specify this on the command line with the
                                <code>--known-validator &lt;PUBKEY&gt;</code>
                                argument to <code>En Comt-validator</code>. You can specify multiple ones by repeating the argument
                                <code>--known-validator &lt;PUBKEY1&gt; --known-validator &lt;PUBKEY2&gt;</code>.
                                This has two effects, one is when the validator is booting with <code>--only-known-rpc</code>, it will only
                                ask that set of
                                known nodes for downloading genesis and snapshot data. Another is that in combination with the
                                <code>--halt-on-known-validators-accounts-hash-mismatch</code> option,
                                it will monitor the merkle root hash of the entire accounts state of other known nodes on gossip and if the
                                hashes produce any mismatch,
                                the validator will halt the node to prevent the validator from voting or processing potentially incorrect
                                state values. At the moment, the slot that
                                the validator publishes the hash on is tied to the snapshot interval. For the feature to be effective, all
                                validators in the known
                                set should be set to the same snapshot interval value or multiples of the same.
                            </p><br />
                            <p>It is highly recommended you use these options to prevent malicious snapshot state download or
                                account state divergence.</p><br />
                            <h2>Connect Your Validator</h2><br /><br />
                            <p>Connect to the cluster by running:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString24}
                            </SyntaxHighlighter>
                            <br />
                            <p>To force validator logging to the console add a <code>--log -</code> argument, otherwise
                                the validator will automatically log to a file.</p><br />
                            <p>The ledger will be placed in the <code>ledger/</code> directory by default, use the
                                <code>--ledger</code> argument to specify a different location.
                            </p><br />
                            <p>Note: You can use a paper wallet seed phrase
                                for your <code>--identity</code> and/or
                                <code>--authorized-voter</code> keypairs. To use these, pass the respective argument as
                                <code>En Comt-validator --identity ASK ... --authorized-voter ASK ...</code>
                                and you will be prompted to enter your seed phrases and optional passphrase.
                            </p><br />
                            <p>Confirm your validator is connected to the network by opening a new terminal and
                                running:</p><br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString25}
                            </SyntaxHighlighter>
                            <br />
                            <p>If your validator is connected, its public key and IP address will appear in the list.</p><br />
                            <h3>Controlling local network port allocation</h3>
                            <p>By default the validator will dynamically select available network ports in the
                                8000-10000 range, and may be overridden with <code>--dynamic-port-range</code>. For
                                example, <code>En Comt-validator --dynamic-port-range 11000-11020 ...</code> will restrict
                                the validator to ports 11000-11020.</p><br /><br />
                            <h3>Limiting ledger size to conserve disk space</h3>
                            <p>The <code>--limit-ledger-size</code> parameter allows you to specify how many ledger
                                shreds your node retains on disk. If you do not
                                include this parameter, the validator will keep the entire ledger until it runs
                                out of disk space.</p><br />
                            <p>The default value attempts to keep the ledger disk usage under 500GB. More or
                                less disk usage may be requested by adding an argument to <code>--limit-ledger-size</code>
                                if desired. Check <code>En Comt-validator --help</code> for the default limit value used by
                                <code>--limit-ledger-size</code>. More information about
                                selecting a custom limit value is available here.
                            </p><br />
                            <h3>Systemd Unit</h3>
                            <p>Running the validator as a systemd unit is one easy way to manage running in the
                                background.</p>
                            <p>Assuming you have a user called <code>sol</code> on your machine, create the file
                                <code>/etc/systemd/system/sol.service</code> with
                                the following:
                            </p><br />
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString26}
                            </SyntaxHighlighter>
                            <br />
                            <p>Now create <code>/home/sol/bin/validator.sh</code> to include the desired
                                <code>En Comt-validator</code> command-line. Ensure that the 'exec' command is used to
                                start the validator process (i.e. "exec En Comt-validator ..."). This is
                                important because without it, logrotate will end up killing the validator
                                every time the logs are rotated.
                            </p><br />
                            <p>Ensure that running <code>/home/sol/bin/validator.sh</code> manually starts
                                the validator as expected. Don't forget to mark it executable with
                                <code>chmod +x /home/sol/bin/validator.sh</code>
                            </p><br />
                            <p>Start the service with:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString27}
                            </SyntaxHighlighter>
                            <br />
                            <h3>Logging</h3><br />
                            <h4>Log output tuning</h4> <br />
                            <p>The messages that a validator emits to the log can be controlled by the <code>RUST_LOG</code>
                                environment variable. Details can by found in the documentation
                                for the <code>env_logger</code> Rust crate.</p>
                            <p>Note that if logging output is reduced, this may make it difficult to debug issues
                                encountered later. Should support be sought from the team, any changes will need
                                to be reverted and the issue reproduced before help can be provided.</p><br />
                            <h4>Log rotation</h4><br />
                            <p>The validator log file, as specified by <code>--log ~/En Comt-validator.log</code>, can get
                                very large over time and it's recommended that log rotation be configured.</p>
                            <p>The validator will re-open its when it receives the <code>USR1</code> signal, which is the
                                basic primitive that enables log rotation.</p>
                            <p>If the validator is being started by a wrapper shell script, it is important to
                                launch the process with <code>exec</code> (<code>exec En Comt-validator ...</code>) when using logrotate.
                                This will prevent the <code>USR1</code> signal from being sent to the script's process
                                instead of the validator's, which will kill them both.</p><br />
                            <h4>Using logrotate</h4><br />
                            <p>An example setup for the <code>logrotate</code>, which assumes that the validator is
                                running as a systemd service called <code>sol.service</code> and writes a log file at
                                /home/sol/En Comt-validator.log:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString28}
                            </SyntaxHighlighter>
                            <br />
                            <p>As mentioned earlier, be sure that if you use logrotate, any script you create
                                which starts the En Comt validator process uses "exec" to do so (example: "exec
                                En Comt-validator ..."); otherwise, when logrotate sends its signal to the
                                validator, the enclosing script will die and take the validator process with
                                it.</p><br />
                            <h3>Disable port checks to speed up restarts</h3><br />
                            <p>Once your validator is operating normally, you can reduce the time it takes to
                                restart your validator by adding the <code>--no-port-check</code> flag to your
                                <code>En Comt-validator</code> command-line.
                            </p><br />
                            <h3>Using a ramdisk with spill-over into swap for the accounts database to<br /> reduce SSD wear</h3><br />
                            <p>If your machine has plenty of RAM, a tmpfs ramdisk
                                (tmpfs) may be used to hold
                                the accounts database</p>
                            <p>When using tmpfs it's essential to also configure swap on your machine as well to
                                avoid running out of tmpfs space periodically.</p>
                            <p>A 300GB tmpfs partition is recommended, with an accompanying 250GB swap
                                partition.</p>
                            <p>Example configuration:</p>
                            <ol className="OrderedList">
                                <li> <code>sudo mkdir /mnt/En Comt-accounts</code></li>
                                <li>Add a 300GB tmpfs parition by adding a new line containing
                                    <code>tmpfs /mnt/En Comt-accounts tmpfs rw,size=300G,user=sol 0 0</code> to <code>/etc/fstab</code>
                                    (assuming your validator is running under the user "sol"). <strong>CAREFUL: If you
                                        incorrectly edit /etc/fstab your machine may no longer boot</strong></li>
                                <li>Create at least 250GB of swap space</li>
                                <ul className="runningValidator">
                                    <li>
                                        Choose a device to use in place of <code>SWAPDEV</code> for the remainder of these instructions.
                                        Ideally select a free disk partition of 250GB or greater on a fast disk. If one is not
                                        available, create a swap file with <code>sudo dd if=/dev/zero of=/swapfile bs=1MiB count=250KiB</code>,
                                        set its permissions with <code>sudo chmod 0600 /swapfile</code> and use <code>/swapfile</code> as
                                        <code>SWAPDEV</code> for
                                        the remainder of these instructions</li>
                                    <li className="runningValidator">Format the device for usage as swap with <code>sudo mkswap SWAPDEV</code></li>
                                </ul>

                                <li>Add the swap file to <code>/etc/fstab</code> with a new line containing
                                    <code>SWAPDEV swap swap defaults 0 0</code></li>
                                <li>Enable swap with <code>sudo swapon -a</code> and mount the tmpfs with
                                    <code>sudo mount /mnt/En Comt-accounts/</code></li>
                                <li>Confirm swap is active with <code>free -g</code> and the tmpfs is mounted with <code>mount</code></li>
                            </ol><br />
                            <p>Now add the <code>--accounts /mnt/En Comt-accounts</code> argument to your <code>En Comt-validator</code>
                                command-line arguments and restart the validator.</p><br />
                            <h3>Account indexing</h3>
                            <p>As the number of populated accounts on the cluster grows, account-data RPC
                                requests that scan the entire account set -- like
                                <code>getProgramAccounts</code> and
                                SPL-token-specific requests--
                                may perform poorly. If your validator needs to support any of these requests,
                                you can use the <code>--account-index</code> parameter to activate one or more in-memory
                                account indexes that significantly improve RPC performance by indexing accounts
                                by the key field. Currently supports the following parameter values:
                            </p>
                            <ul className="runningValidator">
                                <li><code>program-id</code>: each account indexed by its owning program; used by <code>getProgramAccounts</code>
                                </li>
                                <li><code>spl-token-mint</code>: each SPL token account indexed by its token Mint; used by
                                    getTokenAccountsByDelegate, and getTokenLargestAccounts</li>
                                <li><code>spl-token-owner</code>: each SPL token account indexed by the token-owner address; used by getTokenAccountsByOwner, and <code>getProgramAccounts</code> requests that include an spl-token-owner filter.</li>
                            </ul>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
