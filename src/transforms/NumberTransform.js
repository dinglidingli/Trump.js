/**
 * Take it.
 * 
 * @param {number} bracket 
 * @param {number} input 
 * @return {number}
 */
function TaxMe(bracket, input) {
    const percentage = bracket / 100;

    return (1 - percentage) * input;
}

/**
 * Transforms numbers according to Trump's tax changes.
 * Source: https://www.forbes.com/sites/cameronkeng/2017/01/03/tax-planning-for-trump-the-next-four-years/#385967b440a3
 * 
 * @param {number} input 
 * @return {number}
 */
function NumberTransform(input) {
    if(input < 0) {
        return input;
    } else if(input >=0 && input <= 37500) {
        return TaxMe(12, input);
    } else if(input > 37500 && input <= 112500) {
        return TaxMe(25, input);
    }
    
    return TaxMe(33, input);
}

export default NumberTransform;