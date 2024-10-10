// Convert the integers in the console.logs below to base 10:
const addZeros = require('../utils/addZeros');

/******************************************************************************/

const convertToBase10 = str => {
  let marker = str.slice(1,2);
  let string = str.slice(2);
  if(string.length != 8){
    string = addZeros(string, 8);
  }
  // Check if str in a binary
  if(marker === 'b'){
    let integers = string.split('').map((char)=> parseInt(char));

    return integers.reverse().reduce((accumulator, element, idx) => accumulator += (element * (2**idx)), 0);
  }if(marker === 'x'){
    let integers = string.split('').map((char)=> parseInt(char, 16));

    return integers.reverse().reduce((accumulator, element, idx) => accumulator += (element * (16**idx)), 0);
  }else{
    return parseInt(str);
  }
};

/******************************************************************************/

// console.log(convertToBase10('8')); // 12
// console.log(convertToBase10('0b0101')); // 5
// console.log(convertToBase10('0b1000')); // 8
// console.log(convertToBase10('0b0111')); // 7

// console.log('––––––');

// console.log(convertToBase10('0b10100101')); // 165
// console.log(convertToBase10('0b11111111')); // 255
// console.log(convertToBase10('0b01010101')); // 85
// console.log(convertToBase10('0b00110011')); // 51

// console.log('––––––');

// console.log(convertToBase10('0xf')); // 15
// console.log(convertToBase10('0xfa')); // 250
// console.log(convertToBase10('0x1234')); // 4660
// console.log(convertToBase10('0xc9a1')); // 51617
// console.log(convertToBase10('0xbf12')); // 48914

module.exports = convertToBase10;