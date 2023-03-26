import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from "@mui/material";
import { useState } from "react";
import { createTicket, updateTicket } from "../api/serverAPI";

export default function TicketPopup({ openTicketPopup, handleTicketPopupClose, selectedtTicket }) {
    const [title, setTitle] = useState(selectedtTicket?.title);
    const [description, setDescription] = useState(selectedtTicket?.description);

    const createNewTicket = () => {
        createTicket(title, description);
        setTitle("");
        setDescription("");
        handleTicketPopupClose();
    }
    const updatingTicket = () =>{
        updateTicket(title,description);
        handleTicketPopupClose();
    }

    return (
        <div>
            <Dialog open={openTicketPopup} onClose={handleTicketPopupClose}>
                <DialogTitle>{(selectedtTicket !== null) ? "Update Ticket" : "Create Ticket"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="title"
                        type="title"
                        value={title}
                        fullWidth
                        variant="standard"
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="description"
                        type="description"
                        value={description}
                        fullWidth
                        multiline
                        variant="standard"
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{
                        selectedtTicket!==null? updatingTicket() : createNewTicket();
                    }}>{(selectedtTicket !== null) ? "Update" : "Create"}</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}