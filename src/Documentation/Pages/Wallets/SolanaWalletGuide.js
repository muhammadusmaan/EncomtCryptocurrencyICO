import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import Container from "react-bootstrap/Container";




export default function SolanaWalletGuide() {
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
                        <div className="main-SWGuide-container px-lg-5 px-md-5">
                            <div className="main-container">
                                <Container>
                                    <header>
                                        <h1 className="swguide-heading">En Comt Wallet Guide</h1>
                                        <br />
                                        <p>
                                            This document describes the different wallet options that are
                                            available to users of En Comt who want to be able to send,
                                            receive and interact with SOL tokens on the En Comt blockchain.
                                        </p>
                                    </header>

                                    <div className="swguide-paragraphs">
                                        <h2 className=" what-is-wallet-heading">
                                            What is a Wallet?
                                            <a class="hash-link" href="#" title="Direct link to heading">
                                                #
                                            </a>
                                        </h2>

                                        <p>
                                            A crypto wallet is a device or application that stores a
                                            collection of keys and can be used to send, receive, and track
                                            ownership of cryptocurrencies. Wallets can take many forms. A
                                            wallet might be a directory or file in your computer's file
                                            system, a piece of paper, or a specialized device called a
                                            <i className="italic-text"> hardware wallet </i> . There are
                                            also various smartphone apps and computer programs that provide
                                            a user-friendly way to create and manage wallets.
                                        </p>
                                        <br />
                                        <p>
                                            A <i className="italic-text"> keypair </i> is a securely
                                            generated <i className="italic-text"> private key</i> and its
                                            cryptographically-derived{" "}
                                            <i className="italic-text">public key </i>. A private key and
                                            its corresponding public key are together known as a{" "}
                                            <i className="italic-text"> keypair </i>. A wallet contains a
                                            collection of one or more keypairs and provides some means to
                                            interact with them.
                                        </p>
                                        <br />
                                        <p>
                                            The <i className="italic-text"> public key </i> (commonly
                                            shortened to <i className="italic-text"> pubkey </i>) is known
                                            as the wallet's{" "}
                                            <i className="italic-text"> receiving address </i> or simply its{" "}
                                            <i className="italic-text"> address</i>. The wallet address{" "}
                                            <b> may be shared and displayed freely </b>. When another party
                                            is going to send some amount of cryptocurrency to a wallet, they
                                            need to know the wallet's receiving address. Depending on a
                                            blockchain's implementation, the address can also be used to
                                            view certain information about a wallet, such as viewing the
                                            balance, but has no ability to change anything about the wallet
                                            or withdraw any tokens.
                                        </p>
                                        <br />
                                        <p>
                                            The <i className="italic-text"> private key </i> is required to
                                            digitally sign any transactions to send cryptocurrencies to
                                            another address or to make any changes to the wallet. The
                                            private key <b> must never be shared </b>. If someone gains
                                            access to the private key to a wallet, they can withdraw all the
                                            tokens it contains. If the private key for a wallet is lost, any
                                            tokens that have been sent to that wallet's address are{" "}
                                            <b> permanently lost </b>.
                                        </p>
                                        <br />
                                        <p>
                                            Different wallet solutions offer different approaches to keypair
                                            security, interacting with the keypair, and signing transactions
                                            to use/spend the tokens. Some are easier to use than others.
                                            Some store and back up private keys more securely. En Comt
                                            supports multiple types of wallets so you can choose the right
                                            balance of security and convenience.
                                        </p>
                                        <br />
                                        <p>
                                            {" "}
                                            <b>
                                                If you want to be able to receive SOL tokens on the En Comt
                                                blockchain, you first will need to create a wallet.
                                            </b>{" "}
                                        </p>
                                        <br />
                                        <h2 className="supported-wallets-heading">
                                            Supported Wallets
                                            <a class="hash-link" href="#" title="Direct link to heading">
                                                #
                                            </a>
                                        </h2>
                                        <p>
                                            Several browser and mobile app based wallets support En Comt.
                                            Find the right one for you on the{" "}
                                            <a href="url" className="green-text">
                                                En Comt Ecosystem
                                            </a>{" "}
                                            page.
                                        </p>

                                        <p>
                                            For advanced users or developers, the{" "}
                                            <a href="url" className="green-text">
                                                command-line wallets
                                            </a>{" "}
                                            may be more appropriate, as new features on the En Comt
                                            blockchain will always be supported on the command line first
                                            before being integrated into third-party solutions.
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
