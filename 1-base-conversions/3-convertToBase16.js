// Convert the integers in the console.logs below to base 16:
const convertToBase10 = require('./1-convertToBase10');
/******************************************************************************/

const convertToBase16 = element => {
  // convert all numbers to base10 first
  if(typeof element === 'string' ){
    element = convertToBase10(element);  
  }
  let exponent = 0;
  let exponents = []; 
  let hex = '0x';
  while((powerOf16(exponent) <= element)){
    exponents = [...exponents, exponent]
    exponent++;
  }
  exponents.reverse().map((exponent) => {
    if(element - powerOf16(exponent) >= 0){
      let currentValue = Math.floor(element / powerOf16(exponent)) 
      hex += baseHex(currentValue);
      element -= currentValue * powerOf16(exponent);
    }else{
      hex += '0';
    } 
  })

  return hex;


};


function powerOf16(exponent){
  return (1* (16**exponent))
}

function baseHex(num){
  const HEXVALUES = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  return HEXVALUES[num]
}


/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33