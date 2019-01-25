import delay from './delay'
async function main() {
    console.log('开始执行')
    await delay(200)
    console.log('执行结束')
}
main()