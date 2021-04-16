// Opdracht 1 - Hey kiddo

// const personIsAnAdult = function(age) {
//     if (age >= 18) {
//         return true;
//     }
//         return false;
// };

// const greeting = function(age) {
//     let adult = personIsAnAdult(age);
//     if (adult == true) {
//         return "Hello there";
//     }
//         return "Hey kiddo";
// };

// console.log(greeting(32));
// console.log(greeting(12));

// Opdracht 2 - VAT calculations

const getBasePrice = function(price) {
    return price / 1,21;
}

const vatPrice = function(price) {
    return price - (price / 1,21);
}

const VatCalculation = function(price) {
    const basePrice = getBasePrice(price);
    const vatPriceOfProduct = vatPrice(basePrice)
    return vatPriceOfProduct * 1,21;
};

console.log(VatCalculation(1210));