import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Apply from './Apply';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

 function Cou() {
  return (
    <div style={{ display: 'flex', flexDirection:'row' }}>
      <div className='mb' style={{display:'flex'}}>
        <img className='img' src='https://t3.ftcdn.net/jpg/01/75/97/78/240_F_175977887_zpWaS3D5MZVbqgPqjfaeRlRVFSXrDcS3.jpg' alt="Yoga Center" style={{marginLeft:'200px',marginTop:'100px'}} />
      <div/>
      <div>
        <Card sx={{ minWidth: 650, marginLeft: 8, marginTop: 12 }}>
          <CardContent>
            <h1 className='cd'>Yoga Center</h1>
            <ul className='poi'>

  <li>Address: B.K.Pudur,Kuniamuthur,near preethi bakes </li><br></br>
            <li>Location: Coimbatore</li><br></br>
  <li>Timing:6:00am-5:00pm</li><br></br>
  <li>Rating:</li><br></br>
  
            </ul>
          </CardContent>
          <CardActions>
            {/* <Link to="/apply"> */}
              <Button size="small" ><Apply/></Button>
              
            {/* </Link> */}
            
          </CardActions>
        </Card>
        
        </div>  
      </div>
    </div>
  );
}








export default Cou