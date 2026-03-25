function verifyCreditNumber(creditNumber) {
    // Convert the credit number to a string and remove any non-digit characters
    const numStr = creditNumber.toString().replace(/\D/g, '');
    
    let sum = 0;
    let shouldDouble = false;

    // Process the digits from right to left
    for (let i = numStr.length - 1; i >= 0; i--) {
        let digit = parseInt(numStr.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9; // Same as summing the digits of the product
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble; // Toggle the doubling for the next digit
    }

    // A valid credit number will have a sum that is a multiple of 10
    return sum % 10 === 0;
}

// Example usage:
console.log(verifyCreditNumber(4532015112830366)); // true
console.log(verifyCreditNumber(1234567812345670)); // false
console.log(verifyCreditNumber('6011-1111-1111-1117')); // true
console.log(verifyCreditNumber('378282246310005')); // true