const BASE_URL = 'https://netease-cloud-music-api-seven-zeta.vercel.app'

class Request {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: BASE_URL + url,
        method: method,
        data: params,
				withCredentials:true,
        // header:{
        //   "Cookie":"NMTID=00OseHlzT3VXPXkyU_OtPJb17lf6-wAAAGBI6_dqQ"//临时cookie
        // },
        success: res => {
          resolve(res.data)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  }

  get(url, params) {
    return this.request(url, 'GET', params)
  }

  post(url, data) {
    return this.request(url, 'POST', data)
  }
}

const MusicRequest = new Request()

export default MusicRequest
