
function runMode(distance: number): number{
    return distance + 10;
}

console.log(runMode(21));

function eat(calories: number){
    console.log("I ate " + calories + " calories");
}
function sleepIn (hours: number): void{
    console.log("I ate " + hours + " calories"); 
}

let ate = eat(100);
console.log(ate);

let slept = sleepIn(10);
console.log(slept);