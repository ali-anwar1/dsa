/**
 * var
 * Tricky questions 
 * 
 */


for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}


/***
 * Fixed
 */
console.log("Fixed");

for (var i = 1; i <= 5; i++) {
    setTimeout((iCopy) => {
        console.log(iCopy);
    }, 0, i);
}


for (var i = 1; i <= 5; i++) {
    (function (iCopy) {
        setTimeout(() => {
            console.log(iCopy);
        }, 0);
    })(i);
}