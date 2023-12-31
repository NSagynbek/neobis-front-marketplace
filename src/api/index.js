import instance from "./axiosConfig"
import muliPartinstance from "./axiosConfigMuliPart"

export const login = async (data)=>{
    const res = await instance.post("api/v1/auth/login",data)
    return res.data
}

export const signup = async (data)=>{
    const res = await instance.post("api/v1/auth/registration",data)
    return res.data
}

export const codeConfirmation = async (code,formData)=>{
    const res = await instance.post(`api/v1/users/registerConfirm?code=${code}`,formData)
    return res.data
}


 export const addPhoneNumber = async (data)=>{
     const res = await instance.post("api/v1/users/send-sms",data)
     return res.data
 }


export const getProfileDetails = async (username)=>{
    const res = await instance.get(`api/v1/users/getUserByUsername?username=${username}`)
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

export const deleteMyProduct = async (id)=>{
    const res = await instance.delete(`api/v1/products/deleteProduct/${id}`)
    return res.data
}

export const addProduct = async (product)=>{
    const res = await instance.post("api/v1/products/addProduct",product)
    return res.data
}

export const addProductImages = async (id,images)=>{
    const res = await muliPartinstance.post(`api/v1/products/updateProductImages/${id}`,images)
    return res.data
}

export const getProducts = async ()=>{
    const res = await instance.get("api/v1/products/allProducts")
    return res.data
}

export const like = async (id) => {
    const res = await instance.put(`api/v1/users/like?id=${id}`);
    return res.data;
}

export const updateProfileImage = async (formData) => {
    const res = await muliPartinstance.post("api/v1/users/updatePhoto",formData);
    return res.data;
}

export const getProductById = async (id) => {
    const res = await instance.get(`api/v1/products/getProduct/${id}`);
    return res.data;
}

export const updateProductDetails = async (id,formData) => {
    const res = await instance.put(`api/v1/products/updateProduct/${id}`,formData);
    return res.data;
}











