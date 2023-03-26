import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { updateUserProfile } from "../../api/serverAPI";
import "./profile.css";

const Profile = ({userLoginDetails}) => {
    const { name, email, userId, userType, userStatus } = userLoginDetails;
    const [userName,setUserName] = useState(name);
    const [userEmail,setUserEmail] = useState(email);
    // const [formValues, setFormValues] = useState({
    //     userId: {
    //         value: userLoginDetails.userId,
    //     },
    //     name: {
    //         value: userLoginDetails.name,
    //         error: false,
    //         errorMessage: "plz enter your name"
    //     },
    //     email: {
    //         value: userLoginDetails.email,
    //         error: false,
    //         errorMessage: "plz enter your name"
    //     }

    // })
    
    const updateProfile = () => {
        alert("need to integrate backend");
        updateUserProfile(userName,userStatus,userType,userId);
    }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({
    //         ...formValues, [name]: { ...formValues[name], value: value }
    //     })
    // }


    return (
        <div>
            <form id="form">
                <Typography> Hi {userLoginDetails?.name}</Typography>
                <TextField
                    style={{marginTop : "10px" }}
                    className="textfield"
                    placeholder="userID"
                    value={userId}
                    label="userID"
                    type="text"
                    disabled
                    fullWidth
                ></TextField>
                <TextField
                    className="textfield"
                    style={{marginTop : "10px" }}
                    placeholder="Enter your name"
                    value={userName}
                    label="Name"
                    name="name"
                    type="text"
                    fullWidth
                    onChange={(event=>{
                        setUserName(event.target.value);
                    })}
                ></TextField>
                <TextField
                    className="textfield"
                    style={{marginTop : "10px" }}
                    placeholder="Enter your email"
                    value={userEmail}
                    label="emailID"
                    type="email"
                    name="email"
                    fullWidth
                    onChange={(event=>{
                        setUserEmail(event.target.value);
                    })}
                ></TextField>
                <Button onClick={updateProfile} variant="outlined"  style={{marginTop : "10px"}}>update</Button>
            </form>
        </div>
    )
}

export default Profile;