import { Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TableContainer, Table, TableHead, TableRow } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Link from "next/link";

export default function testflu(){
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box 
        sx={{
          width: 1400,
          height: 450,
          bgcolor: '#1E201E',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '20px',
          padding: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Container for text and buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '120px' }}>
          {/* Text aligned to the left */}
          <h1 
            style={{
              color: '#FFFFFF',
              fontSize: '40px',
              textAlign: 'left',
              fontFamily: 'Calibre, sans-serif',
              margin: 0,
            }}
          >
            COVID-19 and Flu <br />testing & treatment
          </h1>

          {/* Container for first and second buttons aligned side by side */}
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            {/* First Button - Shop Now */}
            <Button 
              style={{
                color: 'black',
              fontSize: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #000000',
              borderRadius: '30px',
              marginTop: '10px',  // Positioned below the first two buttons
              fontFamily: 'Times New Roman, Times, serif',
              }}
            >
              <strong>
              <Link href="scheduleatest" underline="hover">
  <strong>Schedule a test</strong>
</Link></strong>
            </Button>

            {/* Second Button - Schedule a test */}
            <Button 
              style={{
                color: 'black',
              fontSize: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #000000',
              borderRadius: '30px',
              marginTop: '10px',  // Positioned below the first two buttons
              fontFamily: 'Times New Roman, Times, serif',
              }}
            >
              <strong>Shop at-home tests</strong>
            </Button>
          </div>

          {/* Third Button - Learn about Covid-19 treatment (below the first and second buttons) */}
          <Button 
            style={{
              color: 'black',
              fontSize: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #000000',
              borderRadius: '30px',
              marginTop: '10px',  // Positioned below the first two buttons
              fontFamily: 'Times New Roman, Times, serif',
            }}
          >
            <strong>Learn about Covid-19 treatment</strong>
          </Button>
        </div>

        {/* Image on the right side */}
        <img 
          src="/testest.png"  // Replace with your image source
          alt="testest"
          style={{
            height: '105%',
            width: "50%",
            objectFit: 'contain',
            marginRight: '120px',
          }}
        />
      </Box>
    </div>

    <div><p style=
    {{fontFamily: 'Times New Roman, Times, serif',
        fontSize: "50px",
        textAlign: "center"
    }}>Testing services and at-home tests</p>
    
    <p style=
    {{
        fontSize: "20px",
        textAlign: "center",
        marginTop: "10px",
        marginBottom: "20px"
    }}><strong>Use your FSA, HSA or HRA funds for treatment & testing</strong></p>
    </div>

    <div style={{marginRight: "100px"}}>
  <TableContainer component={Paper} sx={{ marginX: '50px', border: '1px solid #000000', borderRadius: '10px',}}>
    <Table sx={{ minWidth: 300 }} aria-label="customized table">
      <TableHead>
        <TableRow style={{ backgroundColor: "#D8D2C2"
         }}>
          <TableCell>Test type</TableCell>
          <TableCell>Cost</TableCell>
          <TableCell>Result time</TableCell>
          <TableCell>Age</TableCell>
        </TableRow>
      </TableHead>

      <TableBody style={{backgroundColor: "#F8EDE3"}}>
        <TableRow>
          <TableCell><p style={{color: "#B43F3F", fontSize:"16px"}}><strong>COVID-19 & FLU COMBINATION <br/></strong></p>
          <p style={{fontSize: "16px", marginTop: "10px"}}><strong>Rapid Test</strong></p>
          <p style={{marginTop: "10px"}}>Antigen on-site testing that quickly detects COVID-19<br/> 
          and/or influenza A/B with a single swab sample. <br/></p>
          <p style={{marginTop: "10px"}}>
          <Link href="Schedule Now" underline="hover">
            <strong>Schedule Now</strong></Link>
          </p>
          </TableCell>

          <TableCell><p style={{fontSize: "16px"}}><strong>Uninsured patients:</strong></p>
          <p>If you meet federal eligibility criteria, you may qualify for no<br /> 
          cost testing*</p>
          </TableCell>

          <TableCell><p style={{fontSize: "16px", marginTop: "-25px"}}><strong>30 minutes</strong></p>
          <p>Processed on-site</p>
          </TableCell>
          <TableCell><p style={{marginTop: "-25px", fontSize:"25px"}}><strong>3+</strong></p></TableCell>
        </TableRow>
      </TableBody>

      <TableBody>
        <TableRow>
          <TableCell><p style={{color: "#B43F3F", fontSize:"16px"}}><strong>COVID-19 & FLU COMBINATION <br/></strong></p>
          <p style={{fontSize: "16px", marginTop: "10px"}}><strong>Rapid Test</strong></p>
          <p style={{marginTop: "10px"}}>Antigen on-site testing that quickly detects COVID-19<br/> 
          and/or influenza A/B with a single swab sample. <br/></p>
          <p style={{marginTop: "10px"}}>
          <Link href="Schedule Now" underline="hover">
            <strong>Schedule Now</strong></Link>
          </p>
          </TableCell>

          <TableCell><p style={{fontSize: "16px"}}><strong>Uninsured patients:</strong></p>
          <p>If you meet federal eligibility criteria, you may qualify for no<br /> 
          cost testing*</p>
          </TableCell>

          <TableCell><p style={{fontSize: "16px", marginTop: "-25px"}}><strong>30 minutes</strong></p>
          <p>Processed on-site</p>
          </TableCell>
          <TableCell><p style={{marginTop: "-25px", fontSize:"25px"}}><strong>3+</strong></p></TableCell>
        </TableRow>
      </TableBody>

      <TableBody style={{backgroundColor: "#F8EDE3"}}>
        <TableRow>
          <TableCell><p style={{color: "#B43F3F", fontSize:"16px"}}><strong>COVID-19 & FLU COMBINATION <br/></strong></p>
          <p style={{fontSize: "16px", marginTop: "10px"}}><strong>Rapid Test</strong></p>
          <p style={{marginTop: "10px"}}>Antigen on-site testing that quickly detects COVID-19<br/> 
          and/or influenza A/B with a single swab sample. <br/></p>
          <p style={{marginTop: "10px"}}>
          <Link href="Schedule Now" underline="hover">
            <strong>Schedule Now</strong></Link>
          </p>
          </TableCell>

          <TableCell><p style={{fontSize: "16px"}}><strong>Uninsured patients:</strong></p>
          <p>If you meet federal eligibility criteria, you may qualify for no<br /> 
          cost testing*</p>
          </TableCell>

          <TableCell><p style={{fontSize: "16px", marginTop: "-25px"}}><strong>30 minutes</strong></p>
          <p>Processed on-site</p>
          </TableCell>
          <TableCell><p style={{marginTop: "-25px", fontSize:"25px"}}><strong>3+</strong></p></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
</div>


            
        </body>
    )
}