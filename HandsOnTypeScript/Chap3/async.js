
async function delayResult(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('I completed successfully')
        }, 5000)
    })
}
(async function execAsyncFunc(){
    const result = await delayResult();
    console.log(result);
})();