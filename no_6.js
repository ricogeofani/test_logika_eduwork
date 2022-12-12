function no_6(number) {
    const arr = [1,4,7,9,12];

    if(number >= 2 && number <= 15) {
        arr.shift();
        return arr;
    }

    return arr;
}

console.log(no_6(15));

