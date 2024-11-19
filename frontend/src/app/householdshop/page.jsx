import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

    export default function shop() {

  return(
    <body style={{ backgroundColor: '#D8D2C2'}}>
        <header class="bg-white">
        <nav className="flex justify-between item-center w-[92%] mx-auto">
          <div>
          <img class="" 
          src="/pharma.jpg"
          width="80" 
          height="50"/>
          </div>
          <div class="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:item-center md:gap-[4vw] gap-8">
              <li>
              <Button href="/dashboard" underline="hover"
                className="rounded-full hover:text-gray-500"> Hot Products
                        </Button>       
              </li>
              <li>
              <Button href="/dashboard" underline="hover"
                className="rounded-full hover:text-gray-500"> Hot Medicines
                        </Button>       
              </li>
              <li>
              <Button href="/dashboard" underline="hover"
                className=" rounded-full hover:text-gray-500"> Hot 
                        </Button>       
              </li>
              
            </ul>
          </div>
          <div className='flex items-center gap-6'>
          <Button href="/dashboard" underline="hover"
                className=" rounded-full hover:bg-[#87acec] bg-[#a6c1ee] text-white px-5 py-2"> Sign in
                        </Button>
          <MenuIcon onClick="onToggleMenu(this)" className="text-3xl cursor-pointer md:hidden" />
          </div>
        </nav>
      </header>

      <div 
  style={{
    display: 'flex',        // Aligns boxes horizontally
    flexWrap: 'wrap',       // Allows boxes to wrap to the next line on smaller screens
    justifyContent: 'center', // Space between the boxes
              // Adds space between the boxes
  }}
>
  {/* 2nd Box */}
  <Box 
    sx={{
      width: 280,
      height: 500,
      borderRadius: 1.5,
      bgcolor: '#FFFFFF',
      flexDirection: 'column',  
      display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '20px',
    padding: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' 
    }}
  >
    {/* Image */}
    <img 
      src="/toiletpaper.png" 
      alt="toiletpaper"
      style={{
        width: '50%',           
        height: '38%',           
        objectFit: 'cover',     
        display: 'block',        
        marginTop: '-150px',             
        padding: '0',   
      }}
    />

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">#:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="Age"
          label="Age"
          onChange="handleChange"
        >
          <MenuItem value={10}>12.7 oz</MenuItem>
          <MenuItem value={20}>17.6 oz</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box></Box>

    {/* Text */}
    <span 
      style={{
        fontSize: '16px',      
        color: '#1E201E',        
        textAlign: 'left',      
        width: '100%',           
        paddingTop: '10px',     
        fontFamily: "Merriweather",
      }}
    >
      <strong>Extra 20% off</strong><br/>
      $25+ select household essentials with code CLEAN20<br/>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>

  <Box 
    sx={{
      width: 280,
      height: 500,
      borderRadius: 1.5,
      bgcolor: '#FFFFFF',
      flexDirection: 'column',  
      display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '20px',
    padding: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' 
    }}
  >
    {/* Image */}
    <img 
      src="/toiletpaper.png" 
      alt="toiletpaper"
      style={{
        width: '50%',           
        height: '38%',           
        objectFit: 'cover',     
        display: 'block',        
        marginTop: '-150px',             
        padding: '0',   
      }}
    />

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">#:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="Age"
          label="Age"
          onChange="handleChange"
        >
          <MenuItem value={10}>12.7 oz</MenuItem>
          <MenuItem value={20}>17.6 oz</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box></Box>

    {/* Text */}
    <span 
      style={{
        fontSize: '16px',      
        color: '#1E201E',        
        textAlign: 'left',      
        width: '100%',           
        paddingTop: '10px',     
        fontFamily: "Merriweather",
      }}
    >
      <strong>Extra 20% off</strong><br/>
      $25+ select household essentials with code CLEAN20<br/>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>

  <Box 
    sx={{
      width: 280,
      height: 500,
      borderRadius: 1.5,
      bgcolor: '#FFFFFF',
      flexDirection: 'column',  
      display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '20px',
    padding: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' 
    }}
  >
    {/* Image */}
    <img 
      src="/toiletpaper.png" 
      alt="toiletpaper"
      style={{
        width: '50%',           
        height: '38%',           
        objectFit: 'cover',     
        display: 'block',        
        marginTop: '-150px',             
        padding: '0',   
      }}
    />

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">#:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="Age"
          label="Age"
          onChange="handleChange"
        >
          <MenuItem value={10}>12.7 oz</MenuItem>
          <MenuItem value={20}>17.6 oz</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box></Box>

    {/* Text */}
    <span 
      style={{
        fontSize: '16px',      
        color: '#1E201E',        
        textAlign: 'left',      
        width: '100%',           
        paddingTop: '10px',     
        fontFamily: "Merriweather",
      }}
    >
      <strong>Extra 20% off</strong><br/>
      $25+ select household essentials with code CLEAN20<br/>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>

  <Box 
    sx={{
      width: 280,
      height: 500,
      borderRadius: 1.5,
      bgcolor: '#FFFFFF',
      flexDirection: 'column',  
      display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '20px',
    padding: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' 
    }}
  >
    {/* Image */}
    <img 
      src="/toiletpaper.png" 
      alt="toiletpaper"
      style={{
        width: '50%',           
        height: '38%',           
        objectFit: 'cover',     
        display: 'block',        
        marginTop: '-150px',             
        padding: '0',   
      }}
    />

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">#:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="Age"
          label="Age"
          onChange="handleChange"
        >
          <MenuItem value={10}>12.7 oz</MenuItem>
          <MenuItem value={20}>17.6 oz</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box></Box>

    {/* Text */}
    <span 
      style={{
        fontSize: '16px',      
        color: '#1E201E',        
        textAlign: 'left',      
        width: '100%',           
        paddingTop: '10px',     
        fontFamily: "Merriweather",
      }}
    >
      <strong>Extra 20% off</strong><br/>
      $25+ select household essentials with code CLEAN20<br/>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>

  <Box 
    sx={{
      width: 280,
      height: 500,
      borderRadius: 1.5,
      bgcolor: '#FFFFFF',
      flexDirection: 'column',  
      display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '20px',
    padding: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' 
    }}
  >
    {/* Image */}
    <img 
      src="/toiletpaper.png" 
      alt="toiletpaper"
      style={{
        width: '50%',           
        height: '38%',           
        objectFit: 'cover',     
        display: 'block',        
        marginTop: '-150px',             
        padding: '0',   
      }}
    />

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">#:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="Age"
          label="Age"
          onChange="handleChange"
        >
          <MenuItem value={10}>12.7 oz</MenuItem>
          <MenuItem value={20}>17.6 oz</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box></Box>

    {/* Text */}
    <span 
      style={{
        fontSize: '16px',      
        color: '#1E201E',        
        textAlign: 'left',      
        width: '100%',           
        paddingTop: '10px',     
        fontFamily: "Merriweather",
      }}
    >
      <strong>Extra 20% off</strong><br/>
      $25+ select household essentials with code CLEAN20<br/>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>

  <Box 
    sx={{
      width: 280,
      height: 500,
      borderRadius: 1.5,
      bgcolor: '#FFFFFF',
      flexDirection: 'column',  
      display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '20px',
    padding: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' 
    }}
  >
    {/* Image */}
    <img 
      src="/toiletpaper.png" 
      alt="toiletpaper"
      style={{
        width: '50%',           
        height: '38%',           
        objectFit: 'cover',     
        display: 'block',        
        marginTop: '-150px',             
        padding: '0',   
      }}
    />

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">#:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="Age"
          label="Age"
          onChange="handleChange"
        >
          <MenuItem value={10}>12.7 oz</MenuItem>
          <MenuItem value={20}>17.6 oz</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box></Box>

    {/* Text */}
    <span 
      style={{
        fontSize: '16px',      
        color: '#1E201E',        
        textAlign: 'left',      
        width: '100%',           
        paddingTop: '10px',     
        fontFamily: "Merriweather",
      }}
    >
      <strong>Extra 20% off</strong><br/>
      $25+ select household essentials with code CLEAN20<br/>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>

      
</div>

        

    </body>
  )
}


