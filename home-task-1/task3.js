function solveQuadraticEquation(a,b,c){
    x1 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    x2 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    console.log(x1, x2);
}
