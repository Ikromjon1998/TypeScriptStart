
const userIds = [1, 2, 1, 3];
const uniqueIds = new Set(userIds);// SET(arr)- make array with unique values
console.log(uniqueIds);
uniqueIds.add(10);
console.log("add 10", uniqueIds);
console.log('has 3', uniqueIds.has(3));
console.log('size', uniqueIds.size);//In regard to sets, size is used to check quantity not length
for(let item of uniqueIds){
    console.log('iterate', item);
}