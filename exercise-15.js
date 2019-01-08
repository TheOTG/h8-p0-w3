function groupAnimals(animals) {
    var result = [];
    var temp = [];

    for(var i = 0; i < animals.length; i++) {
        var inside = false;

        for(var j = 0; j < result.length; j++) {
            if(result[j][0][0] === animals[i][0]) {
                inside = true;
                result[j].push(animals[i]);
                break;
            }
        }

        if(inside === false) {
            temp.push(animals[i]);
            result.push(temp);
            temp = [];
        }
    }

    result.sort();
    
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]