
namespace NameSaaceA {
    class A {
        aname: string = 'A'
    }
    class B {
        aname: string = 'B'
    }

    const a = new A();
    const b = new B();
    const c = {...a, ...b};// Making a new object without connection to a and b
    const d = Object.assign(a, b);// Assigning to a reference
    console.log(c);
    console.log(d);
    a.aname = 'a1';
    console.log(c);
    console.log(d);
    
    

}