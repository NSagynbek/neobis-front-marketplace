import instance from "./axiosConfig"
// import axios from "axios";

// const instance = axios.create({
//     baseURL: 'https://mobi-market-production.up.railway.app/',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });




export const login = async (data)=>{
    const res = await instance.post("api/v1/auth/login",data)
    return res.data
}

export const signup = async (data)=>{
    const res = await instance.post("api/v1/auth/registration",data)
    return res.data
}





export const codeConfirmation = async (data)=>{
    const res = await instance.post("api/v1/users/registerConfirm",data)
    return res.data
}



 export const addPhoneNumber = async (data)=>{
     const res = await instance.post("api/v1/users/send-sms",data)
     return res.data
 }

 export const tokenRefresh = async (data)=>{
    const res = await instance.get("api/v1/users/refreshToken",data)
    return res.data
 }

export const getProfileDetails = async ()=>{
    const res = await instance.get("api/v1/users/getUserById/1"
    // {
    //     headers:{
    //         Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaG9lIiwiaWF0IjoxNzAzMjM3OTAyLCJleHAiOjE3MDMyMzg4MDJ9.ELvfpFFQRZO4esglWk7O-w2FMLzh1DiT8DOOAWQw4cM"
    //     }
    // }
    )
    return res.data
}

export const updateProfileDetails = async (data)=>{
    const res = await instance.put("api/v1/users/updateUserProfile",data
    // {
    //     headers:{
    //         Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaG9lIiwiaWF0IjoxNzAzMjM3MjE4LCJleHAiOjE3MDMyMzgxMTh9.Vl0BPg6qpZZJmFRiDC4gXh_eJVrBR2poh7eoCarjXbA"
    //     }
    // }
     
    )
    
    return res.data
}

export const getLikedItems = async ()=>{
    const res = await instance.get("api/v1/users/getAllMyLikedProducts"
    // {
    //     headers:{
    //         Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaG9lIiwiaWF0IjoxNzAzMjM3OTAyLCJleHAiOjE3MDMyMzg4MDJ9.ELvfpFFQRZO4esglWk7O-w2FMLzh1DiT8DOOAWQw4cM"
    //     }
    // }
    )
    return res.data
}

export const getMyItems = async ()=>{
    const res = await instance.get("api/v1/users/myProducts"
    // {
    //     headers:{
    //         Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaG9lIiwiaWF0IjoxNzAzMjM3OTAyLCJleHAiOjE3MDMyMzg4MDJ9.ELvfpFFQRZO4esglWk7O-w2FMLzh1DiT8DOOAWQw4cM"
    //     }
    // }
    )
    return res.data
}







