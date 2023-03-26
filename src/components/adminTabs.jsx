import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Tickets } from './tickets';
import { UsersData } from './users';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ ticketsData, usersDetails , statusFilter }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Tickets" {...a11yProps(0)} />
                    <Tab label="Customers" {...a11yProps(1)} />
                    <Tab label="Engineers" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {statusFilter === "all" ? ticketsData.map((t, index) => {
                    return (<Tickets
                        key={index}
                        ticket={t}
                    />)
                }) : ticketsData.filter((ticket) => ticket.status === statusFilter).map((t, index) => {
                    return (<Tickets
                        key={index}
                        ticket ={t}
                        />)
                })}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {usersDetails.filter((user)=>user.userType==="CUSTOMER").map((userData,index)=>{
                    return (<UsersData
                        key = {index}
                        userData = {userData}
                    />)
                })}
            </TabPanel>
            <TabPanel value={value} index={2}>
            {usersDetails.filter((user)=>user.userType==="ENGINEER").map((userData,index)=>{
                    return (<UsersData
                        key = {index}
                        userData = {userData}
                    />)
                })}
            </TabPanel>
        </Box>
    );
}