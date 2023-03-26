import { Build, Menu } from "@mui/icons-material"
import { Card } from "@mui/material"
import {CardHeader,Avatar,IconButton} from "@mui/material"
import { useState } from "react";
import TicketPopup from "./ticketPopup";

export const Tickets = ({ticket}) => {
    const {title, description, status, assignee, reporter} = ticket;
    
    const [openTicketPopup, setOpenTicketPopup] = useState(false);
    // const [selectedTicket, setSelectedTicket] = useState(null);
   
    const handleTicketPopupOpen = (event) => {
        // setSelectedTicket(ticket);
        setOpenTicketPopup(true);
    }
    const handleTicketPopupClose = (event) => {
        setOpenTicketPopup(false);
    }

    return (
        <span className="ticketCard" >
        <TicketPopup openTicketPopup={openTicketPopup} handleTicketPopupClose={handleTicketPopupClose} selectedtTicket={ticket} />
        <Card variant="outlined" sx={{margin : 1}} >
            <CardHeader
                avatar={
                    <Avatar >
                        <Build/>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" onClick={handleTicketPopupOpen}>
                        <Menu />
                    </IconButton>
                }
                title = {<h2>{title}</h2>}
                subheader = {<div>{<h3>{description}</h3>}
                <span>Assignee : {assignee},</span>
                <span>  Status : {status},</span>
                <span>   Reporter : {reporter}</span>
                </div>}   
            />
        </Card>
        </span>
    )
}