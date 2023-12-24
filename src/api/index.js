import instance from "./axiosConfig"

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


export const getProfileDetails = async ()=>{
    const res = await instance.get("api/v1/users/getUserById/1"
   
    )
    return res.data
}

export const updateProfileDetails = async (data)=>{
    const res = await instance.put("api/v1/users/updateUserProfile",data)
    
    return res.data
}

export const getLikedItems = async ()=>{
    const res = await instance.get("api/v1/users/getAllMyLikedProducts")
    return res.data
}

export const getMyItems = async ()=>{
    const res = await instance.get("api/v1/users/myProducts")
    return res.data
}






