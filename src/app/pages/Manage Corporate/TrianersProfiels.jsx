
import { Box, Button, Card, CardContent, CardHeader, Typography,InputAdornment } from '@mui/material'
import React, { useState } from 'react'
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

export const TrianersProfiels = () => {
  const navigate = useNavigate();

  const Data = [
    {
      id:1,
      name: 'Emma Smith',
      avatar: '/media/avatars/300-6.jpg',
      totalExperience: '5 years',
      totalClasses: '350',
      job: 'Hatha Yoga',
      online: false,
    },
    {
      id:2,
      name: 'Melody Macy',
      color: 'danger',
      totalExperience: '3 years',
      totalClasses: '150',
      job: 'Vinyasa Yoga',
      online: true,
    },
    {
      id:3,
      name: 'Max Smith',
      avatar: '/media/avatars/300-1.jpg',
      totalExperience: '2 years',
      totalClasses: '90',
      job: 'Ashtanga Yoga',
      online: true,
    },
    {
      id:4,
      name: 'Sean Bean',
      avatar: '/media/avatars/300-5.jpg',
      totalExperience: '2 years',
      totalClasses: '150',
      job: 'Power Yoga',
      online: true,
    },
    {
      id:5,
      name: 'Brian Cox',
      avatar: '/media/avatars/300-25.jpg',
      totalExperience: '3 years',
      totalClasses: '250',
      job: 'Bikram Yoga',
      online: true,
    },
    {
      id:6,
      name: 'Mikaela Collins',
      color: 'warning',
      totalExperience: '3 years',
      totalClasses: '250',
      job: 'Jivamukti Yoga',
      online: true,
    },
    {
      id:7,
      name: 'Francis Mitcham',
      avatar: '/media/avatars/300-9.jpg',
      totalExperience: '3 years',
      totalClasses: '250',
      job: 'Iyengar Yoga',
      online: true,
    },
    {
      id:8,
      name: 'Olivia Wild',
      color: 'danger',
      totalExperience: '3 years',
      totalClasses: '250',
      job: 'Anusara Yoga',
      online: true,
    },
    {
      id:9,
      name: 'Neil Owen',
      color: 'primary',
      totalExperience: '3 years',
      totalClasses: '250',
      job: 'Sivananda Yoga',
      online: true,
    },
    {
      id:10,
      name: 'Dan Wilson',
      avatar: '/media/avatars/300-23.jpg',
      totalExperience: '3 years',
      totalClasses: '250',
      job: 'Viniyoga',
      online: true,
    },
    {
      id:11,
      name: 'Emma Bold',
      color: 'danger',
      totalExperience: '3 years',
      totalClasses: '250',
      job: 'Kundalini Yoga',
      online: true,
    },
    {
      id:12,
      name: 'Ana Crown',
      avatar: '/media/avatars/300-12.jpg',
      totalExperience: '3 years',
      totalClasses: '250',
      job: 'Yin Yoga',
      online: true,
    },
  ];
  
  const [TrainersData,setTrainersData] = useState(Data);
  const [isFilterBarOpen, setFilterBarOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    experience: '',
    category: '',
    // Add more filter options if needed
  });

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
           
              
               <Button  onClick={handleFilterButtonClick} variant='contained' style={{backgroundColor:`${ThemColor.buttons}`}}>
                 <TuneIcon />
               </Button>
             </Box>
             {isFilterBarOpen && (
        <FilterBar
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
      )}
            
           </Box>

       <Box style={{marginTop:"20px"}}>
       
       <div className='row g-6 g-xl-9'>
        {Data.map((el,index)=>{
          return (
            <div key={index} className='col-md-6 col-xxl-4'>
            <Card3
            color={el.color}
              avatar={el.avatar}
              name={el.name}
              job={el.job}
              totalExperience={el.totalExperience}
              totalClasses={el.totalClasses}
              online={el.online}
              Fun={(id)=>{handelViewClick(id)}}
              id={el.id}
            />
          </div>
          )
        })}
        
      
      </div>
        
       </Box>
   </Box>
  )
}

