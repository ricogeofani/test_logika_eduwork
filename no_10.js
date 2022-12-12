function no_10(year) {
    if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
        return year + ':' + 'tahun kabisat';
    } else {
        return year + ':' + 'bukan tahun kabisat';
    }
}

console.log(no_10(2021));
console.log(no_10(2024));