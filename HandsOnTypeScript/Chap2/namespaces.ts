namespace A { 
    class FirstClass {} 
} namespace B { 
    class SecondClass {} 
    const test = new FirstClass(); // FirstClass in namespace so test cannot find things from other namepsaces
    
}
