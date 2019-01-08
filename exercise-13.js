function targetTerdekat(arr) {
    var temp = 0;
    var result = 0;
    var startX = false;
    var startO = false;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 'o' && startO === false && startX === false) {
            startO = true;
            temp = 0;
        } else if(arr[i] === 'x' && startX === false && startO === false) {
            startX = true;
            temp = 0;
        } else if(arr[i] === 'x' && startX === true) {
            temp = 0;
        } else if(arr[i] === 'o' && startX === true) {
            temp++;
            result = temp;
            return result;
        } else if(arr[i] === 'x' && startO === true) {
            temp++
            result = temp;
            return result;
        } else {
            temp++;
        }
    }

    return result;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2