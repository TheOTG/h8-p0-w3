function balikString(kata) {
    var word = kata.split('');
    var result = [];
    
    for(var i = 0; i < word.length; i++) {
        result.push(word[word.length - i - 1]);
    }
    // return result.join('');
    return result;
}

console.log(balikString('hello world!'));