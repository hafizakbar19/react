const products = [
    {name: "phone", price: 3400},
    {name: "camera", price: 1200},
    {name: "laptop", price: 5000},
    {name: "head phone", price: 400},
    {name: "charger", price: 300}
];

let discountedPrices = products.map((item)=>{
   return {
    name: item.name, price: item.price * 0.9
   }
})

let underThousand = products.filter((item)=>{
  return  item.price < 1000
})

// console.log(discountedPrices)
// console.log(underThousand)

let min = products.reduce((pVal, cVal) => {
    return pVal.price < cVal.price ? pVal : cVal;
});

let max = products.reduce((pVal, cVal) => {
    return pVal.price > cVal.price ? pVal : cVal;
});

// console.log(max)

let reduced = products.reduce((sum, item) => {
    return sum + item.price;
}, 0);

console.log(reduced)