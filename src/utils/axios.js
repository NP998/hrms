import axios from "axios";

//this access-token from frontend side
const accessToken=localStorage.getItem("access-token")
//this url is the origin point of backend
axios.defaults.baseURL = "http://localhost:3000/v1"
//here accessToken from backend side
axios.defaults.headers.authorization=`Bearer ${accessToken?accessToken:""}`

export default axios;