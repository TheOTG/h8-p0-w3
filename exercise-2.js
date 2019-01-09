function balikString(kata) {
    var word = kata.split('');
    var result = [];
    
    for(var i = 0; i < word.length; i++) {
        result.push(word[i]);
    }
    return result;
}

console.log(balikString('hello world!'));