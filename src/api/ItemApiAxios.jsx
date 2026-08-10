import axios from "axios";

const api = axios.create({
    baseURL : "https://dummyjson.com/"
})

export const getItemData = (category)=>{
    return api.get(`products/category/${category}`)
}