function pasanganTerbesar(num) {
    var temp = "" + num;
    var result = temp[0] + temp[1];
    
    for(var i = 1; i < temp.length - 1; i++) {
        if((temp[i] + temp[i + 1]) > result) {
            result = temp[i] + temp[i + 1];
        }
    }

    return Number(result);
}
  
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99