import React from 'react';
import { Box, Button, Popover, Slider, Typography } from '@mui/material';
import { ThemColor } from '../../Them/ThemColor';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const FilterBar = ({ selectedFilters, onFilterChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleExperienceChange = (_, value) => {
    onFilterChange('experience', value);
  };

  const handleCategoryChange = (category) => {
    onFilterChange('category', category);
    handleClose();
  };

  return (
    <div>
      <Box>
        <Button
          aria-describedby={id}
          variant="contained"
          style={{backgroundColor:`${ThemColor.buttons}`,marginLeft:"10px"}}
          onClick={handleClick}
        >
          <ArrowDropDownIcon/>
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Box p={2}>
            <Typography gutterBottom>Experience</Typography>
            <Slider
              value={selectedFilters.experience}
              onChange={handleExperienceChange}
              valueLabelDisplay="auto"
              step={1}
              marks={[
                { value: 1, label: '1 year' },
                { value: 2, label: '2 years' },
                { value: 3, label: '3 years' },
                { value: 4, label: '4 years' },
                { value: 5, label: '5 years' },
              ]}
              max={5}
            />
            <Typography gutterBottom>Category</Typography>
            <Button onClick={() => handleCategoryChange('Hatha Yoga')}>
              Hatha Yoga
            </Button>
            <Button onClick={() => handleCategoryChange('Vinyasa Yoga')}>
              Vinyasa Yoga
            </Button>
            {/* Add more category buttons as needed */}
          </Box>
        </Popover>
      </Box>
    </div>
  );
};

export default FilterBar;
