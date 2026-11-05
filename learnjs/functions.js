function printnames() {
    console.log("myname is jagadeesh");
    console.log("myname is raju");
    console.log("myname is ramcharan");
}
printnames()

function add() {
    console.log("5");
    console.log("6");
    console.log("5+6");
}
add()


// camlcasing means browserName here second word capital must and should be

// parameterization of the functions
function valuesforplaywright(n1,n2,n3) {
    console.log(n1);
    console.log(n2);
    console.log(n1+n2);
}
valuesforplaywright(2,6,8)

module.exports ={
    printnames: printnames,  
    add: add,
    valuesforplaywright: valuesforplaywright,
}