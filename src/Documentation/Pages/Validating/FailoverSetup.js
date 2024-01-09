import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function FailoverSetup() {
    const codeString = `mkdir -p certs/
    echo '{"CN":"etcd","hosts":["localhost", "127.0.0.1"],"key":{"algo":"rsa","size":2048}}' > certs/config.json`
    const codeString1 = `cfssl gencert -initca certs/config.json | cfssljson -bare certs/etcd-ca
    cfssl gencert -ca certs/etcd-ca.pem -ca-key certs/etcd-ca-key.pem certs/config.json | cfssljson -bare certs/validator
    cfssl gencert -ca certs/etcd-ca.pem -ca-key certs/etcd-ca-key.pem certs/config.json | cfssljson -bare certs/etcd`
    const codeString2 = `etcd --auto-compaction-retention 2 --auto-compaction-mode revision \
    --cert-file=certs/etcd.pem --key-file=certs/etcd-key.pem \
    --client-cert-auth \
    --trusted-ca-file=certs/etcd-ca.pem \
    --listen-client-urls=https://127.0.0.1:2379 \
    --advertise-client-urls=https://127.0.0.1:2379`
    const codeString3 = `curl --cacert certs/etcd-ca.pem https://127.0.0.1:2379/ --cert certs/validator.pem --key certs/validator-key.pem`
    const codeString4 = `En Comt-validator ... \
    --tower-storage etcd \
    --etcd-cacert-file certs/etcd-ca.pem \
    --etcd-cert-file certs/validator.pem \
    --etcd-key-file certs/validator-key.pem \
    --etcd-endpoint 127.0.0.1:2379  # <-- replace 127.0.0.1 with the actual IP address`
    const codeString5 = `$ En Comt-validator wait-for-restart-window --identity validator-keypair.json \
    && En Comt-validator set-identity validator-keypair.json`
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
                            <header>
                                <h1 className="mt-5" style={{ fontSize: "3rem" }}>Failover Setup</h1>
                            </header><br />
                            <p>A simple two machine instance failover method is described here, which allows you to:</p>
                            <ul className="runningValidator">
                                <li>upgrade your validator software with virtually no down time, and</li><br />
                                <li>failover to the secondary instance when your monitoring detects a problem with
                                    the primary instance
                                    without any safety issues that would otherwise be associated with running two
                                    instances of your validator.</li>
                            </ul>

                            <p>You will need two validator-class machines for your primary and secondary
                                validator. A third machine for running an etcd cluster,
                                which is used to store the tower voting record for your validator.</p><br />
                            <h2>Setup</h2><br />
                            <h3>etcd cluster setup</h3><br />
                            <p>There is ample documentation regarding etcd setup and configuration at
                                <a href="" target="_blank" rel="noopener noreferrer"> https://etcd.io/ </a>, please
                                generally familiarize yourself with etcd before
                                continuing.
                            </p>
                            <p>It's recommended that etcd be installed on a separate machine from your primary
                                and secondary validator machines. This machine must be highly available, and
                                depending on your needs you may wish to configure etcd with more than just
                                one node.</p>
                            <p>First install <code>etcd</code> as desired for your machine. Then TLS certificates must be
                                created for authentication between the etcd cluster and your validator. Here is
                                one way to do this:</p><br />
                            <p>With Golang installed, run
                                <code>go install github.com/cloudflare/cfssl/cmd/cfssl@latest</code>. The <code>cfssl</code> program
                                should now be available at <code>~/go/bin/cfssl</code>. Ensure <code>~/go/bin</code> is in your PATH
                                by running <code>PATH=$PATH:~/go/bin/</code>.
                            </p><br />
                            <p>Now create a certificate directory and configuration file:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString}
                            </SyntaxHighlighter>
                            <br />
                            <p>then create certificates for the etcd server and the validator:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString1}
                            </SyntaxHighlighter>
                            <br />

                            <p>Copy these files to your primary and secondary validator machines:</p>
                            <ul className="runningValidator">
                                <li><code>certs/validator-key.pem</code></li>
                                <li><code>certs/validator.pem</code></li>
                                <li><code>certs/etcd-ca.pem</code></li>
                            </ul><br />
                            <p>and these files to the machine running the etcd server:</p>
                            <ul className="runningValidator">
                                <li><code>certs/etcd.pem</code> </li>
                                <li><code>certs/etcd-key.pem</code></li>
                                <li><code>certs/etcd-ca.pem</code></li>
                            </ul>
                            <p>With this configuration, both the validator and etdc will share the same
                                TLS certificate authority and will each authenticate the other with it.</p><br />
                            <p>Start <code>etcd</code> with the following arguments:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString2}
                            </SyntaxHighlighter>
                            <br />

                            <p>and use <code>curl</code> to confirm the etcd TLS certificates are properly configured:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString3}
                            </SyntaxHighlighter>
                            <br />

                            <p>On success, curl will return a 404 response.</p>
                            <p>For more information on etcd TLS setup, please refer to
                                https://etcd.io/docs/v3.5/op-guide/security/#example-2-client-to-server-authentication-with-https-client-certificates
                            </p><br />
                            <h3><b>Primary Validator</b></h3><br />
                            <p>The following additional <code>En Comt-validator</code> parameters are required to enable
                                tower storage into etcd:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString4}
                            </SyntaxHighlighter>
                            <br />
                            <p>Note that once running your validator <em>will terminate</em> if it's not able to write
                                its tower into etcd before submitting a vote transaction, so it's essential
                                that your etcd endpoint remain accessible at all times.</p><br />
                            <h3>Secondary Validator</h3><br />
                            <p>Configure the secondary validator like the primary with the exception of the
                                following <code>En Comt-validator</code> command-line argument changes:</p><br />
                            <ul className="runningValidator">
                                <li>Generate and use a secondary validator identity:
                                    <code>--identity secondary-validator-keypair.json</code></li>
                                <li>Add <code>--no-check-vote-account</code></li>
                                <li>Add <code>--authorized-voter validator-keypair.json</code> (where
                                    <code>validator-keypair.json</code> is the identity keypair for your primary validator)
                                </li>
                            </ul><br />
                            <h2>Triggering a failover manually</h2><br />
                            <p>When both validators are running normally and caught up to the cluster, a
                                failover from primary to secondary can be triggered by running the following
                                command on the secondary validator:</p>
                            <SyntaxHighlighter language="javascript" customStyle={styling}>
                                {codeString5}
                            </SyntaxHighlighter><br />
                            <p>The secondary validator will acquire a lock on the tower in etcd to ensure
                                voting and block production safely switches over from the primary validator.</p>
                            <p>The primary validator will then terminate as soon as it detects the secondary
                                validator using its identity.</p>
                            <p>Note: When the primary validator restarts (which may be immediate if you have
                                configured your primary validator to do so) it will reclaim its identity
                                from the secondary validator. This will in turn cause the secondary validator to
                                exit. However if/when the secondary validator restarts, it will do so using the
                                secondary validator identity and thus the restart cycle is broken.</p><br />
                            <h2><b>Triggering a failover via monitoring</b></h2><br />
                            <p>Monitoring of your choosing can invoke the <code>En Comt-validator set-identity
                                validator-keypair.json</code> command mentioned in the previous section.</p>
                            <p>It is not necessary to guarantee the primary validator has halted before failing
                                over to the secondary, as the failover process will prevent the primary
                                validator from voting and producing blocks even if it is in an unknown state.</p><br />
                            <h2><b>Validator Software Upgrades</b></h2><br />
                            <p>To perform a software upgrade using this failover method:</p>
                            <ol className='OrderedList'>
                                <li>Install the new software version on your primary validator system but do not
                                    restart it yet.</li>
                                <li>Trigger a manual failover to your secondary validator. This should cause your
                                    primary validator to terminate.</li>
                                <li>When your primary validator restarts it will now be using the new software version.</li>
                                <li>Once the primary validator catches up upgrade the secondary validator at
                                    your convenience.</li>
                            </ol>


                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
