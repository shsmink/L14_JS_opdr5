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

// Opdracht 2 - VAT calculations 1st

// const calculateVATPrice = function(basePrice, VATPercentage) {
//     return basePrice * (VATPercentage / 100);
// }

// const priceIncludingVAT = function(basePrice, VATPercentage) {
//     const VAT = calculateVATPrice(basePrice, VATPercentage);
//     return basePrice + VAT;
// };

// console.log(priceIncludingVAT(1210, 21)); //1464,1
// console.log(priceIncludingVAT(3, 9)); // 3,27

// Opdracht 2 - VAT calculations 2nd

const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]
