const testData = require('../data/test')
const homePage = require('../data/home_page')
const mePage = require('../data/me_page')
const shopPage = require('../data/shop_page')
const goodsList = require('../data/goods_list')


function responseData(data) {
    return {
        code: 0,
        msg: '请求成功',
        data,
    }
}

console.log(testData())
module.exports = () => {
    return {
        test: testData(),
        home_page: responseData(homePage()),
        me_page: responseData(mePage()),
        shopPage: responseData(shopPage()),
        goodsList: responseData(goodsList())
    }
}