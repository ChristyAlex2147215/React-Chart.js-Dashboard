import React from 'react'
import { useState } from 'react'
import {Box,IconButton,Typography,colors,useTheme} from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlined from '@mui/icons-material/LockOpenOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import {mockDataContacts} from "../../data/mockData";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';




const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns=[
        {field:"id",headerName:"ID",flex:.5},
        {field:"registrarId",headerName:"Registrar ID"},
        {field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},
        {field:"age",headerName:"Age",type:"number",headerAlign:"left",align:"left"},
        {field:"email",headerName:"Email",flex:1},
        {field:"phone",headerName:"Phone",flex:1},
        {field:"address",headerName:"Address",flex:1},
        {field:"city",headerName:"City",flex:1},
        {field:"zipCode",headerName:"Zip Code",flex:1},
        // {field:"access",
        // headerName:"Access Level",
        // flex:1,
        // renderCell:({ row: {access} })=>{
        //     return (
        //     <Box 
        //     width="60%" 
        //     m="0 auto" 
        //     p="5px" 
        //     display="flex" 
        //     justifyContent="center" 
        //     backgroundColor={ access=== "admin" ? colors.greenAccent[600]:colors.greenAccent[700]} borderRadius={"4px"}>
        //         {access==="admin" && <AdminPanelSettingsOutlinedIcon/>}
        //         {access==="manager" && <SecurityOutlinedIcon/>}
        //         {access==="user" && <LockOpenOutlined/>}
        //     <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
        //         {access}</Typography>    
        //     </Box>)
        // }},
    ]

  return (
    <Box>
        <Header title={"CONTACTS"} subtitle={"List of contact for future reference"}/>
        <Box m="40px 0 0 0" height={"75vh"} sx={{
            "& .MuiDataGrid-root":{border:"none"},
            "& .MuiDataGrid-cell":{borderBottom:"none"},
            "& .name-column--cell":{color:colors.greenAccent[300]},
            "& .MuiDataGrid-columnHeaders":{backgroundColor:colors.blueAccent[700]},
            "& .MuiDataGrid-virtualScroller":{backgroundColor:colors.primary[400]},
            "& .MuiDataGrid-footerContainer":{borderTop:"none",backgroundColor:colors.blueAccent[700]},
            "& .MuiDataGrid-toolbarContainer .MuiButton-text":{color:`${colors.grey[100]} !important`}

        }}>
            <DataGrid rows={mockDataContacts} columns={columns} components={{Toolbar:GridToolbar}}/>
        </Box>
    </Box>
  )
}

export default Contacts