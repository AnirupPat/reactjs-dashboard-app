let prices = [];
for (let i = 0; i < 500; i++) {
  prices.push(Math.floor(Math.random() * 80) + 1);
}

let prices2 = [];
for (let i = 0; i < 500; i++) {
  prices2.push(Math.floor(Math.random() * 80) + 1);
}

export { prices, prices2 };
