function drawChessboard(){
    let str = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((!(i % 2) && (j % 2)) || ((i % 2) && !(j % 2))) {
                str = str + 'b';
            } else {
                str = str + 'w';
            }
        }
        console.log(`${str}\n`);
        str = '';
    }
}
