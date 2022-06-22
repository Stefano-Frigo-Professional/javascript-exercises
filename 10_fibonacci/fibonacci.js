const fibonacci = function(n) {
    if(n<1){
        return "OOPS";
    }

    let fib = [0,1];
    for(let i = 1; i < n; i++){
        fib.push(fib[i-1] + fib[i]);
    }

    return fib[fib.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
