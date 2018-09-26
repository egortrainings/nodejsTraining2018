const isPalindrome = str => {

    let s = str.replace(/\s/g,'');

    let middle = 0;
    let leftPos = 0;
    let rightPos = 0;

    if (s.length % 2 === 1) {
        middle = (s.length + 1) / 2;
        leftPos = middle - 2;
        rightPos = middle;
    } else {
        middle = (s.length / 2);
        leftPos = middle - 1;
        rightPos = middle;
    };

    while((s[leftPos] == s[rightPos]) && leftPos >= 0)
    {
    leftPos--;
    rightPos++;
    };

    if (leftPos == -1) return true
    else return false;

}
