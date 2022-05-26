const x = 123;
function foo() {
    console.log(x)
}

function bar(){
    const x = 321;
    foo();
}

foo()
bar()
