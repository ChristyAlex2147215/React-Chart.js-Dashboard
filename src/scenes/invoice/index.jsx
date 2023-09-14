import React from 'react'
import { useState } from 'react'
import {Box,IconButton,Typography,colors,useTheme} from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlined from '@mui/icons-material/LockOpenOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import {mockDataInvoices} from "../../data/mockData";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';




const Invoice = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns=[
        {field:"id",headerName:"ID"},
        {field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},
        {field:"phone",headerName:"Phone",flex:1},
        {field:"email",headerName:"Email",flex:1},
        {field:"cost",headerName:"Cost",flex:1,renderCell:(params)=>(<Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>)},
        {field:"date",headerName:"Date",flex:1},
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
        <Header title={"INVOICE"} subtitle={"Invoice for the admin"}/>
        <Box m="40px 0 0 0" height={"75vh"} sx={{
            "& .MuiDataGrid-root":{border:"none"},
            "& .MuiDataGrid-cell":{borderBottom:"none"},
            "& .name-column--cell":{color:colors.greenAccent[300]},
            "& .MuiDataGrid-columnHeaders":{backgroundColor:colors.blueAccent[700]},
            "& .MuiDataGrid-virtualScroller":{backgroundColor:colors.primary[400]},
            "& .MuiDataGrid-footerContainer":{borderTop:"none",backgroundColor:colors.blueAccent[700]},
            "& .MuiCheckbox-root":{color:`${colors.greenAccent[200]} !important`},
            "& .MuiDataGrid-toolbarContainer .MuiButton-text":{color:`${colors.grey[100]} !important`}

        }}>
            <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} components={{Toolbar:GridToolbar}}/>
        </Box>
    </Box>
  )
}

export default Invoice