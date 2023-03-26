
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Tickets } from "../../components/tickets";
// import { tickets } from "../MokeData/ticketsDetails";
import { FormControl, InputLabel, Select, MenuItem, Button, Divider } from "@mui/material";
import { Fragment, useState } from "react";
import { Box } from "@mui/system";
import TicketPopup from "../../components/ticketPopup";
import { useEffect } from "react";
import { getAllTickets, getAllUsers } from "../../api/serverAPI";
import BasicTabs from "../../components/adminTabs";

export default function Home({userLoginDetails}) {
    const [statusFilter, setStatusFilter] = useState("all");
    const [openTicketPopup, setOpenTicketPopup] = useState(false);
    const [ticketsData,setTicketsData] = useState([]);
    const [usersDetails,setUsersDetails] = useState([]);

    const handleStatusFilterChange = (event) => {
        setStatusFilter(event.target.value);
    }

    const handleTicketPopupOpen = (event) => {
        setOpenTicketPopup(true);
    }
    const handleTicketPopupClose = (event) => {
        setOpenTicketPopup(false);
    }

    useEffect(()=>{
        getAllTickets().then((data)=>{
            setTicketsData([...data]);
        });
    },[])

    useEffect(()=>{
        getAllUsers().then((data)=>{
            setUsersDetails([...data]);
        });
    },[]);
   

    return (
        <div>
           <TicketPopup openTicketPopup={openTicketPopup} handleTicketPopupClose={handleTicketPopupClose} selectedtTicket={null} />
            <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ margin: 1 }}>
                    <InputLabel id="ticket-status-select-label" variant="outlined">Status</InputLabel>
                    <Select
                        labelId="ticket-status-select-label"
                        id="ticket-status-select-label"
                        value={statusFilter}
                        label="Age"
                        onChange={handleStatusFilterChange}
                    >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="OPEN">Open</MenuItem>
                        <MenuItem value="CLOSE">Close</MenuItem>
                    </Select>
                    <Button variant="contained" onClick={handleTicketPopupOpen}>New Ticket</Button>
                </FormControl>
            </Box>
           {userLoginDetails?.userType!=="ADMIN" && statusFilter === "all" ? ticketsData.map((t, index) => {
                return (<Tickets
                    key={index}
                    ticket = {t}
                     />)
            }) : userLoginDetails?.userType!=="ADMIN" && ticketsData.filter((ticket) => ticket.status === statusFilter).map((t, index) => {
                return (<Tickets
                    key={index}
                    ticket ={t}
                    />)
            })}
            {userLoginDetails?.userType==="ADMIN" && <Fragment><Divider/>
                <BasicTabs
                statusFilter = {statusFilter}
                ticketsData = {ticketsData}
                usersDetails = {usersDetails}  
            />
            </Fragment>
            }
        </div>
    )
}
