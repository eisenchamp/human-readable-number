module.exports = function toReadable (number) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var numberString = number.toString();
    
    if (number < 0){
        throw new Error('!!!Function does not work with negative numbers!!!');
    }
    
    if (number == 0){
        return 'zero';
    }
    
    if (number < 20) {
        return ones[number];
    }

    if (numberString.length == 2) {
        if(numberString[1] == '0'){
            return tens[numberString[0]];
        }else{
            return tens[numberString[0]] + ' ' + ones[numberString[1]];
        }
    }

    if (numberString.length == 3) {
        if (numberString[1] == '0' && numberString[2] == '0'){
            return ones[numberString[0]] + ' hundred';
        }else if (numberString[1] == '0' && numberString[2] != '0'){
            return ones[numberString[0]] + ' hundred ' + ones[numberString[2]];
        }else if (numberString[1] == '1'){
            return ones[numberString[0]] + ' hundred ' + ones[(numberString[1] + numberString[2])];
        }else if(numberString[1] != '0' && numberString[2] == '0'){
            return ones[numberString[0]] + ' hundred ' + tens[numberString[1]];
        }else{
            return ones[numberString[0]] + ' hundred ' + tens[numberString[1]] + ' ' + ones[numberString[2]];
        }
    }

  if (numberString.length > 3) {
      throw new Error('!!!Function works only with hundreds!!!');
  }
}
