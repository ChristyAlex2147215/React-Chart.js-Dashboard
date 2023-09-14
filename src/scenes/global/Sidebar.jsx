import React from 'react'
import { useState } from 'react'
import {Menu,MenuItem} from "react-pro-sidebar";
import { ProSidebar } from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import {Box,IconButton,Typography,useTheme} from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from'@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from'@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from'@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from'@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from'@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from'@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlined from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import  MenuOutlinedIcon  from '@mui/icons-material/MenuOutlined';
import  MapOutlinedIcon  from '@mui/icons-material/MapOutlined';
import jesus from "../../assets/jesus.jpg"


const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollaped] = useState(false);
  const [selected, setSelected] = useState("Dashboard");


const Item=({title,to,icon,selected,setSelected})=>
{
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  return(
    <MenuItem active={selected===title} style={{color:theme.palette.mode==="dark"? colors.grey[100]:colors.primary[200]}} onClick={()=>setSelected(title)} icon={icon} >
      <Typography>{title}</Typography>
      <Link to={to}/>
    </MenuItem> 

  ) 
}

  return (
    <Box
    sx={{
      "& .pro-sidebar-inner":{background: `${colors.primary[400]} !important`},
      "& .pro-sidebar-wrapper":{backgroundColor:"transparent !important"},
      "& .pro-sidebar-item":{padding:'5px 35px 5px 20px !important'},
      "& .pro-sidebar-item:hover":{color:"#868dfb !important"},
      "& .pro-sidebar-item.active":{color:"#6870fa !important"},
      "& .pro-icon-wrapper":{backgroundColor:`${theme.palette.mode==="dark" ? "":colors.greenAccent[400]} !important`},
      "& .pro-item-content:hover":{color:`${theme.palette.mode==="dark" ? "":"black"}`}
    }}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
           {/*logo and menu icons  */}
          <MenuItem 
          onClick={()=>setIsCollaped(!isCollapsed)} 
          icon={ isCollapsed ? <MenuOutlinedIcon/>:undefined} 
          style={{ margin:"10px 0 20px 0 ", color: colors.grey[100]}}>
            {!isCollapsed && (<Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
              <Typography variant='h3' color={colors.grey[100]}>
                ADMINIST
              </Typography>
              <IconButton onClick={()=>setIsCollaped(!isCollapsed)}>
                <MenuOutlinedIcon/>
              </IconButton>
            </Box> )}
            </MenuItem>
          {/* user */}
          {!isCollapsed &&(
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
            <img alt='profile-user' width="100px" height="100px" src={jesus} style={{coursor:"pointer", borderRadius:"50%"}}/>
            </Box>
           
            {/* Name and position */}
            <Box textAlign="center">
              <Typography variant='h2' color={colors.grey[100]} fontWeight="bold" sx={{m:"10px 0 0 0 "}}>Ed Roh</Typography>
              <Typography variant='h5' color={colors.greenAccent[500]} >VP Fancy Admin</Typography>
            </Box>
            </Box>
            )}
            {/* Menu items */}
            <Box paddingLeft={isCollapsed ? undefined:"10%"}>
             <Item title="DashBoard" to="/" icon={<HomeOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
             <Typography variant='h6' color={colors.grey[300]} sx={{m:"15px 0 5px 20px"}}>Data</Typography>
            <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
             <Item title="Contacts Infonrmation" to="/contacts" icon={<ContactsOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
             <Item title="Invoice Balances" to="/invoice" icon={<ReceiptOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
             <Typography variant='h6' color={colors.grey[300]} sx={{m:"15px 0 5px 20px"}}>Pages</Typography>
             <Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
             <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
             <Item title="FAQ Page" to="/faq" icon={<HelpOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
             <Typography variant='h6' color={colors.grey[300]} sx={{m:"15px 0 5px 20px"}}>Charts</Typography>
             <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
             <Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlined/>} selected={selected} setSelected={setSelected}/>
             <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
             <Item title="Geography Chart" to="/geography" icon={<MapOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            </Box>
           
        </Menu>
      </ProSidebar>
      
    </Box>
  )
}

export default Sidebar