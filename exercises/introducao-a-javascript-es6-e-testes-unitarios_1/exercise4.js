function longestWord(sentence) {
    const splitSentence = sentence.split(' ');
    let big = 0;
    let newWord = "";
    for(let index = 0; index < splitSentence.length; index += 1) {
        let eachWord = splitSentence[index];
        if(eachWord.length > big) {
            big = eachWord.length;
            newWord = eachWord;
        }
    }
    return newWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));