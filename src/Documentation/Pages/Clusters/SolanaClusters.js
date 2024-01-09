import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function SolanaClusters() {
    const [isSidebar, setIsSidebar] = useState(false)
    const codeString = `export SOLANA_METRICS_CONFIG="host=https://metrics.solana.com:8086,db=devnet,u=scratch_writer,p=topsecret"`;
    const codeString1 = `solana config set --url https://api.devnet.solana.com`;
    const codeString2 = `$ solana-validator \
    --identity validator-keypair.json \
    --vote-account vote-account-keypair.json \
    --known-validator dv1ZAGvdsz5hHLwWXsVnM94hWf1pjbKVau1QVkaMJ92 \
    --known-validator dv2eQHeP4RFrJZ6UeiZWoc3XTtmtZCUKxxCApCDcRNV \
    --known-validator dv4ACNkpYPcE3aKmYDqZm9G5EB3J4MRoeE7WNDRBVJB \
    --known-validator dv3qDFk1DTF36Z62bNvrCXe9sKATA6xvVy6A798xxAS \
    --only-known-rpc \
    --ledger ledger \
    --rpc-port 8899 \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.devnet.solana.com:8001 \
    --entrypoint entrypoint2.devnet.solana.com:8001 \
    --entrypoint entrypoint3.devnet.solana.com:8001 \
    --entrypoint entrypoint4.devnet.solana.com:8001 \
    --entrypoint entrypoint5.devnet.solana.com:8001 \
    --expected-genesis-hash EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size`;
    const codeString3 = `export SOLANA_METRICS_CONFIG="host=https://metrics.solana.com:8086,db=tds,u=testnet_write,p=c4fa841aa918bf8274e3e2a44d77568d9861b3ea"`;
    const codeString4 = `solana config set --url https://api.testnet.solana.com`;
    const codeString5 = `  $ solana-validator \
    --identity validator-keypair.json \
    --vote-account vote-account-keypair.json \
    --known-validator 5D1fNXzvv5NjV1ysLjirC4WY92RNsVH18vjmcszZd8on \
    --known-validator dDzy5SR3AXdYWVqbDEkVFdvSPCtS9ihF5kJkHCtXoFs \
    --known-validator Ft5fbkqNa76vnsjYNwjDZUXoTWpP7VYm3mtsaQckQADN \
    --known-validator eoKpUABi59aT4rR9HGS3LcMecfut9x7zJyodWWP43YQ \
    --known-validator 9QxCLckBiJc783jnMvXZubK4wH86Eqqvashtrwvcsgkv \
    --only-known-rpc \
    --ledger ledger \
    --rpc-port 8899 \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.testnet.solana.com:8001 \
    --entrypoint entrypoint2.testnet.solana.com:8001 \
    --entrypoint entrypoint3.testnet.solana.com:8001 \
    --expected-genesis-hash 4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size`;
    const codeString6 = `
    export SOLANA_METRICS_CONFIG="host=https://metrics.solana.com:8086,db=mainnet-beta,u=mainnet-beta_write,p=password"
    
    `
    const codeString7 = `$ solana-validator \
    --identity ~/validator-keypair.json \
    --vote-account ~/vote-account-keypair.json \
    --known-validator 7Np41oeYqPefeNQEHSv1UDhYrehxin3NStELsSKCT4K2 \
    --known-validator GdnSyH3YtwcxFvQrVVJMm1JhTS4QVX7MFsX56uJLUfiZ \
    --known-validator DE1bawNcRJB9rVm3buyMVfr8mBEoyyu73NBovf2oXJsJ \
    --known-validator CakcnaRDHka2gXyfbEd2d3xsvkJkqsLw2akB3zsN1D2S \
    --only-known-rpc \
    --ledger ledger \
    --rpc-port 8899 \
    --private-rpc \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.mainnet-beta.solana.com:8001 \
    --entrypoint entrypoint2.mainnet-beta.solana.com:8001 \
    --entrypoint entrypoint3.mainnet-beta.solana.com:8001 \
    --entrypoint entrypoint4.mainnet-beta.solana.com:8001 \
    --entrypoint entrypoint5.mainnet-beta.solana.com:8001 \
    --expected-genesis-hash 5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size`
    const codeString8 = ``

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
                            <h1 style={{ fontSize: "3rem" }} >Solana Clusters</h1>
                            <br />
                            <p>Solana maintains several different clusters with different purposes.</p>
                            <p>Before you begin make sure you have first
<a href="/cli/install-solana-cli-tools">installed the Solana command line tools</a></p>
<p>Explorers:</p>

<ul><li><a href="https://explorer.solana.com/" target="_blank" rel="noopener noreferrer">http://explorer.solana.com/</a>.</li><li><a href="http://solanabeach.io/" target="_blank" rel="noopener noreferrer">http://solanabeach.io/</a>.</li></ul>

<br/>
<h2>Devnet</h2>
<ul className="runningValidator"><li>Devnet serves as a playground for anyone who wants to take Solana for a
test drive, as a user, token holder, app developer, or validator.</li>
<li>Application developers should target Devnet.</li>
<li>Potential validators should first target Devnet.</li>
<li>Key differences between Devnet and Mainnet Beta:
    <ul className="runningValidator"><li>Devnet tokens are <strong>not real</strong></li>
    <li>Devnet includes a token faucet for airdrops for application testing</li>
    <li>Devnet may be subject to ledger resets</li><li>Devnet typically runs the same software release branch version as Mainnet Beta,
but may run a newer minor release version than Mainnet Beta.</li>
</ul></li>
<li>Gossip entrypoint for Devnet: <code>entrypoint.devnet.solana.com:8001</code></li>
<li>Metrics environment variable for Devnet:</li></ul>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString}
                            </SyntaxHighlighter>
                            <br />

                           <ul><li>RPC URL for Devnet: <code>https://api.devnet.solana.com</code></li></ul> 
                       
                           <h5><a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_2LWZ" id="example-solana-command-line-configuration"></a>Example <code>solana</code> command-line configuration<a class="hash-link" href="#example-solana-command-line-configuration" title="Direct link to heading">#</a></h5>
                       
                           <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString1}
                            </SyntaxHighlighter>
                            <br />
                       
                            <h5><a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_2LWZ" id="example-solana-validator-command-line"></a>Example <code>solana-validator</code> command-line<a class="hash-link" href="#example-solana-validator-command-line" title="Direct link to heading">#</a></h5>
                       
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString2}
                            </SyntaxHighlighter>
                            <br />
                            <p>The <a href="/running-validator/validator-start#known-validators"><code>--known-validator</code>s</a>
are operated by Solana Labs</p>
                       <br/>
                      <h2>Testnet</h2> 
                      <ul className="runningValidator"><li>Testnet is where the Solana core contributors stress test recent release features on a live
cluster, particularly focused on network performance, stability and validator
behavior.</li><li>Testnet tokens are <strong>not real</strong></li><li>Testnet may be subject to ledger resets.</li><li>Testnet includes a token faucet for airdrops for application testing</li><li>Testnet typically runs a newer software release branch than both
Devnet and Mainnet Beta</li><li>Gossip entrypoint for Testnet: <code>entrypoint.testnet.solana.com:8001</code></li><li>Metrics environment variable for Testnet:</li></ul>
<SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString3}
                            </SyntaxHighlighter>
                            <br />
                            <ul><li>RPC URL for Testnet: <code>https://api.testnet.solana.com</code></li></ul>

                            <h5><a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_2LWZ" id="example-solana-command-line-configuration-1"></a>Example <code>solana</code> command-line configuration<a class="hash-link" href="#example-solana-command-line-configuration-1" title="Direct link to heading">#</a></h5>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString4}
                            </SyntaxHighlighter>
                            <br />
                            <p>The identities of the
<a href="/running-validator/validator-start#known-validators"><code>--known-validator</code>s</a> are:</p>
<SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString5}
                            </SyntaxHighlighter>
                            <br />

                            <p>The identities of the
<a href="/running-validator/validator-start#known-validators"><code>--known-validator</code>s</a> are:</p>
<ul className="runningValidator"><li><code>5D1fNXzvv5NjV1ysLjirC4WY92RNsVH18vjmcszZd8on</code> - Solana Labs</li><li><code>dDzy5SR3AXdYWVqbDEkVFdvSPCtS9ihF5kJkHCtXoFs</code> - MonkeDAO</li><li><code>Ft5fbkqNa76vnsjYNwjDZUXoTWpP7VYm3mtsaQckQADN</code> - Certus One</li><li><code>eoKpUABi59aT4rR9HGS3LcMecfut9x7zJyodWWP43YQ</code> - SerGo</li><li><code>9QxCLckBiJc783jnMvXZubK4wH86Eqqvashtrwvcsgkv</code> - Algo|Stake</li></ul>

<br/>
<h2>Mainnet Beta</h2>
<p>A permissionless, persistent cluster for Solana users, builders, validators and token holders.</p>
<ul className="runningValidator"><li>Tokens that are issued on Mainnet Beta are <strong>real</strong> SOL</li><li>Gossip entrypoint for Mainnet Beta: <code>entrypoint.mainnet-beta.solana.com:8001</code></li><li>Metrics environment variable for Mainnet Beta:</li></ul>
         <h5><a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_2LWZ" id="example-solana-command-line-configuration-2"></a>Example <code>solana</code> command-line configuration<a class="hash-link" href="#example-solana-command-line-configuration-2" title="Direct link to heading">#</a></h5>
<SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString6}
                            </SyntaxHighlighter>
                            <br />       
         
                            <ul><li>RPC URL for Mainnet Beta: <code>https://api.mainnet-beta.solana.com</code></li></ul>
                            <h5><a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_2LWZ" id="example-solana-command-line-configuration-2"></a>Example <code>solana</code> command-line configuration<a class="hash-link" href="#example-solana-command-line-configuration-2" title="Direct link to heading">#</a></h5>
         
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString7}
                            </SyntaxHighlighter>
                            <br /> 
         
                            <p>All four <a href="/running-validator/validator-start#known-validators"><code>--known-validator</code>s</a>
are operated by Solana Labs</p>
         
         
         
         
         
         
         
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
