import { Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from "next/link";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';

export default function pickup(){
    return(
        <body style={{ backgroundColor: '#F5F5F5'}}>
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

      <React.Fragment>
                <CssBaseline />
                <Box sx={{ width: '100%', bgcolor: '#CBDCEB', height: '40px',  }}>
                <div 
  style={{
    display: 'flex',           // Enables flexbox
    justifyContent: 'center',  // Centers content horizontally
    alignItems: 'center',      // Centers content vertically
    width: '100%',             // Full width
    paddingTop: '10px',        // Padding for spacing above
    fontFamily: 'Merriweather',
    fontSize: '20px',
    color: '#133E87',
    textAlign: 'center',       // Aligns text inside the element
  }}
>
  <span>
    <strong>Extra 20% off $50+ sitewide with code NOW20</strong><br />
  </span>
</div>
         </Box>
        </React.Fragment>

        <Box
  sx={{
    display: 'flex',           // Enables flexbox
    justifyContent: 'center',  // Centers horizontally
    alignItems: 'center',      // Centers verticall
    marginTop: '30px',           // Full viewport height (adjust if needed)
    backgroundColor: '#F5F5F5' // Optional background color for the box
  }}
>
  <Button
    style={{
      color: 'white',              // Text color
      fontSize: '16px',            // Font size
      backgroundColor: '#133E87', // Background color
      border: '2px solid #FFFFFF', // Border
      borderRadius: '25px',        // Rounded corners
      padding: '10px 10px',        // Padding for better size
    }}
  >
    <strong>30-minute Pickup</strong>
  </Button>

  <Button
    style={{
      color: '#133E87',              // Text color
      fontSize: '16px',            // Font size
      backgroundColor: '#FFFFFF', // Background color
      border: '2px solid #133E87', // Border
      borderRadius: '25px',        // Rounded corners
      padding: '10px 10px',        // Padding for better size
    }}
  >
    <strong>1 hour delivery</strong>
  </Button>

</Box>

<Paper>
<div
  style={{
    display: 'flex',           // Enables flexbox
    justifyContent: 'center',  // Centers content horizontally
    alignItems: 'center',      // Centers content vertically
    height: '80vh',            // Full viewport height (adjust if needed)
    backgroundColor: '#F5F5F5', // Optional background color for the container
    position: 'relative',      // This allows absolute positioning of children
  }}
>
  <img
    src="/capture.png"
    alt="capture"
    style={{
      width: '80%',            // Adjust image width
      height: '90%',           // Maintain aspect ratio
      objectFit: 'cover',      // Ensures the image fills its box without distortion
      borderRadius: '10px'
    }}
  />
  
</div>
<Box
    sx={{
      width: 700,
      height: 200,
      bgcolor: '#FFFFFF',
      position: 'absolute',  // Set to absolute to position at the bottom
      bottom: '',             // Position it at the bottom of the parent container
      left: '50%',           // Centers the box horizontally
      transform: 'translateX(-50%)',  // Ensures the box is perfectly centered
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px',
      marginTop: '-60px',
      padding: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      borderRadius: '10px',
    }}
  >
    <div
  style={{
    display: 'flex',
    justifyContent: 'center', // Centers content horizontally
    alignItems: 'center',     // Centers content vertically
    height: '100vh',          // Ensure the parent div takes full viewport height
  }}
>
  <p
    style={{
      fontSize: '30px',
      color: '#133E87',
      textAlign: 'center',     // Centers text horizontally
    }}
  >
    <strong>30-minute Pickup*</strong><br />
    <strong style={{fontSize:'20px'}}>order ready in as little as 30 minutes*</strong><br/>

    <Button
    style={{
      color: '#133E87',              // Text color
      fontSize: '16px',            // Font size
      backgroundColor: '#FFFFFF', // Background color
      border: '2px solid #133E87', // Border
      borderRadius: '25px',        // Rounded corners
      padding: '10px 10px',        // Padding for better size
    }}
  >
    <strong>How it works?</strong>
  </Button>

  </p>
</div>
  </Box>


    </Paper>

            
        </body>
    )
}