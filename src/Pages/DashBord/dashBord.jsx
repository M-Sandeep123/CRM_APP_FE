
import React, { useEffect, useState } from "react";
import { getAllTickets } from "../../api/serverAPI";
import CardDetails from "../../components/cardDetails";
// import reqData from "../MokeData/ticketData"
export default function DashBoard() {

    const [ticketsData,setTickets] = useState([]);

    useEffect(()=>{
        getAllTickets().then((data)=>{
            setTickets([...data]);
        })
    });

    return (
        <div>
            {/* <CardDetails title="openReqestCount" subTitle={this.state.openRequestCount} changeValue={this.changeValue}/>
               <CardDetails title="closeReqestCount" subTitle={this.state.closeRequestCount}/> */}
            {ticketsData.map((ticket, index) => {
                return <CardDetails key={index} title={ticket.title} description={ticket.description} status={ticket.status}></CardDetails>
            })}
        </div>
    )
}