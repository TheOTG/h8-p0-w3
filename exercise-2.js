function balikString(kata) {
    var word = '';
    
    for(var i = 0; i < kata.length; i++) {
        word += kata[kata.length -1 -i];
    }
    return word;
}

console.log(balikString('hello world!'));