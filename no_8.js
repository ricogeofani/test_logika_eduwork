function no_8() {
    const angka = 15;

    for(let i = 1; i <= 15; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('EduWork');
        } else if(i % 5 == 0) {
            console.log('Work');
        } else if(i % 3  == 0) {
            console.log('Edu');
        } else {
            console.log(i);
        }
    }
}

no_8();