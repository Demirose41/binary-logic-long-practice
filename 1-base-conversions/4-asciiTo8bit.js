const addZeros = require('../utils/addZeros');
const convertToBase2 = require('./2-convertToBase2')

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  let eightBit = '';
  let splitString = str.split('');
  for(char of splitString){
    asciiCode = char.charCodeAt();
    eightBit = eightBit + addZeros((convertToBase2(asciiCode).slice(2)),8);
  }
  return eightBit;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));  
console.log(asciiTo8bit('123') === '001100010011001000110011');
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
console.log(asciiTo8bit('ABC') === '010000010100001001000011' );
// // 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
console.log(asciiTo8bit('Hello, world!') === '01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001');
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001