// Helper function to shuffle api responses so that different structures/people get displayed first 
const arrayShuffler = (array) => {
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

module.exports = arrayShuffler
