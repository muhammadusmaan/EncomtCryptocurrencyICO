import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Troubleshooting() {
    const codeString = `ldb --db=<validator ledger path>/rocksdb/ list_column_families`
    const codeString1 = `ldb --db=<validator ledger path>/rocksdb drop_column_family <column family name>`
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
                        {/*Troubleshooting */}

                        <div className="container px-lg-5 px-md-5">
                            <br />
                            <br />
                            <h1 style={{ fontSize: "3rem" }} >Troubleshooting</h1>
                            <br />
                            <p>There is a <strong>#validator-support</strong> Discord channel available to reach other
                                testnet participants, https://discord.gg/pquxPsq</p>
                            <br />

                            <h2>Useful Links & Discussion</h2>
                            <ul className="runningValidator">
                                <li><a href="" target="_blank" rel="noopener noreferrer">Network Explorer</a></li>
                                <li><a href="" target="_blank" rel="noopener noreferrer">Testnet Metrics Dashboard</a></li>
                                <li className="runningValidator">Validator chat channels
                                    <ul><li><a href="" target="_blank" rel="noopener noreferrer">#validator-support</a> General support channel for any Validator related queries.</li>
                                        <li><a href="" target="_blank" rel="noopener noreferrer">#testnet-announcements</a> The single source of truth for critical information relating Testnet</li>
                                    </ul></li>
                                <li><a href="" target="_blank" rel="noopener noreferrer">Core software repo</a></li></ul>

                            <p>Can't find what you're looking for? Send an email to <a href="" target="_blank" rel="noopener noreferrer">ryan@En Comt.com</a> or reach out to @rshea#2622 on Discord.</p>
                            <br />

                            <h2>Blockstore</h2>
                            <p>The validator blockstore rocksdb database can be inspected using the <code>ldb</code> tool.
                                <code>ldb</code> is part of the <code>rocksdb</code> code base and is also available in the <code>rocksdb-tools</code>
                                package.</p>

                            <br />
                            <h2>Upgrade</h2>
                            <p>If a new software version introduces a new column family to the blockstore,
                                that new (empty) column will be automatically created. This is the same logic
                                that allows a validator to start fresh without the blockstore directory.</p>

                            <br />
                            <h2>Downgrade</h2>
                            <p>If a new column family has been introduced to the validator blockstore, a
                                subsequent downgrade of the validator to a version that predates the new column
                                family will cause the validator to fail while opening the blockstore during
                                startup.</p>
                            <p>List column families:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString}
                            </SyntaxHighlighter>
                            <br />
                            <p><strong>Warning</strong>: Please seek guidance on discord before modifying the validator
                                blockstore.</p>
                            <p>Drop a column family:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString1}
                            </SyntaxHighlighter>
                            <br />

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
