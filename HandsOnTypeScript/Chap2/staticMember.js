class ClassA {
    constructor() { }
    static getFullName() {
        return "ClassA" + ClassA.typeName;
    }
}
const a = new ClassA();
console.log(a.typeName);
