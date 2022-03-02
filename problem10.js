let array = [ 10, 90, 50, 82, 81, 89, 10, 50, 60, 90, 100, 101]
function largestnumberOutOf80(number){

    for( let i = 0; i<array.length; i++){
        let element = array [i];
       
        if(element >80 ){
       console.log(element);
        }
    }
    // return element
}
console.log(largestnumberOutOf80(array));
