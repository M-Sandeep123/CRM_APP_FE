import { Build, Menu } from "@mui/icons-material"
import { Box, Card } from "@mui/material"
import { CardHeader, Avatar, IconButton } from "@mui/material"
import { useState } from "react";
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { updateUserProfile } from "../api/serverAPI";

export const UsersData = ({ userData }) => {
    const { name, email, userId, userType, userStatus } = userData;
    const [updateUserStatus, setupdateUserStatus] = useState(userStatus);

    const handleChangeUpdates = (e) => {
        setupdateUserStatus(e.target.value);
    }

    updateUserProfile(undefined,updateUserStatus,undefined,userId);


    return (
        <Box>
            <Card variant="outlined" sx={{ margin: 1 }}>
                <CardHeader
                    avatar={
                        <Avatar >
                            <Build />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" >
                            <Menu />
                        </IconButton>
                    }
                    title={<div><h3>Name : {name}</h3><h5>UserId : {userId}</h5></div>}
                    subheader={<div>{<h5>Email : {email}</h5>}
                        <div >UserType : {userType}</div><br></br>
                        {userType !== "ENGINEER" ?
                        <span> UserStatus : {userStatus}</span>
                    :
                    <FormControl>
                        <FormLabel id="user-type-radio">User Status</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="user-type-radio-label"
                            name="userType"
                            value={updateUserStatus}
                            onChange={(event) => {
                                handleChangeUpdates(event);
                            }}
                        >
                            <FormControlLabel value="PENDING" control={<Radio />} label="pending" />
                            <FormControlLabel value="APPROVED" control={<Radio />} label="Approved" />
                        </RadioGroup>
                    </FormControl>
                    }
                    </div>}
                />
                
            </Card>
        </Box>
    )
}