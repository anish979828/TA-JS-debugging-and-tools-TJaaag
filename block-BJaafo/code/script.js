function fullName (firstName = "",lastName = ""){
    return firstName + " " + lastName
}

let result = fullName("Anish","Giri");

let expected = "avsk chaudhary"

if (result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}

function tax(ammount,taxRate) {
    return ammount + (ammount * taxRate);
}







