import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function PublishingValidatorInfo() {
    const codeString = `En Comt validator-info publish --keypair ~/validator-keypair.json <VALIDATOR_INFO_ARGS> <VALIDATOR_NAME>`;
    const codeString1 = `En Comt validator-info publish --help`;
    const codeString2 = `En Comt validator-info publish "Elvis Validator" -n elvis -w "https://elvis-validates.com"`;
    const codeString3 = ` En Comt validator-info get`;
    const codeString4 = `Validator info from 8WdJvDz6obhADdxpGCiJKZsDYwTLNEDFizayqziDc9ah
    Validator pubkey: 6dMH3u76qZ7XG4bVboVRnBHR2FfrxEqTTTyj4xmyDMWo
    Info: {"keybaseUsername":"elvis","name":"Elvis Validator","website":"https://elvis-validates.com"} `;

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
                            <h1 style={{ fontSize: "3rem" }} >Publishing Validator Info</h1>
                            <br />
                            <p>You can publish your validator information to the chain to be publicly visible to other users.</p>
                            <br />
                            <h2>Run En Comt validator-info</h2>

                            <p>Run the En Comt CLI to populate a validator info account:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString}
                            </SyntaxHighlighter>
                            <br />

                            <p>For details about optional fields for VALIDATOR_INFO_ARGS:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString1}
                            </SyntaxHighlighter>
                            <br />

                            <h2>Example Commands</h2>
                            <p>Example publish command:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString2}
                            </SyntaxHighlighter>
                            <br />
                            <p>Example publish command:</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString3}
                            </SyntaxHighlighter>
                            <br />

                            <p>which outputs</p>

                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString4}
                            </SyntaxHighlighter>
                            <br />

                            <h2>Keybase</h2>
                            <p>Including a Keybase username allows client applications (like the En Comt
                                Network Explorer) to automatically pull in your validator public profile,
                                including cryptographic proofs, brand identity, etc. To connect your validator
                                pubkey with Keybase:</p>

                            <ol className="OrderedList">
                                <li><p>Join https://keybase.io/ and complete the profile for your validator</p></li>
                                <li><p>Add your validator <strong>identity pubkey</strong> to Keybase:</p>

                                    <ul className="runningValidator">
                                        <li><p>Create an empty file on your local computer called <code>validator-&lt;PUBKEY&gt;</code></p></li>
                                        <li><p>In Keybase, navigate to the Files section, and upload your pubkey file to</p><p>a <code>En Comt</code> subdirectory in your public folder: <code>/keybase/public/&lt;KEYBASE_USERNAME&gt;/En Comt</code></p></li>
                                        <li><p>To check your pubkey, ensure you can successfully browse to</p><p><code>https://keybase.pub/&lt;KEYBASE_USERNAME&gt;/En Comt/validator-&lt;PUBKEY&gt;</code></p></li>
                                    </ul>
                                </li>

                                <li><p>Add or update your <code>En Comt validator-info</code> with your Keybase username. The</p><p>CLI will verify the <code>validator-&lt;PUBKEY&gt;</code> file</p></li>

                            </ol>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
