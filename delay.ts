async function delay(time:number) {
    console.log(time)
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            try {
                resolve()
            }catch (error) {
                reject()
            }
        }, time);
    })
}
export default delay