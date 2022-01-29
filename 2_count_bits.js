// var countBits = function(n) {
//     let bits = 0;
//     while (n >= 1) {
//         let res = n % 2;
//         n = Math.floor(n / 2);
//         if (res !== 0 ) {
//             bits++;
//         }
//     }
//
//     return bits;
// };

var countBits = function(n) {
    return n.toString(2).split('0').join('').length;

}

console.log(countBits(7));
