import axios from "axios";

// const BASE_URL = 'http://123.207.32.32:9001'
const BASE_URL = 'https://netease-cloud-music-api-seven-zeta.vercel.app/'

export function request(config){
  const instance = axios.create({
    baseURL:BASE_URL,
    timeout:5000,
    withCredentials:true
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

  // instance.defaults.adapter = function(config){
  //   return new Promise((resolve, reject) => {
  //     console.log(config)
  //     const settle = require('axios/lib/core/settle');
  //     const buildURL = require('axios/lib/helpers/buildURL');
  //     uni.request({
  //       method: config.method.toUpperCase(),
  //       url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
  //       header: config.headers,
  //       data: config.data,
  //       dataType: config.dataType,
  //       responseType: config.responseType,
  //       sslVerify: config.sslVerify,
  //       complete: function complete(response) {
  //         response = {
  //           data: response.data,
  //           status: response.statusCode,
  //           errMsg: response.errMsg,
  //           header: response.header,
  //           config: config
  //         };
  //
  //         settle(resolve, reject, response);
  //       }
  //     })
  //   })
  // }

  return instance(config)
}

