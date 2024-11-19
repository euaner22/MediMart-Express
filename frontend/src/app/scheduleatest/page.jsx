import { Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Link from "next/link";

export default function scheduleatest(){
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

      <div style={{ textAlign:"center"}}>
        <p style={{textAlign: "center", 
            fontSize: "40px",
            fontFamily: "Merriweather"}}>Walgreens Pharmacy tests & treatments</p>
            </div>

    <div>

    <p style={{
  textAlign: "left",
  marginLeft: "350px", 
  marginTop: "10px",
  fontSize: "25px",
}}>
  <strong>In-store tests</strong>
</p>

<Box 
  sx={{
    width: 370,
    height: 300,
    borderRadius: 1,
    bgcolor: '#D0B8A8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
    marginLeft: '350px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
    padding: '20px',
  }}
>
  <span style={{ textAlign: 'left' }}>
    <strong style={{ marginTop: "10px" }}>COVID-19 & Flu Rapid Test</strong>
    <p style={{ margin: '5px 0', marginTop: "20px" }}>• COVID-19, Flu A & B with one swab</p>
    <p style={{ margin: '5px 0', marginTop: "10px" }}>• Results available within 30 minutes</p>
    <p style={{ margin: '5px 0', marginTop: "30px" }}><strong>Price: <a style={{ fontSize: "30px" }}> $24.99</a></strong></p>
  </span>

  <Button 
    sx={{
      color: 'white',
      fontSize: '16px',
      backgroundColor: '#C7253E',
      borderRadius: '30px',
      alignSelf: 'center',
      padding: '10px 20px',
    }}
  >
    <strong>Schedule now</strong>
  </Button>
</Box>

<p style={{
  textAlign: "left",
  marginLeft: "750px",  // Adjust for right alignment
  marginTop: "-340px",  // Move the second title up
  marginBottom: "10px",
  fontSize: "25px",
}}>
  <strong>At-home no-cost tests</strong>
</p>

<Box 
  sx={{
    width: 370,
    height: 300,
    borderRadius: 1,
    bgcolor: '#D0B8A8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop:"-8px",
    position: 'relative',
    overflow: 'hidden',
    marginLeft: '750px', // Position to the right
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
    padding: '20px',
  }}
>
  <span style={{ textAlign: 'left' }}>
    <strong style={{ marginTop: "10px" }}>You may be eligible for no-cost at-home COVID-19 tests</strong>
    <p style={{ margin: '5px 0', marginTop: "20px" }}>Order with insurance to see if you are eligible.</p>
  </span>

  <Button 
    sx={{
      color: 'white',
      fontSize: '16px',
      backgroundColor: '#C7253E',
      borderRadius: '30px',
      alignSelf: 'center',
      padding: '10px 20px',
    }}
  >
    <strong>Learn more</strong>
  </Button>
</Box>


<p style={{
  textAlign: "left",
  marginLeft: "350px", 
  marginTop: "10px",
  fontSize: "25px",
}}>
  <strong>More test and treat options</strong>
</p>

<Box 
  sx={{
    width: 370,
    height: 300,
    borderRadius: 1,
    bgcolor: '#D0B8A8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
    marginLeft: '350px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
    padding: '20px',
  }}
>
  <span style={{ textAlign: 'left' }}>
    <strong style={{ marginTop: "10px" }}>Uninsured?</strong>
    <p style={{ margin: '5px 0', marginTop: "20px" }}>Select no-cost tests are available through a government-funded program for patients who qualify.</p>
  </span>

  <Button 
    sx={{
      color: 'white',
      fontSize: '16px',
      backgroundColor: '#C7253E',
      borderRadius: '30px',
      alignSelf: 'center',
      padding: '10px 20px',
    }}
  >
    <strong>See tests for uninsured patients</strong>
  </Button>

  <Link href="#" style={{ textAlign: 'center', color: '#C7253E', marginTop: '10px', textDecoration: 'underline' }}>
    Learn more about no-cost testing
  </Link>
</Box>

<Box 
  sx={{
    width: 370,
    height: 300,
    borderRadius: 1,
    bgcolor: '#D0B8A8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
    marginLeft: '750px', // Right-aligned box
    marginTop: '-302px', // Adjust vertical positioning
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
    padding: '20px',
  }}
>
  <span style={{ textAlign: 'left' }}>
    <strong style={{ marginTop: "10px" }}>Walgreens Pharmacists can prescribe antiviral treatment for COVID-19 (Paxlovid)</strong>
    <p style={{ margin: '5px 0', marginTop: "20px" }}>Patients interested in COVID-19 treatment options, including a Paxlovid prescription, can check their initial eligibility for free.</p>
  </span>

  <Button 
    sx={{
      color: 'white',
      fontSize: '16px',
      backgroundColor: '#C7253E',
      borderRadius: '30px',
      alignSelf: 'center',
      padding: '10px 20px',
    }}
  >
    <strong>Check initial eligibility</strong>
  </Button>
</Box>


        
        
        </div>
        </body>
    )
}