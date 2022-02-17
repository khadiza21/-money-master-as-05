function getInputValue(inputId) {
  let inputField = document.getElementById(inputId);
  let amountText = inputField.value;
  let amountValue = parseFloat(amountText);
  // inputField.value = "";
  return amountValue;
}

function getIncomeAmount() {
  const getIncome = getInputValue("income");
  return getIncome;
}

function getExpenesesAmount() {
  const getFoodCost = getInputValue("food");
  const getRentCost = getInputValue("rent");
  const getCloth = getInputValue("cloth");
  const newTotalExpeneses = getFoodCost + getRentCost + getCloth;
  return newTotalExpeneses;
}

function getBalance() {
  const getIncome = getIncomeAmount();
  const newTotalExpeneses = getExpenesesAmount();

  const balnce = getIncome - newTotalExpeneses;

  return balnce;
}

function getSaveAmount() {
  const jIncome = getIncomeAmount();
  const getSaving = getInputValue("savingInput");
  const saveAmount = (jIncome * getSaving) / 100;
  return saveAmount;
}

function getRemainingBalance() {
  const savedAmount = getBalance();

  const toatalBalace = getSaveAmount();
  const remainingBalace = savedAmount - toatalBalace;
  return remainingBalace;
}

document.getElementById("calculate").addEventListener("click", function () {
  const expense = getExpenesesAmount();
  const balanceG = getBalance();

  // expensesValue.innerText = newTotalExpeneses;
  // balnce.innerText = newBalanceAmount;
});

document.getElementById("save").addEventListener("click", function () {
  const lastSavingAmount = getSaveAmount();
  const lastRemainingBalace = getRemainingBalance();
});
