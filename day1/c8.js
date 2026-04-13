const orders = [
  { id: 1, amount: 200 },
  { id: 2, amount: 500 },
  { id: 3, amount: 300 }
];

function totalSales(arr) {
  return arr.reduce((total, order) => total + order.amount, 0);
}

console.log(totalSales(orders));