const calculateTotalprice =(discount,...prices) => {
    return discount * prices.reduce((a,b) => a+b)

};

console.log(calculateTotalprice(50,200,300))