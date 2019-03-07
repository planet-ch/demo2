import $http from './http'

// let http = 'https://m.teacher.jiaofuyun.com/'
let http = 'http://192.168.17.222:7001/'
// let http = window.location.origin + '/'
// let HTTP = http+'gateway/'

// (url, data, method, options)
export default {
	getShop: (data)=> $http(http+'getData', data, 'get')
}
