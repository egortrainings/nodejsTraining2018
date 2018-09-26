const stringReplacer = (str, n, str1) => {

    let s = str.split(' ').reduce((sentence, word) => {
        if (word.length >= n) {
            sentence +=  word.substring(0, n-1) + str1 + word.substring(n) + ' ';
            }
            else
            sentence += word + ' ';

        return sentence;
    },'');
return s;
}
