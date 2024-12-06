import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import * as React from 'react';
import Grid from '@mui/material/Grid2';
import HealingIcon from '@mui/icons-material/Healing';
import Link from 'next/link';
import SickIcon from '@mui/icons-material/Sick';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

export default function dashboard(){
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
      <div>
  <h2 style={{ textAlign: 'center' }}>
    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '68px', color: '#333333' }}>
      Gear up for a healthy fall
    </span>
  </h2>
  <p style={{ textAlign: "center", fontSize: '32px', color: '#333333'}}>
    <span className='tittle-xx-large'>Your one-stop shop for wellness all throughout autumn - and beyond</span>
  </p>
</div>

<div className="wag-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 grid-flex-overlay">
  <Box 
  sx={{
    width: 280,
    height: 100,
    borderRadius: 3,
    bgcolor: '#C7B7A3',
    '&:hover': { bgcolor: '#B7B7B7' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '20px',
    padding: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'  // Optional padding for spacing inside the box
  }}
>
  {/* Icon on the left side */}
  <div 
  style={{
    width: '60px',           // Set the size of the circle
    height: '60px',          // Same height for a perfect circle
    backgroundColor: '#ECDFCC',  // Background color of the circle
    borderRadius: '50%',     // Makes the div circular
    display: 'flex',         // Flexbox for centering the icon inside the circle
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',     // Space between icon and text
  }}
>
  <HealingIcon 
    style={{
      width: '30px',         // Adjust icon size
      height: '30px',        // Keep aspect ratio for the icon
      color: '#3C3D37',         // Set icon color to contrast with background
    }}
  />
</div>

  {/* Text in the center */}
  <span 
    style={{
      fontSize: '18px',     // Adjust text size
      color: '#1E201E',        // Text color
      textAlign: 'center',  // Center the text
      flex: 1,              // Makes the text area take the remaining space
      fontFamily: "Merriweather"
    }}
  >
    <Link href="getcovid19" underline="hover">
  {'Get Covid-19 & flu vaccines'}
</Link>
  </span>
</Box>
  </div>
  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 grid-flex-overlay">
  <Box 
  sx={{
    width: 280,
    height: 100,
    borderRadius: 3,
    bgcolor: '#C7B7A3',
    '&:hover': { bgcolor: '#B7B7B7' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '20px',
    padding: '10px',  // Optional padding for spacing inside the box
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
  }}
>
  {/* Icon on the left side */}
  <div 
  style={{
    width: '60px',           // Set the size of the circle
    height: '60px',          // Same height for a perfect circle
    backgroundColor: '#ECDFCC',  // Background color of the circle
    borderRadius: '50%',     // Makes the div circular
    display: 'flex',         // Flexbox for centering the icon inside the circle
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',     // Space between icon and text
  }}
>
  <SickIcon 
    style={{
      width: '30px',         // Adjust icon size
      height: '30px',        // Keep aspect ratio for the icon
      color: '#3C3D37',         // Set icon color to contrast with background
    }}
  />
</div>

  {/* Text in the center */}
  <span 
    style={{
      fontSize: '18px',     // Adjust text size
      color: '#1E201E',        // Text color
      textAlign: 'center',  // Center the text
      flex: 1,              // Makes the text area take the remaining space
      fontFamily: "Merriweather"
    }}
  >
    <Link href="testflu" underline="hover">
  {'Test for flu & COVID-19'}
</Link>
  </span>
</Box>
  </div>
  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 grid-flex-overlay">
  <Box 
  sx={{
    width: 280,
    height: 100,
    borderRadius: 3,
    bgcolor: '#C7B7A3',
    '&:hover': { bgcolor: '#B7B7B7' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '20px',
    padding: '10px',  // Optional padding for spacing inside the box
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
  }}
>
  {/* Icon on the left side */}
  <div 
  style={{
    width: '60px',           // Set the size of the circle
    height: '60px',          // Same height for a perfect circle
    backgroundColor: '#ECDFCC',  // Background color of the circle
    borderRadius: '50%',     // Makes the div circular
    display: 'flex',         // Flexbox for centering the icon inside the circle
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',     // Space between icon and text
  }}
>
  <HealingIcon 
    style={{
      width: '30px',         // Adjust icon size
      height: '30px',        // Keep aspect ratio for the icon
      color: '#3C3D37',         // Set icon color to contrast with background
    }}
  />
</div>

  {/* Text in the center */}
  <span 
    style={{
      fontSize: '18px',     // Adjust text size
      color: '#1E201E',        // Text color
      textAlign: 'center',  // Center the text
      flex: 1,              // Makes the text area take the remaining space
      fontFamily: "Merriweather"
    }}
  >
    <Link href="login" underline="hover">
  {'Manage prescriptions'}
</Link>
  </span>
</Box>
  </div>
  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 grid-flex-overlay">
  <Box 
  sx={{
    width: 280,
    height: 100,
    borderRadius: 3,
    bgcolor: '#C7B7A3',
    '&:hover': { bgcolor: '#B7B7B7' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '20px',
    padding: '10px',  // Optional padding for spacing inside the box
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
  }}
>
  {/* Icon on the left side */}
  <div 
  style={{
    width: '60px',           // Set the size of the circle
    height: '60px',          // Same height for a perfect circle
    backgroundColor: '#ECDFCC',  // Background color of the circle
    borderRadius: '50%',     // Makes the div circular
    display: 'flex',         // Flexbox for centering the icon inside the circle
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',     // Space between icon and text
  }}
>
  <HealingIcon 
    style={{
      width: '30px',         // Adjust icon size
      height: '30px',        // Keep aspect ratio for the icon
      color: '#3C3D37',         // Set icon color to contrast with background
    }}
  />
</div>

  {/* Text in the center */}
  <span 
    style={{
      fontSize: '18px',     // Adjust text size
      color: '#1E201E',        // Text color
      textAlign: 'center',  // Center the text
      flex: 1,              // Makes the text area take the remaining space
      fontFamily: "Merriweather"
    }}
  >
    <Link href="login" underline="hover">
  {'90-Day Rx Refills'}
</Link>
  </span>
</Box>
  </div>






{/* TWO 
    BIG 
    PICTURES*/}

<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 grid-flex-overlay">
  <Box 
    sx={{
      width: 625,
      height: 500,
      borderRadius: 1,
      bgcolor: '#C7B7A3',
      '&:hover': { bgcolor: '#B7B7B7' },
      display: 'flex',
      flexDirection: 'column',  // Stack items vertically
      justifyContent: 'flex-end', // Aligns the content at the bottom
      alignItems: 'center',
      position: 'relative',      // Allows positioning of text over the image
      overflow: 'hidden',        // Ensures the image does not overflow the box
      margin: '20px',           // Add margin to create space between boxes
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
    }}
  >
    {/* Image fills the top part of the box */}
    <img 
      src="/supplements.png" 
      alt="supplement"
      style={{
        width: '100%',           // Fill the width of the box
        height: '80%',           // Set height to leave space for text
        objectFit: 'cover',      // Ensures the image covers the box without distortion
        display: 'block',        // Ensures the image behaves like a block-level element
      }}
    />

    {/* Text in the space at the bottom */}
    <span 
      style={{
        fontSize: '17px',
        color: '#1E201E',
        textAlign: 'left',
        marginTop: '15px',       // Adds space between image and text
        fontFamily: '"Roboto", sans-serif',
        backgroundColor: 'white', // Optional: semi-transparent background for better readability
        padding: '5px 10px',      // Optional: padding for text
        width: '100%',             // Ensures text width matches box width
      }}
    >
      <p 
      style={{
        fontSize: '20px',
        marginBottom: '10px',
        marginTop: '15px'
        }}><strong>BOGO FREE & BOGO 50% off</strong></p>
      <p>same-brand vitamins and supplements</p>
      <p style={{color: 'white'}}>a</p>
      <p style={{color: 'white'}}>a</p>

      <Button 
  style={{
    color: 'white',            // Text color
    fontSize: '18px',          // Font size (added 'px' for correct sizing)
    backgroundColor: '#C7253E', // Correct property for background color
    border: '2px solid #FFFFFF',   // Border style, width, and color
    borderRadius: '20px',         // Rounded corners (optional)
    float: 'right'          
  }}
>
  <strong>Shop now</strong>
</Button>

    </span>
  </Box>
</div>

<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 grid-flex-overlay">
  <Box 
    sx={{
      width: 625,
      height: 500,
      borderRadius: 1,
      bgcolor: '#C7B7A3',
      '&:hover': { bgcolor: '#B7B7B7' },
      display: 'flex',
      flexDirection: 'column',  // Stack items vertically
      justifyContent: 'flex-end', // Aligns the content at the bottom
      alignItems: 'center',
      position: 'relative',      // Allows positioning of text over the image
      overflow: 'hidden',        // Ensures the image does not overflow the box
      margin: '20px',           // Add margin to create space between boxes
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
    }}
  >
    {/* Image fills the top part of the box */}
    <img 
      src="/vaccines.jpg" 
      alt="vaccines"
      style={{
        width: '100%',           // Fill the width of the box
        height: '100%',           // Set height to leave space for text
        objectFit: 'cover',      // Ensures the image covers the box without distortion
        display: 'block',        // Ensures the image behaves like a block-level element
      }}
    />

    {/* Text in the space at the bottom */}
    <span 
      style={{
        fontSize: '17px',
        color: '#1E201E',
        textAlign: 'left',
        marginTop: '15px',       // Adds space between image and text
        fontFamily: '"Roboto", sans-serif',
        backgroundColor: 'white', // Optional: semi-transparent background for better readability
        padding: '5px 10px',      // Optional: padding for text
        width: '100%',             // Ensures text width matches box width
      }}
    >
      <p 
      style={{
        fontSize: '20px',
        marginBottom: '10px',
        marginTop: '15px'
        }}><strong>Get any vaccine and get rewarded</strong></p>
      <p>20% off your next in-store purchase of $20 or more as a myWalgreens®</p>
      <p>member when you get any vaccine.</p>
      <p>Restrictions apply.*</p>

      <Button 
  style={{
    color: 'white',            // Text color
    fontSize: '18px',          // Font size (added 'px' for correct sizing)
    backgroundColor: '#C7253E', // Correct property for background color
    border: '2px solid #FFFFFF',   // Border style, width, and color
    borderRadius: '20px',         // Rounded corners (optional)
    float: 'right'          
  }}
>
  <strong>Schedule now</strong>
</Button>
    </span>
  </Box>
</div>

  {/* Repeat for other boxes */}
</div>




{/* 4 small image boxes*/}
<div 
  style={{
    display: 'flex',        // Aligns boxes horizontally
    flexWrap: 'wrap',       // Allows boxes to wrap to the next line on smaller screens
    justifyContent: 'center', // Space between the boxes
              // Adds space between the boxes
  }}
>
  {/* First Box */}
  <Box 
    sx={{
      width: 295,
      height: 380,
      borderRadius: 3,
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
      src="/ess.png" 
      alt="ess"
      style={{
        width: '100%',           
        height: '70%',           
        objectFit: 'cover',     
        display: 'block',        
        margin: '0',             
        padding: '0',   
      }}
    />

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

  {/* Second Box */}
  <Box 
    sx={{
      width: 295,
      height: 380,
      borderRadius: 3,
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
      src="/achuu.png" 
      alt="achuu"
      style={{
        width: '100%',           
        height: '70%',           
        objectFit: 'cover',     
        display: 'block',        
        margin: '0',             
        padding: '0',   
      }}
    />

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
      <strong>Stock up on relief</strong><br/>
      Find top deals on cough, cold & flu items<br/>
      <a style={{color: "#FFFFFF"}}>a</a>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>

  {/* third Box */}
  <Box 
    sx={{
      width: 295,
      height: 380,
      borderRadius: 3,
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
      src="/skinkir.png" 
      alt="skinkir"
      style={{
        width: '100%',           
        height: '70%',           
        objectFit: 'cover',     
        display: 'block',        
        margin: '0',             
        padding: '0',   
      }}
    />

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
      <strong>20% off</strong><br/>
      all contacts with code DEAL20<br/>
      <a style={{color: "#FFFFFF"}}>a</a>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>

  {/* fourth Box */}
  <Box 
    sx={{
      width: 295,
      height: 380,
      borderRadius: 3,
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
      src="/picturee.png" 
      alt="picturee"
      style={{
        width: '100%',           
        height: '70%',           
        objectFit: 'cover',     
        display: 'block',        
        margin: '0',             
        padding: '0',   
      }}
    />

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
      <strong>$10 off</strong><br/>
      $30+ select items from Kenvue brands with KENVUE10<br/>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>
</div>

<Container
  maxWidth="false"
  sx={{
    padding: 0, // Remove any padding
    margin: 0,  // Remove any margin
    width: "100%", // Full width container
  }}
>
  <div>
  <Box
  sx={{
    width: '100%', // Adjust to take up full width
    height: 300,
    borderRadius: 1,
    bgcolor: '#C1BAA1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: 0, // Remove margin to eliminate space around
    padding: '10px',  // Optional padding inside the box
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' 
  }}
>

<Box 
    sx={{
      width: 300,
      height: 300,
      borderRadius: 100,
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
      src="/store1.png" 
      alt="store"
      style={{
        width: '100%',           
        height: '70%',           
        objectFit: 'cover',     
        display: 'block',        
        margin: '0',             
        padding: '0',   
      }}
    />

    {/* Text */}
    <span 
      style={{
        fontSize: '16px',      
        color: '#1E201E',        
        textAlign: 'center',      
        width: '100%',           
        paddingTop: '10px',     
        fontFamily: "Merriweather",
      }}
    >
      <strong>Pickup in as little as 30 minutes</strong><br/>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>
  
  <Box 
    sx={{
      width: 300,
      height: 300,
      borderRadius: 100,
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
      src="/time.png" 
      alt="store"
      style={{
        width: '100%',           
        height: '70%',           
        objectFit: 'cover',     
        display: 'block',        
        margin: '0',             
        padding: '0',   
      }}
    />

    {/* Text */}
    <span 
      style={{
        fontSize: '16px',      
        color: '#1E201E',        
        textAlign: 'center',      
        width: '100%',           
        paddingTop: '10px',     
        fontFamily: "Merriweather",
      }}
    >
      <strong>FREE 1-Hour Delivery on $35</strong><br/>
    </span>
  </Box>

  <Box 
    sx={{
      width: 300,
      height: 300,
      borderRadius: 100,
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
      src="/calendar.png" 
      alt="store"
      style={{
        width: '80%',           
        height: '60%',           
        objectFit: 'cover',     
        display: 'block',        
        margin: '0',             
        padding: '0',   
      }}
    />

    {/* Text */}
    <span 
      style={{
        fontSize: '16px',      
        color: '#1E201E',        
        textAlign: 'center',      
        width: '100%',           
        paddingTop: '10px',     
        fontFamily: "Merriweather",
      }}
    >
      <strong>Weekly Ads</strong><br/>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>

  <Box 
    sx={{
      width: 300,
      height: 300,
      borderRadius: 100,
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
      src="/store1.png" 
      alt="store"
      style={{
        width: '100%',           
        height: '70%',           
        objectFit: 'cover',     
        display: 'block',        
        margin: '0',             
        padding: '0',   
      }}
    />

    {/* Text */}
    <span 
      style={{
        fontSize: '16px',      
        color: '#1E201E',        
        textAlign: 'center',      
        width: '100%',           
        paddingTop: '10px',     
        fontFamily: "Merriweather",
      }}
    >
      <strong>Join my Pharmamapapa® today</strong><br/>
    </span>
    <span style={{ textAlign: 'right' }}>
      <Link href="login" underline="hover">
        <strong><u>{'Shop Now'}</u></strong>
      </Link>
    </span>
  </Box>
</Box>  
   </div>
</Container>




    </body>
  )
}

