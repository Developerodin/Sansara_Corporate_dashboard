
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
import { AddCircle } from '@mui/icons-material';
import { FeedsWidget6, ListsWidget2 } from '../../../_metronic/partials/widgets';
import SearchIcon from '@mui/icons-material/Search';
const column = [
  { name: "ID" },
  { name: "Name" },
  {name: "Comapny"},
  {name: "Status"},
  { name: "Created At" },
  { name: "Action" },
  { name: "Delete" },
];

export const RecordClasses = () => {

  const navigate = useNavigate();
  const handelViewClick=()=>{
    navigate("/product_view");
  }

  const handelAddNew=()=>{
    navigate("/add_product");
  }

  const rows = [
    { Id: "1", Name: "Samar Sharma", Category: "The ODIN", Price:<Button color='success' variant="contained" >Active</Button>, CreatedAt: "04 / Oct / 2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
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
       
       <div className='row g-5 g-xxl-8'>
      <div className='col-xl-6'>
        <FeedsWidget6 className='mb-5 mb-xxl-8' />
      </div>
      
      <div className='col-xl-6'>
        <FeedsWidget6 className='mb-5 mb-xxl-8' />
      </div>

      <div className='col-xl-6'>
        <FeedsWidget6 className='mb-5 mb-xxl-8' />
      </div>


      <div className='col-xl-6'>
        <FeedsWidget6 className='mb-5 mb-xxl-8' />
      </div>
      </div>
        
       </Box>
   </Box>
  )
}

