function shuffleArray(array) {

    var shuffledArray = [];

    while (array.length !== 0) {
        var min = 0;
        var max = array.length;
        var randomIndex = Math.floor((max - min) * (Math.random()));

        shuffledArray.push(array[randomIndex]);
        array.splice(randomIndex, 1);
    }

    return shuffledArray;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));