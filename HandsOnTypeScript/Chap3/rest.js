
function doSomething (a, ...others) {
    console.log(a, others, others[others.length - 3]);
}

doSomething(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);