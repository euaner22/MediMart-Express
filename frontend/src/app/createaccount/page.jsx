import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from "next/link";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel } from '@mui/material';

export default function signup(){
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
    height: '100vh'           // Full height to vertically center the content
  }}
>
  <Box 
    sx={{
        width: "700px",
        height: "600px",
        borderRadius: '5px',     // Rounded corners
        bgcolor: '#FFFFFF',
        display: 'flex',          // Flexbox layout
        flexDirection: 'column',  // Stacks items vertically
        justifyContent: 'space-evenly', // Spacing for content
        alignItems: 'center',     // Centers content inside the box
        padding: '30px',          // Increased padding for more internal space
        margin: '20px',           // Adds margin outside the box
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Shadow for box
      }}
  >
    {/* Adjusted the styling of h2 to align text to the left */}
    <h2 style={{ alignSelf: 'flex-start', textAlign: 'left', marginTop: "20px", marginBottom: '20px', fontSize: "25px" }}>
      <strong>Create Your PharPharMaMa.com <br />Account <br /></strong>
      <span style={{ fontSize: "15px" }}>
        Already have a Walgreens.com account? <Link href="signup"><strong>Sign in</strong></Link>
      </span>
    </h2>
    
    {/* Email input */}
    <TextField style={{ marginTop: "15px", width: "100%" }}
      id="outlined-Name-input"
      label="First Name"
      type="text"
      autoComplete="Name-line"
    />

    {/* Password input */}
    <TextField style={{ marginTop: "15px", width: "100%" }}
      id="outlined-LastName-input"
      label="Last Name"
      type="text"
      autoComplete="LastName-line"
    />

<TextField style={{ marginTop: "15px", width: "100%" }}
      id="outlined-Email-input"
      label="Email"
      type="text"
      autoComplete="Email-line"
    />

<TextField style={{ marginTop: "15px", width: "100%" }}
      id="outlined-Password-input"
      label="Password"
      type="password"
      autoComplete="password-line"
    />

    {/* Show password checkbox */}
    <FormControlLabel
      control={<Checkbox />}
      label={
        <span style={{ display: 'block', textAlign: 'left', marginLeft:"20x" }}>
          Show Password
        </span>
      }
      sx={{
        justifyContent: 'flex-start', // Aligns checkbox to the left
        width: '100%', // Ensures the label takes the full width
      }}
    />

    {/* Create new account button */}
    <Button 
      sx={{
        width: '100%',
        padding: '10px',
        color: '#000000',
        fontSize: '16px',
        backgroundColor: 'white',
        border: '2px solid #000000',
        borderRadius: '30px',
        marginBottom: '10px',
      }}
    >
      <strong>Create account</strong>
    </Button>

  </Box>
</div>


            </body>
        )
}