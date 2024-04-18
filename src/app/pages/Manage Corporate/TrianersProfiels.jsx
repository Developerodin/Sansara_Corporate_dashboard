
import { Box, Button, Card, CardContent, CardHeader, Typography,InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ThemColor } from '../../Them/ThemColor'
import TuneIcon from '@mui/icons-material/Tune';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { GenralTabel } from '../../TabelComponents/GenralTable';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { AddCircle } from '@mui/icons-material';
import { Card3 } from '../../../_metronic/partials/content/cards/Card3';
import SearchIcon from '@mui/icons-material/Search';
import FilterBar from './FilterBar';
import { Dropdown1 } from '../../../_metronic/partials';
import { KTSVG } from '../../../_metronic/helpers';
import axios from 'axios';
import { Base_url } from '../../Config/BaseUrl';
import Modal from '@mui/material/Modal';
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:"40%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  height:"600px",
  p: 4,
  borderRadius:"24px"
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const TrianersProfiels = () => {
  const user=JSON.parse(sessionStorage.getItem('User'));
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [TeacherData, setTeacherData] = useState([]);
  const [update, setupdate] = useState(0);
  const [filterRows,setFilterRows] = useState([])
  const [isFilterBarOpen, setFilterBarOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    experience: '',
    category: '',
    // Add more filter options if needed
  });
  const [customSessionData,setCustomSessionData] = useState({
      teacher:"",
      user:"",
      date:"",
      time:"",
      message:"",

  })
  const [selectedTimeSlot,setSelectedTimeSlot] = useState("");
  const [customSessions,setCustomSessions] = useState([])
  const [open, setOpen] = React.useState(false);
  const [timeSlots, setTimeSlots] = useState([]);
  const handleOpen = (id) =>{
    const teacherValue =id;
  const userValue = user._id
    setCustomSessionData((prev) => ({
      ...prev,
      teacher: teacherValue,
      user: userValue,
    }));
    console.log("Id =>",id)
    setOpen(true);
  } 
  const handleClose = () => setOpen(false);

 const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomSessionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelViewClick = (id)=>{
    console.log("Id =>",id)
    navigate(`trainer_view/${id}`);
  }

  const handleFilterButtonClick = () => {
    setFilterBarOpen(!isFilterBarOpen);
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const createSession = async () => {
     
     const Data = {
      teacher:customSessionData.teacher,
      user:customSessionData.user,
      date:customSessionData.date,
      timeSlot:selectedTimeSlot,
      message:customSessionData.message,
     }
     console.log("Data Book",Data)
     setLoading(true)
    try {
      const response = await axios.post(`${Base_url}api/custom_session`, Data);
      setCustomSessionData({
        teacher:"",
        user:"",
        date:"",
        time:"",
        message:"",
    })
    setSelectedTimeSlot("")
    handleClose();
    setupdate((prev)=>prev+1)
    setLoading(false)
    alert("Session Booked")
      return response.data;
    } catch (error) {
      alert("Error in booking custom session")
      setLoading(false)
      throw error.response ? error.response.data : error.message;
    }
  };

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(`${Base_url}api/teacher`); // Replace with your actual API endpoint
      // setUsers(response.data.data.users);
      const Data= response.data.data.teachers
      console.log("Trainer Data ==>",Data)
      if(Data){
        setTeacherData(Data)
     setFilterRows(Data);

    
    
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  const fetchTimeSlots = async () => {
    try {
      const response = await axios.get(`${Base_url}api/custom_session/time-slots`);  // Assuming your backend API endpoint is '/api/time-slots'
      setTimeSlots(response.data);
    } catch (error) {
      console.error('Error fetching time slots:', error);
    }
  };

  const handleTimeSlotClick = (id) => {
    setSelectedTimeSlot(id);
  };

  const getAllCustomSessions = async () => {
    try {
      const response = await axios.get(`${Base_url}api/custom_session`); // Update the API endpoint accordingly
      setCustomSessions(response.data);
      const Data = response.data
      console.log("Data Class DAta in if  : ",response)
      
    } catch (error) {
      console.error('Error fetching classes:', error.message);
    }
  };

  const isTimeSlotDisabled = (timeSlot) => {
    // Check if the time slot matches any data from the backend
    const matchingData = customSessions.find(
      (data) => data.timeSlot._id === timeSlot._id && data.date === customSessionData.date
    );
    return matchingData !== undefined; // If matchingData is found, the time slot should be disabled
  };
  
  useEffect(()=>{
    fetchTeachers();
    fetchTimeSlots();
    getAllCustomSessions();
  },[update])

  useEffect(() => {
    // Fetch data initially
    getAllCustomSessions();

    // Fetch data every 10 seconds
    const interval = setInterval(() => {
      getAllCustomSessions();
    }, 10000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const today = new Date();
  const minDate = today.toISOString().split('T')[0];
  const maxDate = new Date(today.setDate(today.getDate() + 10)).toISOString().split('T')[0];

  return (
   <Box >

<Box style={{display:"flex",justifyContent:"right",alignItems:"center"}}>
           

           <Box>
         <Box sx={{display:"flex", width:"100%"}}>
             {/* <TextField fullWidth label="Search" /> */}
             
             <TextField
           label="Search"
           id="outlined-start-adornment"
           size='small'
           sx={{ m: 1, width: '100%' }}
           InputProps={{
             startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
           }}
           // value={searchInput}
           //     onChange={(e) => setSearchInput(e.target.value)}
         />
             </Box>
         </Box>
         
        <FilterBar
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
     
            
           </Box>

       <Box style={{marginTop:"20px"}}>
       
       <div className='row g-6 g-xl-9'>
        {TeacherData.map((el,index)=>{
          return (
            <div key={index} className='col-md-6 col-xxl-4'>
            <Card3
            color={el.images.length > 0 ? `` : "primary"}
              avatar={el.images.length > 0 ? `${Base_url}api/${el.images[0].path}` : ""}
              name={el.name}
              job={el.expertise[0]}
              totalExperience={"5 years"}
              totalClasses={el.attendance.length}
              online={el.status}
              Fun={(id)=>{handelViewClick(el._id)}}
              id={el._id}
              FunBookNow={()=>handleOpen(el._id)}
            />
          </div>
          )
        })}
        
      
      </div>
        
       </Box>


       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid container spacing={3}>
              <Grid item xs={6}>
         <TextField
        style={{ width: "100%" }}
        label="Date"
        name="date"
        type="date"
        value={customSessionData.date}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }} 
        inputProps={{
          min: minDate,
          max: maxDate
        }}
      />
                  </Grid>
          
                  <Grid item xs={12}>
                  <div style={{display:"flex",justifyContent:'left',alignItems:"center",flexWrap:"wrap",gap:20}}>
                  {timeSlots.map((el) => (
        <div
          key={el._id}
          onClick={() => handleTimeSlotClick(el._id)}
          style={{
            position: "relative",
            border: "1px solid grey",
            height: 80,
            width: 150,
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: isTimeSlotDisabled(el) ? "lightgray" : "white",
            pointerEvents: isTimeSlotDisabled(el) ? "none" : "auto",
            opacity: isTimeSlotDisabled(el) ? 0.5 : 1,
            borderColor: selectedTimeSlot === el._id ? 'green' : 'white',
          }}
        >
          <span>{el.timeRange}</span>
        </div>
      ))}
               

           </div>
                  </Grid>
                
                  <Grid item xs={12}>
                  <TextField
                  style={{ width: "100%" }}
        label="Message"
        name="message"
        multiline
        rows={4}
        value={customSessionData.message}
        onChange={handleChange}
      />
                  </Grid>
                

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    

                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EA6C13",marginTop:"-20px" }}
                      onClick={()=>createSession()}
                      disabled={loading}
                    >
                                          {loading ? (
        <CircularProgress size={24} color="inherit" />
      ) : (
        'Submit'
      )}
                    </Button>
                  </div>
                </Grid>
              </Grid>
        
        </Box>
      </Modal>
   </Box>
  )
}

