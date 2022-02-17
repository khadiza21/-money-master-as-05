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

  const expenseiveDefine = document.getElementById("totalExpeneses");
  expenseiveDefine.innerText = newTotalExpeneses;
  return newTotalExpeneses;
}

function getBalance() {
  const getIncome = getIncomeAmount();
  const newTotalExpeneses = getExpenesesAmount();

  const balnce = getIncome - newTotalExpeneses;

  const balaceDefine = document.getElementById("balanceAmount");
  balaceDefine.innerText = balnce;
  return balnce;
}

function getSaveAmount() {
  const jIncome = getIncomeAmount();
  const getSaving = getInputValue("savingInput");
  const saveAmount = (jIncome * getSaving) / 100;

  const savingsDefine = document.getElementById("savingMoney");
  savingsDefine.innerText = saveAmount;

  return saveAmount;
}

function getRemainingBalance() {
  const savedAmount = getBalance();

  const toatalBalace = getSaveAmount();
  const remainingBalace = savedAmount - toatalBalace;

  const remainMoneyDefine = document.getElementById("remainMoney");
  remainMoneyDefine.innerText = remainingBalace;

  return remainingBalace;
}

// const newTotalExpenesesText = getExpenesesAmount();
// const newBalanceText = getBalance();
// const newSaveAmountText = getSaveAmount();
// const remainingBalaceText = getRemainingBalance();

// const totalExpenseiveDefine = expenseiveDefine.innerText;
// const totalBalaceDefine = balaceDefine.innerText;
// const totalSavingsDefine = savingsDefine.innerText;
// const totalRemainMoneyDefine = remainMoneyDefine.innerText;


document.getElementById("calculate").addEventListener("click", function () {
  const expense = getExpenesesAmount();
  const balanceG = getBalance();
});

document.getElementById("save").addEventListener("click", function () {
  const lastSavingAmount = getSaveAmount();
  const lastRemainingBalace = getRemainingBalance();
});
