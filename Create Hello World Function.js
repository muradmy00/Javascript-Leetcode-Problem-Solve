function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

const f = createHelloWorld();
console.log(f());
console.log(f(1, 2, 3));
