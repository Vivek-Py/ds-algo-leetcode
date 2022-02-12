// Understanding
var maxProfit = function (prices) {
  let maxProfit = -Infinity;
  for (let i = 0; i < prices.length; ++i) {
    let buyPrice = prices[i];
    for (let j = i + 1; j < prices.length; ++j) {
      if (prices[j] - buyPrice > maxProfit) {
        maxProfit = prices[j] - buyPrice;
      }
    }
  }
  if (maxProfit < 0) {
    return 0;
  }
  return maxProfit;
};

// console.log(maxProfit([7, 6, 4, 3, 1]));

// Using a single loop
// ~65%
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let profit = 0;
  for (let i = 0; i < prices.length; ++i) {
    if (prices[i] < minPrice) minPrice = prices[i];
    // if (prices[i] - minPrice > profit) profit = prices[i] - minPrice;
    profit = Math.max(prices[i] - minPrice, profit);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
