function no_5() {
    const number = parseInt(prompt('silahkan masukan bilangan 1-100: '));

    if(number === 4) {
        console.log('empat');
    } else if(number === 20) {
        console.log('dua puluh');
    } else if(number === 39) {
        console.log('tiga puluh sembilan');
    } else if(number === 104) {
        console.log('silahkan masukan bilangan 1-100' );
    } else {
        console.log('number is invalid');
    }
}

no_5();