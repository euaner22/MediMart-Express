import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Checkbox, FormControlLabel } from '@mui/material';


export default function getcovid19(){
    return(
        <body style={{ backgroundColor: '#D8D2C2' }}>
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
    display: 'flex',          // Enables flexbox layout
    justifyContent: 'center', // Centers the box horizontally
    alignItems: 'center',     // Centers the box vertically (optional)
  }}
>
  <Box 
    sx={{
      width: 950,
      height: 130,
      borderTopLeftRadius: '15px',  // Curve top-left corner
      borderTopRightRadius: '15px', // Curve top-right corner
      borderBottomLeftRadius: '0px',  // No curve for bottom-left corner
      borderBottomRightRadius: '0px', // No curve for bottom-right corner
      bgcolor: '#433878',
      display: 'flex',               // Flexbox layout
      justifyContent: 'space-between', // Spaces the text and image apart
      alignItems: 'center',           // Centers content vertically inside the box
      margin: '20px',
      padding: '10px',                // Optional padding for spacing inside the box
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' 
    }}
  >
    {/* Text aligned to the left */}
    <h1 
      style={{
        color: '#FFFFFF',
        fontSize: '40px',
        textAlign: 'left',     // Aligns the text inside the h1 to the left
        marginLeft: '120px',    // Adds a margin from the left side of the box
        fontFamily: 'Times New Roman, Times, serif',  // Roman-style font
      }}
    >
      Schedule vaccination <br/>appointments
    </h1>

    {/* Image on the right side */}
    <img 
      src="/doctor.png"  // Replace with your image source
      alt="doctor"          // Alt text for accessibility
      style={{
        height: '120%',       // Image height matches the box height
        objectFit: 'contain',  // Ensures the image fits without distortion
        marginRight: '120px',   // Adds space between the image and the right edge
      }}
    />
  </Box>
</div>

<div style={{ textAlign: 'center', width: '100%' }}>
  <span style={{ textAlign: "center", display: 'block' }}>
  <Link href="login" underline="hover">
  <strong> <VaccinesIcon/>Get vaccine information, including records and appointments</strong>
</Link>
  </span>
</div>

<div 
  style={{
    display: 'flex',           // Enables flexbox layout
    justifyContent: 'center',   // Centers the box horizontally
    alignItems: 'center',       // Centers the box vertically (optional)
    height: '30vh'             // Takes full viewport height (optional for vertical centering)
  }}
>
  <Box
    sx={{
      width: 700,
      height: 130,
      borderTopLeftRadius: '15px',  // Curve top-left corner
      borderTopRightRadius: '15px', // Curve top-right corner
      borderBottomLeftRadius: '15px',  // Curve bottom-left corner
      borderBottomRightRadius: '15px', // Curve bottom-right corner
      bgcolor: '#F5F7F8',
      display: 'flex',                // Flexbox layout
      justifyContent: 'space-between', // Spaces the text and image apart
      alignItems: 'center',           // Centers content vertically inside the box
      margin: '20px',
      padding: '10px',                // Optional padding for spacing inside the box
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' 
    }}
  >
    {/* Image on the left */}
    <img 
      src="/pharma.jpg"    // Replace with your image source
      alt="pharma"
      style={{
        width: '100px',        // Set width of the image
        height: '100px',       // Set height of the image
        objectFit: 'cover',    // Ensures image fills its area without distortion
        marginRight: '20px'    // Adds spacing between the image and text
      }}
    />

    {/* Text on the right */}
    <div style={{ flex: 1, textAlign: 'left' }}>  {/* Flex makes the text take remaining space */}
      <p style={{ margin: 0 }}>Get your flu shot or any vaccine 
        and get a coupon for 20% off your next<br/> 
        purchase of $20 or more up to $100 as a myWalgreens member2</p>
    </div>

  </Box>

</div>

<div style={{ textAlign: "left", marginLeft: "325px" }}>
  <span style={{ color: "#0F67B1", marginTop: "1px", fontSize: "18px", display: "flex", alignItems: "center" }}>
    <ErrorOutlineIcon style={{ marginRight: "8px" }} /> {/* Adds space between the icon and the text */}
    Appointments for the updated COVID-19 vaccine are now available!
    <br />
  </span>
</div>

<div style={{ textAlign: "left", marginLeft: "325px", marginTop: "15px" }}> {/* Increased marginTop for more space */}
  <p style={{ margin: "0" }}>* Required</p> {/* Removes default paragraph margin */}
</div>

<div style={{ textAlign: "left", marginLeft: "325px", marginTop: "15px" }}> {/* Increased marginTop for more space */}
  <p style={{ margin: "0", fontSize:"16px" }}><strong>* Where does the patient want to get vaccinated?</strong></p> {/* Removes default paragraph margin */}

  <TextField
  style={{ marginTop: "15px", width: "723px" }}
  id="outlined-location-input"
  label="Enter a location"
  type="text"
  autoComplete="address-line"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <SearchIcon /> {/* Replace with your desired icon */}
      </InputAdornment>
    ),
  }}
/>
</div> 

<div style={{ textAlign: "left", marginLeft: "325px", marginTop: "15px" }}> {/* Increased marginTop for more space */}
  <p style={{ margin: "0", fontSize:"16px" }}><strong>When was the patient born?</strong></p> {/* Removes default paragraph margin */}

  <TextField style={{marginTop: "15px", width: "723px"}}
  id="outlined-Birth-input"
  label="Birthdate"
  type="text" // Change the type to "text" for location input
  autoComplete="birth-line" // Use a suitable autocomplete option for location
/>
</div> 

{/* contact number */}
<div style={{ textAlign: "left", marginLeft: "325px", marginTop: "50px" }}> {/* Increased marginTop for more space */}
  <p style={{ margin: "0", fontSize:"26px" }}><strong>Contact Information</strong></p> {/* Removes default paragraph margin */}
    <p>We'll use this to contact the patient about the appointment.</p>
  <TextField style={{marginTop: "15px", width: "723px"}}
  id="outlined-email-input"
  label="Email"
  type="text" // Change the type to "text" for location input
  autoComplete="email-line" // Use a suitable autocomplete option for location
/>

    <TextField style={{marginTop: "25px", width: "723px"}}
    id="outlined-phone-input"
    label="Phone"
    type="int" // Change the type to "text" for location input
    autoComplete="number-line" // Use a suitable autocomplete option for location
    />

</div> 
<div style={{ marginLeft: "325px", marginRight:"325px", marginTop: "20px", textAlign: "center" }}>
      <FormControlLabel
        control={<Checkbox />}
        label={
          <span style={{ display: 'block', textAlign: 'center' }}>
            By checking this box, I agree to receive automated text messages 
            to the mobile phone number listed above from Walgreens about both this 
            appointment (including failure to complete the appointment, confirmation, 
            cancellation, and reminder notices) and any previously scheduled appointments
            for which I have consented to receive SMS text messages. I’m aware that mobile 
            messages and data rates may apply, and that my consent is not a condition for 
            purchasing the services. Reply STOP to opt-out. I also agree to the Walgreens
            Terms of Use and Privacy Policy.
          </span>
        }
      />
    </div>

        </body>
    )
}