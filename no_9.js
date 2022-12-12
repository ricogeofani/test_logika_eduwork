function no_9() {
    const arr = [4, 2, 6, 88, 3, 11];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 2) {
            console.log('low:'+arr[i]);
        } else if(arr[i] == 88) {
            console.log('high:'+arr[i]);
            
        }
    }
}

no_9();


