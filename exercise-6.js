function angkaPalindrome(num) {

    for(var i = num + 1; ;i++) {
        var numString = "" + i;
        if(numString.split('').reverse().join('') === numString) {
            return i;
        }
    }

}
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001