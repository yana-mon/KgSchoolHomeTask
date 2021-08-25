function drawTriangle(height) {
    let res = '';
    for (let i = height; i > 0; i--) {
        for (let j = height; j > 0; j--) {
            if (i <= j){
                res = res + '#';
            }
        }
        console.log(`${res}\n`);
        res = '';
    }
}
