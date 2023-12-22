import axios from "axios"


const instance = axios.create({
    baseURL: "https://mobi-market-production.up.railway.app/",
    headers:{
        "Content-Type":"application/json",
           
    }

}); 




export const login = async (data)=>{
    const res = await instance.post("api/v1/auth/login",data)
    return res.data
}

export const signup = async (data)=>{
    const res = await instance.post("api/v1/auth/registration",data)
    return res.data
}

// export const authinticatedUser = async ()=>{
//     const response = await instance.post("user")
//     return response.data
// }



// export const ensureRegistration = async (token)=>{
//     const res = await instance.put("ensure-registration",null,{
//         params:{
//             token:token
//         }
//     })
//     return res.data
// }

// export const sendMessage = async (data)=>{
//     const urlParam = 'https://http://localhost:5173/main';

//     const res = await instance.put("send-message",data,{
//         params:{
//             link:urlParam
//         }
//     })
//     return res.data
// }

export const codeConfirmation = async (data)=>{
    const res = await instance.post("api/v1/users/registerConfirm",
    data,{
       headers: {
           Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaG9lIiwiaWF0IjoxNzAzMTc5Mjc0LCJleHAiOjE3MDMxODAxNzR9.AwRuogscGyz4XN7ZsQYGVM2KZ2bJJQPNMaqQEoVP9co",
         },
    })
    return res.data
}



 export const addPhoneNumber = async (data)=>{
     const res = await instance.post("api/v1/users/send-sms",
     data,{
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaG9lIiwiaWF0IjoxNzAzMTc5Mjc0LCJleHAiOjE3MDMxODAxNzR9.AwRuogscGyz4XN7ZsQYGVM2KZ2bJJQPNMaqQEoVP9co",
          },
     })
     return res.data
 }

export const getProfileDetails = async ()=>{
    const res = await instance.get("api/v1/users/getUserById/1",{
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaG9lIiwiaWF0IjoxNzAzMTc5Mjc0LCJleHAiOjE3MDMxODAxNzR9.AwRuogscGyz4XN7ZsQYGVM2KZ2bJJQPNMaqQEoVP9co",
          },
    })
    return res.data
}

export const updateProfileDetails = async (data)=>{
    const res = await instance.put("api/v1/users/updateUserProfile",
    data,{
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaG9lIiwiaWF0IjoxNzAzMTc5Mjc0LCJleHAiOjE3MDMxODAxNzR9.AwRuogscGyz4XN7ZsQYGVM2KZ2bJJQPNMaqQEoVP9co",
          },
    })
    
    return res.data
}



