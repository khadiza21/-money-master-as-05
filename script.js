document.getElementById("calculate").addEventListener("click", function () {
  //income
  let incomeInput = document.getElementById("income").value;

  //food
  let foodInput = document.getElementById("food");
  let foodCost = foodInput.value;

  //rent
  let rentInput = document.getElementById("rent");
  let rentCost = rentInput.value;

  //cloth
  let clothInput = document.getElementById("cloth");
  let clothCost = clothInput.value;

  let expensesValue = document.getElementById("totalExpeneses");
  let balnce = document.getElementById("balanceAmount");
  let previousExpensesValue = expensesValue.innerText;
  let previousBalnc = balnce.innerText;

  const newTotalExpeneses =
    parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);

  const newBalanceAmount = parseFloat(incomeInput) - newTotalExpeneses;

  console.log(newTotalExpeneses, newBalanceAmount);

  expensesValue.innerText = newTotalExpeneses;
  balnce.innerText = newBalanceAmount;
});
