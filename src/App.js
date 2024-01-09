import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Components/Home";
// import Navbar from './Components/Navbar';
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ForgetPassword from "./Components/ForgetPassword";
import Dashboard from "./Dashboard/Dashboard";
import ResetPassword from "./Components/ResetPassword";
import "./index.css";
import KYC from "./Dashboard/KYC";
import PurchaseHistory from "./Dashboard/TransactionHistory";
import BuyCoin from "./Dashboard/BuyCoin";
import Wallet from "./Dashboard/Wallet";
import AboutUs from "./Dashboard/AboutUs";
import Help from "./Dashboard/Help";
import FAQS from "./Dashboard/FAQS";
import Profile from "./Dashboard/Profile";
import User from "./Dashboard/User";
import KYCAdmin from "./Dashboard/KYCAdmin";
import PurchaseHistoryAdmin from "./Dashboard/PurchaseHistoryAdmin";
import ProfileAdmin from "./Dashboard/ProfileAdmin";
import FaqAdmin from "./Dashboard/FaqAdmin";
import Setting from "./Dashboard/Setting";
import Packages from "./Dashboard/Packages";
import PaymentGateway from "./Dashboard/PaymentGateway";
import BonusCoins from "./Dashboard/BonusCoins";
import Website from "./Dashboard/Website";
import PagesData from "./Dashboard/PagesData";
import TotalSupply from "./Dashboard/TotalSupply";
import Notification from "./Dashboard/Notification";
import ChangePassword from "./Dashboard/ChangePassword";
import Blogs from "./Dashboard/Blogs";
import AdminNotification from "./Dashboard/AdminNotification";
import UserHome from "./Dashboard/Home";
import AdminHome from "./Dashboard/AdminHome";
import NavBarDoc from "./Documentation/NavBarDoc";
import SideBarDoc from "./Documentation/SideBarDoc";
import HomeDoc from "./Documentation/Pages/Home";
import ValidatorRequirements from './Documentation/Pages/Validating/ValidatorRequirements';
import FailoverSetup from './Documentation/Pages/Validating/FailoverSetup';
import MonitoringaValidator from './Documentation/Pages/Validating/MonitoringaValidator';
import PublishingValidatorInfo from './Documentation/Pages/Validating/PublishingValidatorInfo';
import RunningaValidator from './Documentation/Pages/Validating/RunningaValidator';
import Staking from './Documentation/Pages/Validating/Staking';
import StartingaValidator from './Documentation/Pages/Validating/StartingaValidator';
import Troubleshooting from './Documentation/Pages/Validating/Troubleshooting';
import VoteAccountManagement from './Documentation/Pages/Validating/VoteAccountManagement';
import TokenProgram from "./Documentation/Pages/TokenProgram/TokenProgram"
import Introduction from "./Documentation/Pages/About/Introduction"
import History from "./Documentation/Pages/About/History"
import SolanaWalletGuide from "./Documentation/Pages/Wallets/SolanaWalletGuide";
import SupportTroubleshooting from "./Documentation/Pages/Wallets/SupportTroubleshooting";
import JSONRPCAPI from "./Documentation/Pages/Developing/JSONRPCAPI"
import SolanaEconomicsOverview from "./Documentation/Pages/Economics/SolanaEconomicsOverview"
import TransactionFees from "./Documentation/Pages/Economics/TransactionFees";
import StorageRentEconomics from "./Documentation/Pages/Economics/StorageRentEconomics"
import Terminology from "./Documentation/Pages/Economics/Terminology"
import AdjustStakingYield from "./Documentation/Pages/Economics/AdjustStakingYield"
import SolanaProposedInflation from "./Documentation/Pages/Economics/SolanaProposedInflation"
import StakingOnSolana from "./Documentation/Pages/Staking/StakingOnSolana"
import StakeAccountStructure from "./Documentation/Pages/Staking/StakeAccountStructure";
function App() {
  const myProps = true;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home Props={myProps} />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/Dashboard/Home" element={<UserHome />} />
          <Route exact path="/Dashboard/AdminHome" element={<AdminHome />} />
          <Route exact path="/Documentation" element={<Introduction />} />
          <Route exact path="/Documentation/About/Introduction" element={<Introduction />} />
          <Route exact path="/Documentation/About/History" element={<History />} />
          <Route exact path="/Documentation/Staking/StakingOnSolana" element={<StakingOnSolana />} />
          <Route exact path="/Documentation/Staking/StakeAccountStructure" element={<StakeAccountStructure />} />
          <Route exact path="/Documentation/wallet/solanaWalletguide" element={<SolanaWalletGuide />} />
          <Route exact path="/Documentation/wallet/supportTroubleshooting" element={<SupportTroubleshooting />} />
          <Route exact path="/Documentation/Developing/JsonRpcApi" element={<JSONRPCAPI />} />
          <Route exact path="/Documentation/Economics/SolanaEconomicsOverview" element={<SolanaEconomicsOverview />} />
          <Route exact path="/Documentation/Economics/TransactionFees" element={<TransactionFees />} />
          <Route exact path="/Documentation/Economics/StorageRentEconomics" element={<StorageRentEconomics />} />
          <Route exact path="/Documentation/Economics/Terminology" element={<Terminology />} />
          <Route exact path="/Documentation/Economics/AdjustStakingYield" element={<AdjustStakingYield />} />
          <Route exact path="/Documentation/Economics/SolanaProposedInflation" element={<SolanaProposedInflation />} />
          <Route exact path="/Documentation/Validating/ValidatorRequirements" element={<ValidatorRequirements />} />
          <Route exact path="/Documentation/Validating/FailoverSetup" element={<FailoverSetup />} />
          <Route exact path="/Documentation/Validating/MonitoringaValidator" element={<MonitoringaValidator />} />
          <Route exact path="/Documentation/Validating/PublishingValidatorInfo" element={<PublishingValidatorInfo />} />
          <Route exact path="/Documentation/Validating/RunningaValidator" element={<RunningaValidator />} />
          <Route exact path="/Documentation/Validating/Staking" element={<Staking />} />
          <Route exact path="/Documentation/Validating/StartingaValidator" element={<StartingaValidator />} />
          <Route exact path="/Documentation/Validating/Troubleshooting" element={<Troubleshooting />} />
          <Route exact path="/Documentation/Validating/VoteAccountManagement" element={<VoteAccountManagement />} />
          <Route exact path="/Documentation/Validating/ValidatorRequirements" element={<ValidatorRequirements />} />
          <Route exact path="/Documentation/TokenProgram" element={<TokenProgram />} />
          <Route
            exact
            path="/Dashboard/AdminNotification"
            element={<AdminNotification />}
          />
          <Route
            exact
            path="/Dashboard/PurchaseHistoryAdmin"
            element={<PurchaseHistoryAdmin />}
          />
          <Route
            exact
            path="/Dashboard/PurchaseHistory"
            element={<PurchaseHistory />}
          />
          <Route exact path="/Dashboard/BuyCoin" element={<BuyCoin />} />
          <Route exact path="/Dashboard/Wallet" element={<Wallet />} />
          <Route
            exact
            path="/Dashboard/ProfileAdmin"
            element={<ProfileAdmin />}
          />
          <Route exact path="/Dashboard/Profile" element={<Profile />} />
          <Route exact path="/Dashboard/AboutUs" element={<AboutUs />} />
          <Route exact path="/Dashboard/FaqAdmin" element={<FaqAdmin />} />
          <Route exact path="/Dashboard/Setting" element={<Setting />} />
          <Route exact path="/Dashboard/Packages" element={<Packages />} />
          <Route
            exact
            path="/Dashboard/PaymentGateway"
            element={<PaymentGateway />}
          />
          <Route exact path="/Dashboard/Website" element={<Website />} />
          <Route exact path="/Dashboard/PagesData" element={<PagesData />} />
          <Route
            exact
            path="/Dashboard/TotalSupply"
            element={<TotalSupply />}
          />
          <Route exact path="/Dashboard/BonusCoins" element={<BonusCoins />} />
          <Route
            exact
            path="/Dashboard/ChangePassword"
            element={<ChangePassword />}
          />
          <Route exact path="/Dashboard/KYC" element={<KYC />} />
          <Route exact path="/Dashboard/KYCAdmin" element={<KYCAdmin />} />
          <Route exact path="/Dashboard/FAQS" element={<FAQS />} />
          <Route exact path="/Dashboard/Help" element={<Help />} />
          <Route exact path="/Dashboard/User" element={<User />} />
          <Route
            exact
            path="/Dashboard/Notification"
            element={<Notification />}
          />
          <Route exact path="/Dashboard/Blogs" element={<Blogs />} />

          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/ForgetPassword" element={<ForgetPassword />} />
          <Route exact path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
