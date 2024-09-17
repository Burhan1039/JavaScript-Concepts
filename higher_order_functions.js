// MAP
const multiple=[1,3,6,9]

function mul(multiple){
    return 2*multiple;
}
console.log(multiple.map(mul));


//FILTER
const array=[1,2,12,14];

function greater(array){
    return array%2===0;
}
console.log(array.filter(greater))