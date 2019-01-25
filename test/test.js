const expect = require('chai').expect
const delay = require('../dist/delay').default
async function main() {
    expect('测试开始').to.equal('测试开始')
    await delay(200)
    expect('测试结束').to.equal('测试结束')
}

describe('ts-hi function test', () => {
    it('延迟200毫秒后才会打印出200', () => {
        // expect(result).to.equal(undefined);//main返回的为一个promise对象
        // done()
        main()
    });
});