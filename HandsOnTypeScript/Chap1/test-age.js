function canDrive(usr) {
    console.log("user is", usr.name);
    if (usr.age > 16) {
        console.log("Allow to drive!");
    }
    else {
        console.log("Don't allow to drive!");
    }
}
var tom = {
    name: "tom",
    age: 25
};
canDrive(tom);
/* this first version without hints
function canDrive(usr){
    console.log("user is", usr.name);

    if(usr.age > 16){
        console.log("Allow to drive!");
    }else {
        console.log("Don't allow to drive!")
    }
}

const tom = {
    name: "tom"
}

canDrive(tom);
*/ 
