import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogContentText, DialogActions } from "@mui/material";
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
import { Fragment, useState } from "react";
import { loginAPI, registerAPI } from "../api/serverAPI";

export default function LoginPopup({ openLogin, handleLoginClose }) {

    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [isLogin, setIsLogin] = useState(true);
    const [isRegister, setIsRegister] = useState(false);
    const [userType, setUserType] = useState("CUSTOMER");

    const registerUser =() =>{
        alert("call the Register API");
        registerAPI(userId,password,name,email,userType);
    }

    /**
     * When user will login to the account 
     * the login API will only respond as the user details in the backend as I designed
     * But for very easy interaction the I modify the back end like 
     * The server will respond user details along with the user address what they create
     * 
     *      ----const allAddresses = await Addresses.find({user : user._id});--- [In the SignIn controler of backend router (POST-sign)]
     */
    const loginUser = ()=>{
        alert("calling the signin API");
        loginAPI(userId,password)
        .then((data)=>{
            console.log(data);
            if(!data?.message){
                sessionStorage.setItem("userLoginData",JSON.stringify(data));
                handleLoginClose();
            }
        });
      
    }

    return (
        <div>
            <Dialog open={openLogin}>
                <DialogTitle>{(isRegister ? "SignUp" : "Login")}
                   {/* {!isLogin && <Button
                        style={{ float: "right" }}
                        onClick={() => {
                            setIsRegister(false)
                            setIsLogin(true);
                            handleLoginClose();
                        }}
                    >
                        <CloseIcon />
                    </Button>} */}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        provide your details
                    </DialogContentText>
                    {isLogin && <Fragment>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="userId"
                            label="userId"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(event) => setUserId(event.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            label="password"
                            type="password"
                            fullWidth
                            variant="standard"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Fragment>
                    }
                    {isRegister && <Fragment>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="userId"
                            label="UserID"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={(event) => setUserId(event.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="outlined"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            label="password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <FormControl>
                            <FormLabel id="user-type-radio">User Type</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="user-type-radio-label"
                                name="userType"
                                value={userType}
                                onChange={(event) => {
                                    setUserType(event.target.value);
                                }}
                            >
                                <FormControlLabel value="CUSTOMER" control={<Radio />} label="Customer" />
                                <FormControlLabel value="ENGINEER" control={<Radio />} label="Engineer" />
                            </RadioGroup>
                        </FormControl>
                        <br />
                        <Button
                            sx={{ float: "right" }}
                            onClick={
                                () => {
                                    setIsLogin(true);
                                    setIsRegister(false);
                                    registerUser();
                                }
                            }>Register</Button>
                    </Fragment>
                    }
                </DialogContent>
                <DialogActions>
                    {isLogin && <Button onClick={loginUser}>Login</Button>}
                    {isRegister !== true && <Button onClick={() => { setIsRegister(true); setIsLogin(false) }}>Register</Button>}
                </DialogActions>
            </Dialog>
        </div>
    )
}