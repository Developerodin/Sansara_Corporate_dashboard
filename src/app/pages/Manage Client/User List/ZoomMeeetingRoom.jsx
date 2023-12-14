import React, { useEffect, useState } from 'react'
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_url } from '../../../Config/BaseUrl';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const KJUR = require('jsrsasign')


export const ZoomMeeetingRoom = () => {
  const navigate = useNavigate();
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
  
  function getSignature(data) {
    const iat = Math.round(new Date().getTime() / 1000) - 30
    const exp = iat + 60 * 60 * 2
    const oHeader = { alg: 'HS256', typ: 'JWT' }
  
    const oPayload = {
      sdkKey: sdkKey,
      appKey: sdkKey,
      mn: data.meetingId,
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
      startMeeting(sdkJWT,data)
    },1000)
    
    return sdkJWT
  }
  
  function startMeeting(signature,data) {
  
    let meetingSDKElement = document.getElementById('meetingSDKElement');
  
    client.init({zoomAppRoot: meetingSDKElement,
       language: 'en-US',
       customize: {
        video: {
          isResizable: true,
          viewSizes: {
            default: {
              width: 1300,
              height: 600
            },
            ribbon: {
              width: 700,
              height: 700,
            }
          }
        }
      }
  
  })
    
    .then(() => {
      client.join({
        signature: signature,
        sdkKey: sdkKey,
        meetingNumber: data.meetingId,
        password: data.meetingPassword,
        userName: userId,
        userEmail: userEmail,
        tk: registrantToken,
        zak: zakToken,
        
      }).then((res) => {
        console.log('joined succesfully',res);
        if (meetingSDKElement.requestFullscreen) {
          meetingSDKElement.requestFullscreen();
        } else if (meetingSDKElement.mozRequestFullScreen) {
          meetingSDKElement.mozRequestFullScreen();
        } else if (meetingSDKElement.webkitRequestFullscreen) {
          meetingSDKElement.webkitRequestFullscreen();
        } else if (meetingSDKElement.msRequestFullscreen) {
          meetingSDKElement.msRequestFullscreen();
        }
      }).catch((error) => {
        console.log("error ==>",error);
        // alert("Meeting not started yet !!")
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
        const MData =Data[Data.length -1 ] 
        setMeetingData(MData)
        
           getSignature(MData)
       
      } else {
        // Handle error
        console.error('Meeting not found');
      }
    } catch (error) {
      console.error('Error joining meeting:', error);
    }
  };

  const handelBack=()=>{
    window.history.back();
  }
  useEffect(()=>{
    console.log("Data===>",ZoomMeetingNumber);
    handleJoinMeeting();
  },[])
  return (
    <div>

<div style={{marginBottom:"30px"}}>
<KeyboardBackspaceIcon onClick={handelBack}/>
</div>

<div id="meetingSDKElement" >
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>
   {/* <Button onClick={getSignature}>Join Meeting</Button> */}
    </div>

    
  )
}

