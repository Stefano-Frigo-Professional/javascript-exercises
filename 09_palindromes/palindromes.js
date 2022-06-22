const palindromes = function (a) {
    let rev = "";
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

    let arrA = Array.from(a.toLowerCase());
    arrA = arrA.filter((c) => {
        return alphabet.includes(c);
    });

    for(let i = arrA.length-1; i>=0; i--){
        rev+=arrA[i];
    }

    console.log(rev);
    console.log(arrA.toString());

    return rev === arrA.join('');
};

palindromes("Hello");

// Do not edit below this line
module.exports = palindromes;
