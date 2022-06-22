const findTheOldest = function(arr) {
    let age = 0;
    arr.sort((a, b) => {
        ageA = getAge(a);
        ageB = getAge(b);

        if(ageA < ageB)
            return -1;
        if(ageA > ageB)
            return 1;
        return 0;
    })

    return arr[arr.length-1];
};

function getAge(a){
    let ageA;
    if(a.yearOfDeath === undefined){
        const date = new Date();
        ageA = Number(date.getFullYear()) - a.yearOfBirth;
    }
    else{
        ageA = a.yearOfDeath - a.yearOfBirth;
    }
    return ageA;
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
