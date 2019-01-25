const delay = require('../dist/delay')

async function main() {
    console.log('开始执行')
    await delay(200)
    console.log('测试结束')
}

describe('ts-hi function test', () => {
    it('延迟200毫秒后才会打印出200', () => {
        // expect(result).to.equal(undefined);//main返回的为一个promise对象
        // done()
        main()
    });
});