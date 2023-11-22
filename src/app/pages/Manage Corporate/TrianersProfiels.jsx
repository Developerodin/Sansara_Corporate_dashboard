
import { Box, Button, Card, CardContent, CardHeader, Typography,InputAdornment } from '@mui/material'
import React from 'react'
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
const column = [
  { name: "ID" },
  { name: "Category Name" },
  {name: "Total Users"},
  { name: "Created At" },
  { name: "Action" },
  { name: "Delete" },
];

export const TrianersProfiels = () => {
  const navigate = useNavigate();

  const handelViewClick=()=>{
    navigate("/categories_view");
  }

  const handelAddCategorie=()=>{
    navigate("/add_categorie/")
  }
 
  const rows = [
    { Id: "1", Category: "The Odin", TProducts: "14", CreatedAt: "04/Oct/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "2", Category: "Google", TProducts: "7", CreatedAt: "18/Jul/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "3", Category: "Tata Power", TProducts: "10", CreatedAt: "22/Mar/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "4", Category: "Eye ltd", TProducts: "3", CreatedAt: "09/Sep/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "5", Category: "Zen tech", TProducts: "8", CreatedAt: "11/Nov/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "6", Category: "Electro labs", TProducts: "15", CreatedAt: "03/Aug/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
   
  ];
  

 
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
 
             <Box style={{marginLeft:"20px"}} >
         
              
               <Button variant='contained' style={{backgroundColor:`${ThemColor.buttons}`}}>
                 <TuneIcon />
               </Button>
             </Box>
            
           </Box>

       <Box style={{marginTop:"20px"}}>
       
       <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            avatar='/media/avatars/300-6.jpg'
            name='Emma Smith'
            job='Hatha Yoga'
            totalExperience='3 years'
            totalClasses='250'
            online={false}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            color='danger'
            name='Melody Macy'
            job='Vinyasa Yoga'
            totalExperience='3 years'
            totalClasses='250'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            avatar='/media/avatars/300-1.jpg'
            name='Max Smith'
            job='Ashtanga Yoga'
            totalExperience='3 years'
            totalClasses='250'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            avatar='/media/avatars/300-5.jpg'
            name='Sean Bean'
            job='Power Yoga'
            totalExperience='3 years'
            totalClasses='250'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            avatar='/media/avatars/300-25.jpg'
            name='Brian Cox'
            job='Bikram Yoga'
            totalExperience='3 years'
            totalClasses='250'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            color='warning'
            name='Mikaela Collins'
            job='Jivamukti Yoga'
            totalExperience='3 years'
            totalClasses='250'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            avatar='/media/avatars/300-9.jpg'
            name='Francis Mitcham'
            job='Iyengar Yoga'
            totalExperience='3 years'
            totalClasses='250'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            color='danger'
            name='Olivia Wild'
            job='Anusara Yoga'
            totalExperience='3 years'
            totalClasses='250'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            color='primary'
            name='Neil Owen'
            job='Sivananda Yoga'
            totalExperience='3 years'
            totalClasses='250'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            avatar='/media/avatars/300-23.jpg'
            name='Dan Wilson'
            job='Viniyoga'
            totalExperience='3 years'
            totalClasses='250'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            color='danger'
            name='Emma Bold'
            job='Kundalini Yoga'
            totalExperience='3 years'
            totalClasses='250'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            avatar='/media/avatars/300-12.jpg'
            name='Ana Crown'
            job='Yin Yoga'
            totalExperience='3 years'
            totalClasses='250'
            online={true}
          />
        </div>
      </div>
        
       </Box>
   </Box>
  )
}

