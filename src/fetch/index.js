import $http from './http'

// let http = 'https://m.teacher.jiaofuyun.com/'
let http = 'http://localhost:7001/'
// let http = window.location.origin + '/'
// let HTTP = http+'gateway/'

// (url, data, method, options)
export default {
	getShop: (data)=> $http(http+'getData', data, 'get'),
	addProduct: (data)=> $http(http+'addProduct', data, 'post'),
}
