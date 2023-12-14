import React, { useEffect, useState } from 'react'
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Base_url } from '../../../Config/BaseUrl';
const KJUR = require('jsrsasign')


export const ZoomMeeetingRoom = () => {

  const location = useLocation();
  const { ZoomMeetingNumber } = location.state; 

  const [meetingData,setMeetingData] = useState({
    meetingId:"",
    meetingPassword:""
  });

    const client = ZoomMtgEmbedded.createClient();
    var authEndpoint = Base_url
  var sdkKey = 'TsFvuPFLTeKf7_bNBWggPA'
  var meetingNumber =meetingData.meetingId
  var passWord = meetingData.meetingPassword
  var role = 0
  var userName = 'Akshay'
  var userEmail = 'akshay96102@gmail.com'
  var registrantToken = ''
  var zakToken = ''
  var leaveUrl = 'https://localhost:3000'
  var userId="akshay96102@gmail.com"
  var SECRET="C7Dm4JuZ2QXoN0bM2OYTw5JxZvjPK1y9"
  
  function getSignature(e) {
    const iat = Math.round(new Date().getTime() / 1000) - 30
    const exp = iat + 60 * 60 * 2
    const oHeader = { alg: 'HS256', typ: 'JWT' }
  
    const oPayload = {
      sdkKey: sdkKey,
      appKey: sdkKey,
      mn: meetingNumber,
      role: role,
      iat: iat,
      exp: exp,
      tokenExp: exp,
      userId: userId,
    }
  
    const sHeader = JSON.stringify(oHeader)
    const sPayload = JSON.stringify(oPayload)
    const sdkJWT = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, SECRET);
    setTimeout(()=>{
      startMeeting(sdkJWT)
    },1000)
    
    return sdkJWT
  }
  
  function startMeeting(signature) {
  
    let meetingSDKElement = document.getElementById('meetingSDKElement');
  
    client.init({zoomAppRoot: meetingSDKElement, language: 'en-US'}).then(() => {
      client.join({
        signature: signature,
        sdkKey: sdkKey,
        meetingNumber: meetingNumber,
        password: passWord,
        userName: userId,
        userEmail: userEmail,
        tk: registrantToken,
        zak: zakToken,
        
      }).then((res) => {
        console.log('joined succesfully',res);
       
      }).catch((error) => {
        console.log("error ==>",error);
        alert("Meeting not started yet !!")
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleJoinMeeting = async () => {
    try {
      const response = await axios.get(`${Base_url}api/meeting`);

      if (response.status === 200) {
        const meetingData = response.data;
        const Data = meetingData.meeting
        // Handle meeting data for the student
        console.log('Meeting data:', Data);
        setMeetingData(Data[Data.length -1 ])
        
      } else {
        // Handle error
        console.error('Meeting not found');
      }
    } catch (error) {
      console.error('Error joining meeting:', error);
    }
  };
  useEffect(()=>{
    console.log("Data===>",ZoomMeetingNumber);
    handleJoinMeeting();
  },[])
  return (
    <div>
<div id="meetingSDKElement" style={{border:"1px solid grey"}}>
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>
   <Button onClick={getSignature}>Join Meeting</Button>
    </div>

    
  )
}

