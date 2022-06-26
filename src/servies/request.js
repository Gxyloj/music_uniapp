import axios from "axios";

// const BASE_URL = 'http://123.207.32.32:9001'
const BASE_URL = 'https://netease-cloud-music-api-seven-zeta.vercel.app/'

export function request(config){
  const instance = axios.create({
    baseURL:BASE_URL,
    timeout:5000,
    // header:{
    //   "Cookie":"NMTID=00OseHlzT3VXPXkyU_OtPJb17lf6-wAAAGBI6_dqQ"//临时cookie
    // },
  })

  instance.interceptors.request.use(config => {
    return config
  },error => {

  })

  instance.interceptors.response.use(res => {
    return res.data
  },error => {
    console.log(error)
  })

  return instance(config)
}

