import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronDown, faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function SideBarDoc() {
    const [isAbout, SetIsAbout] = useState(JSON.parse(sessionStorage.getItem('isAbout')));
    const [isWallet, SetIsWallet] = useState(JSON.parse(sessionStorage.getItem('isWallet')));
    const [isStaking, SetIsStaking] = useState(JSON.parse(sessionStorage.getItem('isStaking')));
    const [isDeveloping, SetIsDeveloping] = useState(JSON.parse(sessionStorage.getItem('isDeveloping')));
    const [isValidation, SetIsValidation] = useState(JSON.parse(sessionStorage.getItem('isValidation')));
    const [isArchitecture, SetIsArchitecture] = useState(false);
    const [isSubClusterArchitecture, SetIsSubClusterArchitecture] = useState(false);
    const [isSubValidatorArchitecture, SetIsSubValidatorArchitecture] = useState(false);
    const [isEconomics, SetIsEconomics] = useState(JSON.parse(sessionStorage.getItem('isEconomics')));
    const [isSubInflationEconomics, SetIsSubInflationEconomics] = useState(JSON.parse(sessionStorage.getItem('isSubInflationEconomics')));
    const [isTokenProgram, SetIsTokenProgram] = useState(JSON.parse(sessionStorage.getItem('isTokenProgram')));

    const [isSidebar, setIsSidebar] = useState()


    return (
        <>
            <div className='h-auto sidebar-doc'>
                <ul className='sidebar-responsive-4k mt-0'>
                    <li><Link to='' onClick={() => {
                        SetIsAbout(!isAbout);
                        sessionStorage.setItem('isAbout', JSON.stringify(!isAbout))
                    }}
                        className='align-middle cursor justify-content-between'>
                        <span className='ms-1 text-white'>About</span>
                        <FontAwesomeIcon icon={!isAbout ? faChevronDown : faChevronUp} className='text-white ms-5 gap-1920' /></Link>
                        <ul style={{ display: isAbout ? 'inline-block' : 'none' }} className='nav nav-list w-100 mt-0'>
                            <li><Link to='/Documentation/About/Introduction' className='text-white gap-1 notification-text-res cursor'>Introduction</Link></li>
                            <li><Link to='/Documentation/About/History' className='text-white gap-1 notification-text-res cursor'>History</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link
                            to=''
                            onClick={() => {
                                SetIsWallet(!isWallet);
                                sessionStorage.setItem('isWallet', JSON.stringify(!isWallet))
                            }}
                            className='align-middle cursor justify-content-between' >

                            <span className='ms-1 text-white'>Wallet</span>
                            <FontAwesomeIcon
                                icon={!isWallet ? faChevronDown : faChevronUp}
                                className='text-white ms-5 gap-1920' />
                        </Link>
                        <ul
                            style={{ display: isWallet ? 'inline-block' : 'none' }}
                            className='nav nav-list w-100 mt-0'>
                            <li>
                                <Link
                                    to='/Documentation/wallet/solanaWalletguide'
                                    className='text-white gap-1 notification-text-res cursor'
                                >

                                    Solana Wallet Guide
                                </Link>
                            </li>
                            <li
                            >
                                <Link
                                    to='/Documentation/wallet/supportTroubleshooting'
                                    className='text-white gap-1 notification-text-res cursor'
                                >
                                    Support / Troubleshooting
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link
                            to=''
                            onClick={() => {
                                SetIsStaking(!isStaking);
                                sessionStorage.setItem('isStaking', JSON.stringify(!isStaking))
                            }}
                            className='align-middle cursor justify-content-between' >

                            <span className='ms-1 text-white'>Staking </span>
                            <FontAwesomeIcon
                                icon={!isStaking ? faChevronDown : faChevronUp}
                                className='text-white ms-5 gap-1920' />
                        </Link>
                        <ul
                            style={{ display: isStaking ? 'inline-block' : 'none' }}
                            className='nav nav-list w-100'>
                            <li>
                                <Link to='/Documentation/Staking/StakingOnSolana' className='text-white gap-1 notification-text-res cursor'>Staking on Solana</Link>
                            </li>
                            <li>
                                <Link to='/Documentation/Staking/StakeAccountStructure' className='text-white gap-1 notification-text-res cursor'>Stake Account Structure</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link
                            to=''
                            onClick={() => {
                                SetIsDeveloping(!isDeveloping);
                                sessionStorage.setItem('isDeveloping', JSON.stringify(!isDeveloping))
                            }}
                            className='align-middle cursor justify-content-between' >

                            <span className='ms-1 text-white'>Developing</span>
                            <FontAwesomeIcon
                                icon={!isDeveloping ? faChevronDown : faChevronUp}
                                className='text-white ms-5 gap-1920' />
                        </Link>
                        <ul
                            style={{ display: isDeveloping ? 'inline-block' : 'none' }}
                            className='nav nav-list w-100'>
                            <li>
                                <Link to='/Documentation/Developing/JsonRpcApi' className='text-white gap-1 notification-text-res cursor'>JSON RPC API</Link>
                            </li>
                        </ul>
                    </li>

                    <li><Link to='' onClick={() => {
                        SetIsValidation(!isValidation);
                        sessionStorage.setItem('isValidation', JSON.stringify(!isValidation))
                    }} className='align-middle cursor justify-content-between'>
                        <span className='ms-1 text-white'>Validating</span>
                        <FontAwesomeIcon icon={!isValidation ? faChevronDown : faChevronUp} className='text-white ms-5 gap-1920' /></Link>
                        <ul style={{ display: isValidation ? 'inline-block' : 'none' }} className='nav nav-list w-100'>
                            <li><Link to='/Documentation/Validating/RunningaValidator' className='text-white gap-1 notification-text-res cursor'>Running a Validator</Link></li>
                            <li><Link to='/Documentation/Validating/ValidatorRequirements' className='text-white gap-1 notification-text-res cursor'>Validator Requirements</Link></li>
                            <li><Link to='/Documentation/Validating/StartingaValidator' className='text-white gap-1 notification-text-res cursor'>Starting a Validator</Link></li>
                            <li><Link to='/Documentation/Validating/VoteAccountManagement' className='text-white gap-1 notification-text-res cursor'>Vote Account Management</Link></li>
                            <li><Link to='/Documentation/Validating/Staking' className='text-white gap-1 notification-text-res cursor'>Staking</Link></li>
                            <li><Link to='/Documentation/Validating/MonitoringaValidator' className='text-white gap-1 notification-text-res cursor'>Monitoring a Validator</Link></li>
                            <li><Link to='/Documentation/Validating/PublishingValidatorInfo' className='text-white gap-1 notification-text-res cursor'>Publishing Validator Info</Link></li>
                            <li><Link to='/Documentation/Validating/FailoverSetup' className='text-white gap-1 notification-text-res cursor'>Failover Setup</Link></li>
                            <li><Link to='/Documentation/Validating/Troubleshooting' className='text-white gap-1 notification-text-res cursor'>Troubleshooting</Link></li>
                        </ul>
                    </li>

                    <li><Link to='' onClick={() => {
                        SetIsEconomics(!isEconomics);
                        sessionStorage.setItem('isEconomics', JSON.stringify(!isEconomics))
                    }} className='align-middle cursor justify-content-between' >
                        <span className='ms-1 text-white'>Economics</span>
                        <FontAwesomeIcon icon={!isEconomics ? faChevronDown : faChevronUp} className='text-white ms-5 gap-1920' /></Link>
                        <ul style={{ display: isEconomics ? 'inline-block' : 'none' }} className='nav nav-list w-100'>
                            <li><Link to='/Documentation/Economics/SolanaEconomicsOverview' className='text-white gap-1 notification-text-res cursor'>Solana Economics Overview</Link></li>
                            <li><Link to='' onClick={() => {
                                SetIsSubInflationEconomics(!isSubInflationEconomics);
                                sessionStorage.setItem('isSubInflationEconomics', JSON.stringify(!isSubInflationEconomics))
                            }}
                                className='align-middle cursor justify-content-between'>
                                <span className='ms-1 text-white'>Inflation Design</span>
                                <FontAwesomeIcon icon={!isSubInflationEconomics ? faChevronDown : faChevronUp} className='text-white ms-5 gap-1920' /></Link>
                                <ul style={{ display: isSubInflationEconomics ? 'inline-block' : 'none' }} className='nav nav-list w-100'>
                                    <li><Link to='/Documentation/Economics/Terminology' className='text-white gap-1 notification-text-res cursor'>Terminology</Link></li>
                                    <li><Link to='/Documentation/Economics/SolanaProposedInflation' className='text-white gap-1 notification-text-res cursor'>Solana's Proposed Inflation Schedule</Link></li>
                                    <li><Link to='/Documentation/Economics/AdjustStakingYield' className='text-white gap-1 notification-text-res cursor'>Adjusted Staking Yield</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/Documentation/Economics/TransactionFees' className='text-white gap-1 notification-text-res cursor'>Transaction Fees</Link></li>
                            <li><Link to='/Documentation/Economics/StorageRentEconomics' className='text-white gap-1 notification-text-res cursor'>Storage Rent Economics</Link></li>
                        </ul>
                    </li>

                    <li><Link to='' onClick={() => {
                        SetIsTokenProgram(!isTokenProgram);
                        sessionStorage.setItem('isTokenProgram', JSON.stringify(!isTokenProgram))
                    }} className='align-middle cursor justify-content-between'>
                        <span className='ms-1 text-white'>TokenProgram</span>
                        <FontAwesomeIcon icon={!isTokenProgram ? faChevronDown : faChevronUp} className='text-white ms-5 gap-1920' /></Link>
                        <ul style={{ display: isTokenProgram ? 'inline-block' : 'none' }} className='nav nav-list w-100'>
                            <li><Link to='/Documentation/TokenProgram' className='text-white gap-1 notification-text-res cursor'>TokenProgram</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
