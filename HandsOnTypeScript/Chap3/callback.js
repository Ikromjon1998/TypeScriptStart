
function letMeKnowWhenComplete(size, callback){
    let reducer = 0;
    for(let i = 1; i < size; i++){
        reducer = Math.sin(reducer*i);
    }
    console.log(reducer);
    callback();
}

letMeKnowWhenComplete(10, function () { console.log('Great it completed.'); });