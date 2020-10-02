function factorial(n) {
    if (n === 0){
        return 1;
    }
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function processArray(arr, factorial) {
    let factorialArr = [];
    for (let i = 0; i < arr.length; i++){
        factorialArr.push(factorial(arr[i]));
    }
    return(factorialArr);
}