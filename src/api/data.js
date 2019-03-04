const _products = JSON.parse(window.localStorage.products || [])
const allProducts = JSON.parse(window.localStorage.allProducts || [])
console.log(_products);
export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },
  getAllProducts (cb) {
    setTimeout(() => cb(allProducts), 100)
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
