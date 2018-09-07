// https://www.udemy.com/js-algorithms-and-data-structures-masterclass/
// Section 6 - Exercise 4

function checkDuplicates(...args) {

    args.sort((a, b) => a > b);

    for(let i =0; i< args.length; i++) {
        if(args[i] === args[i+1]) {
            return true;
        }
    }

    return false;
}

console.log(checkDuplicates(1, 8, 3, 4, 5, 4));

module.exports = checkDuplicates;


