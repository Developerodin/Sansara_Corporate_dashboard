import React, { useEffect, useState } from 'react'
import UserHeader from './Components/UserHeader'


import { KTCard } from '../../../../_metronic/helpers'
import { GenralTabel } from '../../../TabelComponents/GenralTable'
import MapLocation from '../../../MapLocation/MapLocation'
import { Button, Switch,Modal,Box,Typography,TextField, Card, CardContent } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import RemoveIcon from '@mui/icons-material/Remove';
import ChargingStationIcon from '@mui/icons-material/ChargingStation';
import ChaletIcon from '@mui/icons-material/Chalet';
import { useNavigate } from 'react-router-dom'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { UserWalletModal } from './Components/UserWalletModal'
import AddVehicle from './Components/AddVehicle'
import { BASE_URL } from '../../../Config/BaseUrl'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useFormik } from "formik";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import events from "./Events";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";



const LiveClasses = () => {
  
  return (
    <div>
      <Card style={{borderRadius:"20px"}}>
        <CardContent>
        <FullCalendar
         defaultView="dayGridMonth"
         header={{
           left: "prev,next",
           center: "title",
           right: "dayGridMonth,timeGridWeek,timeGridDay"
         }}
         themeSystem="Simplex"
         plugins={[dayGridPlugin]}
         events={events}
         eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
         eventClick= {(info)=> {
          alert('Event: ' + info.event.title);
          alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
          alert('View: ' + info.view.type);
      
          // change the border color just for fun
          info.el.style.borderColor = 'grey';
        }}
        
      />
        </CardContent>
      </Card>
 
 </div>
  )
}

export default LiveClasses
