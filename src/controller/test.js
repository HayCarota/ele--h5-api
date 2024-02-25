const test = require('../../data/test')

module.exports = (request, resolve, next) => {
    const testData = test()
    testData.desc = '我是自定义测试数据'
    resolve.success(testData)
}