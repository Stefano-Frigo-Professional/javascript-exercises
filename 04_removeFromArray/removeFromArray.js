const removeFromArray = function(inpArray, ...removeArgs) {
    const args = Array.from(removeArgs);

    for(let i = 0; i<args.length; i++){
        const index = inpArray.indexOf(args[i]);
        if(index>-1)
            inpArray.splice(index, 1);
    }

    return inpArray;
};

// Do not edit below this line
module.exports = removeFromArray;
