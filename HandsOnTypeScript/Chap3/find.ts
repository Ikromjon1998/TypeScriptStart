
const items = [
    {name: 'jon', age: 20}, 
    {name: 'linda', age: 22}, 
    {name: 'jon', age: 40}
]
const jon = items.find((item) => {
    return item.name === 'jon'
}); // find first correct result and break the loop
console.log(jon);
