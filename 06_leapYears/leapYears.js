const leapYears = function(year) {
    if(!Number.isInteger(year) || year < 0)
        return "ERROR";

    let div4 = false;
    let div100 = false;
    let div400 = false;

    if(year % 4 == 0)
        div4 = true;
    if(year%100 == 0)
        div100 = true;
    if(year%400 == 0)
        div400 = true;

    if(div4 && !div100)
        return true;
    else if (div4 && div100 && div400)
        return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
