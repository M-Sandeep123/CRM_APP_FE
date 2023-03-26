import { Component } from "react";
import {  Card, CardContent, CardMedia, Typography } from "@mui/material";
import gradiant from "../gradiant-color.jpg";

export default class CardDetails extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <Card sx={{ minWidth: 275 }} variant="outlined" >
                    <CardMedia
                        alt="ImageText"
                        component="img"
                        title="Gradiant"
                        height="20px"
                        image={gradiant}
                    />
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {this.props.title}
                        </Typography>
                        <Typography variant="h5">
                            {this.props.description}
                        </Typography>
                        <Typography variant="h5">
                            {this.props.status}
                        </Typography>
                        {/* <Button onClick={this.props.changeValue}>Change</Button> */}
                    </CardContent>
                </Card>
        )
    }
}