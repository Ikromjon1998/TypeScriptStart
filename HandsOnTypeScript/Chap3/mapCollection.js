const mappedEmp = new Map();
mappedEmp.set('linda', {fullName: "Linda Johnson", id: 1});
mappedEmp.set('jim', {fullName: "Jim Thomson", id: 2});
mappedEmp.set('pam', {fullName: "Pam Dryer", id: 4});
console.log(mappedEmp);
console.log(mappedEmp.get('jim'));
console.log(mappedEmp.size);

for(let [key, value] of mappedEmp){
    console.log('itearative', key, value);
}