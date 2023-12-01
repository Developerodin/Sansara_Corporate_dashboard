import { FC, Suspense, useContext} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'

import Cpos from '../pages/cpos/cpos'
import Customers from '../pages/Customers/customers'
import Payments from '../pages/payments/payments'
import UsersPage from '../modules/apps/user-management/UsersPage'
import Roles from '../pages/Roles/Roles'
import AllCpos from '../pages/Internal-Cpo-Managment/AllCpos/AllCpos'

import Invoices from '../pages/Internal-Cpo-Managment/Invoice/Invoices'
import PayoutManagment from '../pages/Internal-Cpo-Managment/PayoutManagement/PayoutManagment'
import CustomerList from '../pages/end-Users/CustomerList/CustomerList'
import DiscountCoupons from '../pages/end-Users/DiscountCoupon/DiscountCoupons'
import ChargingSessions from '../pages/end-Users/ChargingSession/ChargingSessions'
import Communications from '../pages/end-Users/Communication/Communications'
import MyProfile from '../pages/settings/MyProfile'
import ErrorLogs from '../pages/settings/ErrorLogs'
import SystemMasters from '../pages/settings/SystemMasters'
import DefaultSettings from '../pages/settings/DefaultSettings'
import SummeryReport from '../pages/Reports/SummeryReport'
import RevenueReportDashboard from '../pages/Reports/RevenueReportDashboard'
import ChargerUsageReport from '../pages/Reports/ChargerUsageReport'
import CposActivityReport from '../pages/Reports/CposActivityReport'
import UserStats from '../pages/Reports/UserStats'
import CouponUsages from '../pages/Reports/CouponUsages'
import AllCpos_E from '../pages/External-Cpo-Management/AllExternalCpo/AllCpos'
import Chargers_E from '../pages/External-Cpo-Management/ExternalChargers/Chargers'
import Invoices_E from '../pages/External-Cpo-Management/ExternalInvoice/Invoices'
import PayoutManagment_E from '../pages/External-Cpo-Management/ExternalPayout/PayoutManagment'
import Overview from '../pages/Billing & Payments/Overview/Overview'

import AllTransactions from '../pages/Billing & Payments/All Transactions/AllTransactions'
import CompanyPayouts from '../pages/Billing & Payments/Company Payouts/CompanyPayouts'
import AddDiscountModel from '../pages/end-Users/DiscountCoupon/Components/AddDicountModel'
import AdminManagement from '../pages/SETTINGSs/Admin Managment/AdminManagement'
import AccessManagement from '../pages/SETTINGSs/Access Management/AccessManagement'
import CPOs from '../pages/Manage CPOs/CPOs/CPOs'
import ChargingStations from '../pages/Manage CPOs/Charging Stations/ChargingStations'
import StationLogs from '../pages/Manage CPOs/Station Logs/StationLogs'
import ChargerMap from '../pages/Manage CPOs/Charger Map/ChargerMap'
import Chargers from '../pages/Manage CPOs/Chargers/Chargers'
import ChargerDetails from '../pages/Manage CPOs/Chargers/Pages/ChargerDetails'
import UserPayments from '../pages/Billing & Payments/All Transactions/Pages/UserPayments'
import CompanyPayments from '../pages/Billing & Payments/All Transactions/Pages/CompanyPayments'
import ChatPage from '../modules/apps/chat/ChatPage'
import { Private } from '../modules/apps/chat/components/Private'
import { Group } from '../modules/apps/chat/components/Group'
import UserContext from '../../Context/UserContext'
import { RoamingAgreements } from '../pages/Manage CPOs/CPOs/RoamingAgreements/RoamingAgreements'
import RoamingRecon from '../pages/Billing & Payments/All Transactions/Pages/RoamingRecon'
import DiscountCouponsMain from '../pages/Billing & Payments/Discount Coupons/DiscountCouponsMain'

import { Orders } from '../pages/Orders/Orders'

import { OrderView } from '../pages/Orders/OrderView'

import { CompanyView } from '../pages/Manage Corporate/CompanyView'
import { CompanyCreate } from '../pages/Manage Corporate/CompanyCreate'
import { RecordClasses } from '../pages/Manage Corporate/RecordClasses'
import { CorporateUsersAdd } from '../pages/Manage Corporate/CorporateUsersAdd'
import { CorporateUsersView } from '../pages/Manage Corporate/CorporateUsersView'
import { MyProfileMain} from '../pages/ManageTrainers/MyProfileMain'
import { TrainerAdd } from '../pages/ManageTrainers/TrainerAdd'
import { TrainerView } from '../pages/ManageTrainers/TrainerView'
import { TrianersProfiels } from '../pages/Manage Corporate/TrianersProfiels'
import Information from '../pages/Manage Client/Complains/Information'
import LiveClasses from '../pages/Manage Client/User List/LiveClasses'
import { TrainersProfielView } from '../pages/Manage Corporate/TrainersProfielView'








const PrivateRoutes = () => {
  const {userPermisson}=useContext(UserContext);
// const userPermisson=JSON.parse(sessionStorage.getItem('userPermisson'))
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
      
        <Route path='menu-test' element={<MenuTestPage />} />
  
       
        <Route
          path='customers/*'
          element={
            <SuspensedView>
              <Customers />
            </SuspensedView>
          }
        />
        <Route
          path='payments/*'
          element={
            <SuspensedView>
              <Payments />
            </SuspensedView>
          }
        />

<Route
          path='record-classes/*'
          element={
            <SuspensedView>
              <RecordClasses />
            </SuspensedView>
          }
        />
        <Route
          path='orders/*'
          element={
            <SuspensedView>
              <Orders />
            </SuspensedView>
          }
        />

<Route
          path='trainers-profile/*'
          element={
            <SuspensedView>
              <TrianersProfiels />
            </SuspensedView>
          }
        />

<Route
          path='categories_view/*'
          element={
            <SuspensedView>
              <CompanyView />
            </SuspensedView>
          }
        />
        <Route
          path='product_view/*'
          element={
            <SuspensedView>
              <CorporateUsersView />
            </SuspensedView>
          }
        />

<Route
          path='trainers-profile/trainer_view/:id'
          element={
            <SuspensedView>
              <TrainersProfielView />
            </SuspensedView>
          }
        />

<Route
          path='orders_view/*'
          element={
            <SuspensedView>
              <OrderView />
            </SuspensedView>
          }
        />


        <Route
          path='my-profile/*'
          element={
            <SuspensedView>
              <MyProfileMain/>
            </SuspensedView>
          }
        />

         <Route
          path='settings/myprofile/*'
          element={
            <SuspensedView>
             <MyProfile/>
            </SuspensedView>
          }
        />


            <Route
            path='live-classes/*'
            element={
              <SuspensedView>
                <LiveClasses/>
              </SuspensedView>
            }
          />


            <Route
            path='information*'
            element={
              <SuspensedView>
                <Information/>
              </SuspensedView>
            }
          />





{
          userPermisson.PrivateChat && (
            <Route
          path='trainers-profile/trainer_view/:id/chats/*'
          element={
            <SuspensedView>
              <Private/>
            </SuspensedView>
          }
        />
        
          )
        }



<Route
          path='chats/group-chat/*'
          element={
            <SuspensedView>
              <Group/>
            </SuspensedView>
          }
        />



        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
