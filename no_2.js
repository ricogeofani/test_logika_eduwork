function no_2(str) {

    let splitStr = str.split('');
    let reverseArray = splitStr.reverse();
    let joinArray = reverseArray.join('');

    return joinArray;
}

console.log(no_2('abcde'));