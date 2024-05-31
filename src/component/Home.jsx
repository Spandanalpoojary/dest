import React from 'react'
import {Link} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DataArrayIcon from '@mui/icons-material/DataArray';
import BadgeIcon from '@mui/icons-material/Badge';
import AgricultureRoundedIcon from '@mui/icons-material/AgricultureRounded';
import AddchartTwoToneIcon from '@mui/icons-material/AddchartTwoTone';
import MediationOutlinedIcon from '@mui/icons-material/MediationOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import CardMembershipTwoToneIcon from '@mui/icons-material/CardMembershipTwoTone';


export default function Home() {
    
  return (
    <div style={{backgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQmFN0jP7-sWRxvnY33CdJvGk2qzZlDo5Ng&usqp=CAU",backgroundSize:'cover'}} ><center>
      <h1 style={{color:"blue"}}>Home page</h1></center>
     <Stack spacing={2} direction="row">
     <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}} variant="outlined"><AcUnitIcon/><Link to="/Arrow">Arrow Function</Link></Button>
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}} variant="outlined"><DataArrayIcon/><Link to="/Array">Array Method</Link></Button>
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}} variant="outlined"><AgricultureRoundedIcon/><Link to="/Spread">Spread Operator</Link></Button></Stack><br/>
      <Stack spacing={2} direction="row">
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}}  variant="outlined"><MediationOutlinedIcon/><Link to="/Destruct">Destructuring</Link></Button>
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}}  variant="outlined"><BadgeIcon/><Link to="/Spandana">Spandana</Link></Button>
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}} variant="outlined"><AddchartTwoToneIcon/><Link to="/Ternary">Ternary Operator</Link></Button>
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}} variant="outlined"><ImportExportOutlinedIcon/><Link to="/Imp">Import</Link></Button></Stack><br/>
      <Stack spacing={2} direction="row">
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}} variant="outlined"><ImportExportOutlinedIcon/><Link to="/props">Properties</Link></Button>
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}}  variant="outlined"><BackupTableTwoToneIcon/><Link to="/MUITable">MUITable</Link></Button>
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}}  variant="outlined"><CardMembershipTwoToneIcon/><Link to="/Card">Card</Link></Button></Stack><br/>
      <Stack spacing={2} direction="row">
        <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}}  variant="outlined"><CardMembershipTwoToneIcon/><Link to="/State">State</Link></Button>
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}} variant="outlined"><AcUnitIcon/><Link to="/Effect">Effect</Link></Button>
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}}   variant="outlined"><CardMembershipTwoToneIcon/><Link to="/LocalStorage">Local Storage</Link></Button>
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}}  variant="outlined"><CardMembershipTwoToneIcon/><Link to="/Api">API</Link></Button>
      <Button style={{backgroundColor:'pink',width:"500px",height:"100px"}}  variant="outlined"><BackupTableTwoToneIcon/><Link to="/Reciepe">Reciepe</Link></Button>
      </Stack><br/>
    
    
    </div>
  )
}
