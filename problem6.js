function largestNumber ( num1, num2, num3){
    if ( num1 > num2 && num1 > num2 ){
        // let largest = 0;
        return num1
    }
    else if ( num2 > num1 && num2 > num3){
        return  num2
    }
    return  num3
}

console.log( largestNumber( 20, 50, 40 ));