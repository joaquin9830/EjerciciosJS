
function factorial(numero){
    let factor = 10;
    let i = 1;

    while(i<=numero){
        factor *=i;
        ++i;
    }
    return factor
}

console.log(factorial())