module.exports = function toReadable(number) {

    let wordNumber = ["zero", "one", "two", "three", 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let wordTens = [0, 1, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let stringNumber = ("" + number).split("").reverse().join("");
    let firstNumber = Number(stringNumber[0]);
    let tensNumber = Number(stringNumber[1]);
    let hundredNumber = Number(stringNumber[2])
    let result = "";

    if (0 <= number && number < 20) {
        result = wordNumber[number]
    }

    if (20 <= number && number <= 99) {
        firstNumber === 0 ? result = wordTens[tensNumber] : result = wordTens[tensNumber] + " " + wordNumber[firstNumber];
    }
    if (100 <= number && number < 1000) {

        result = wordNumber[hundredNumber] + " hundred"
        if (0 < number%100 && number%100 < 20) {
            result = result + " " + wordNumber[number%100]
            
        } else {
            if (firstNumber === 0) {

                tensNumber === 0 ? result : result = result + " " + wordTens[tensNumber];
    
            } else {
                tensNumber === 0 ? result = result + " " + wordNumber[firstNumber] : result = result + " " + wordTens[tensNumber] + " " + wordNumber[firstNumber];
            }
        }

        
        
    }




    return result;

}
