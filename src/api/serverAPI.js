const defaultUrl = "http://localhost:8080/crm";

export async function loginAPI(userId, password){
    const loginDetails = {userId : userId, password : password};
    const data = fetch(`${defaultUrl}/api/v1/auth/signin`,{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(loginDetails)
    }).then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        sessionStorage.setItem("userLoginData",JSON.stringify(data));
        return data;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    });
    return data;
}

export function registerAPI(userId, password,name,email,userType){
    const loginDetails = {
        userId : userId, 
        password : password,
        name: name,
        email : email,
        userType : userType
    };

    fetch(`${defaultUrl}/api/v1/auth/signup`,{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(loginDetails)
    }).then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

export function createTicket(title, description){
    const userLoginData = JSON.parse(sessionStorage.getItem("userLoginData"));
    console.log(userLoginData?.accessToken);
    const ticketDetails = {title : title, description : description};
    fetch(`${defaultUrl}/api/v1/tickets`,{
        method : "POST",
        headers:{
            "Content-Type" : "application/json",
            "x-access-token" : userLoginData?.accessToken,
        },
        body:JSON.stringify(ticketDetails)
    }).then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

export function updateTicket(title, description){
    const userLoginData = JSON.parse(sessionStorage.getItem("userLoginData"));
    const ticketDetails = {title : title, description : description};
    fetch(`${defaultUrl}/api/v1/tickets`,{
        method : "PUT",
        headers:{
            "Content-Type" : "application/json",
            "x-access-token" : userLoginData?.accessToken,
        },
        body:JSON.stringify(ticketDetails)
    }).then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

export function getAllTickets(){
    const userLoginData = JSON.parse(sessionStorage.getItem("userLoginData"));
    const data = fetch(`${defaultUrl}/api/v1/tickets`,{
        method : "GET",
        headers:{
            "Content-Type" : "application/json",
            "x-access-token" : userLoginData?.accessToken,
        },
    }).then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        return data;
    })
    .catch((error)=>{
        console.log(error);
        return error
    });
    return data;
}

export function getAllUsers(){
    const userLoginData = JSON.parse(sessionStorage.getItem("userLoginData"));
    const data = fetch(`${defaultUrl}/api/v1/users`,{
        method : "GET",
        headers:{
            "Content-Type" : "application/json",
            "x-access-token" : userLoginData?.accessToken,
        },
    }).then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        return data;
    })
    .catch((error)=>{
        console.log(error);
        return error
    });
    return data;
}

export function updateUserProfile(userName,userStatus,userType,userId){
    const userLoginData = JSON.parse(sessionStorage.getItem("userLoginData"));
    const updateUser = {userName : userName, userStatus : userStatus,userType:userType};
    const data = fetch(`${defaultUrl}/api/v1/users/${userId}`,{
        method : "PUT",
        headers:{
            "Content-Type" : "application/json",
            "x-access-token" : userLoginData?.accessToken,
        },
        body:JSON.stringify(updateUser)
    }).then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        return data;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    });
    return data;
}