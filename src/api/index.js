import axios from 'axios'
import {cookie} from '@/utils'
import config from './config'
axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response) {
  if (response.status === 200 || response.status === 304) {
    return response
  }
  return {
    data: {
      code: -404,
      message: response.statusText,
      data: ''
    }
  }
}

export default {
  post(url, data) {
    return axios({
      method: 'post',
      url: config.api + url,
      data,
      timeout: config.timeout,
      headers: {
        'Content-Type': 'application/json',
        'token': cookie('TOKEN') || ''
      }
    }).then(checkStatus)
  },
  get(url, params) {
    return axios({
      method: 'get',
      url: config.api + url,
      params,
      timeout: config.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'token': cookie('TOKEN') || ''
      }
    }).then(checkStatus)
  }
}
