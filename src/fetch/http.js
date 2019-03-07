import { stringParam } from './../filter'
let Vue = require('vue');
import Axios from 'axios'
export default function (url, data, method, flag) {
    // Vue.http.options.emulateJSON = true;
    let query = {}
  return Axios[method](url+'?'+stringParam(query), method=='get'?{params: data}: data).then(
    res => {
      let data = res.data;
      return data;
    }).catch(
    err => err
  )
}
