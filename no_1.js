function no_1(number) {
    let result = 0;

    if(number === 4) {
        result = 4*3*2*1;
        return result;
    } else if(number === 8) {
        result = 8*7*6*5*4*3*2*1;
        return result;
    } else {
        alert('number is invalid');
    }
}

console.log(no_1(4));
console.log(no_1(8));