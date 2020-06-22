const validator = {

  isValid: num => {
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(num)) return false;

    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0, bEven = false;
    num = num.replace(/\D/g, "");

    for (var n = num.length - 1; n >= 0; n--) {
      var cDigit = num.charAt(n),
        nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
    }

    return (nCheck % 10) == 0;
  },
  maskify: num => {

    let mask_simbol = "*";
    if (num.length >= 4) {
      let lastDigit = num.slice(-4);
      let masked_str = mask_simbol.repeat(num.length - 4) + lastDigit;
      return num = masked_str;
    } else {
      return num;
    }
  }
};

export default validator;
