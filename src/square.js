//This function finds the square of a number
function square(x){
    return x*x;
}
console.log(square(4));

//Lets find the cube
function cube(a){
    return a*a*a;
}
console.log(cube(5));

//factorial
function factorial(a){
    let i = 1;
    while (a>1) {
        i = i*a;
        a--;
    }
    return i;
}
console.log(factorial(5));