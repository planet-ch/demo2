const _products = JSON.parse(window.localStorage.products || [])
const allProducts = JSON.parse(window.localStorage.allProducts || [])
console.log(_products);
export default {
  getProducts (cb) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(_products)
      }, 1000)
    })
  },
  getAllProducts (cb) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(allProducts)
      }, 100)
    })
  },
  
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
