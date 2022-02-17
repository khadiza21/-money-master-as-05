//getting input
function getInputValue(inputId) {
  let inputField = document.getElementById(inputId);
  let amountText = inputField.value;
  let amountValue = parseFloat(amountText);

  return amountValue;
  //  inputField.value = '';
}

//get income amount
function getIncomeAmount() {
  const getIncome = getInputValue("income");

  // if (getIncome < 0) {
  //   alert("please enter valid quantity which is equal/greater than 0!");
  // }
  return getIncome;
}

//get expeneses amount
function getExpenesesAmount() {
  const getFoodCost = getInputValue("food");
  const getRentCost = getInputValue("rent");
  const getCloth = getInputValue("cloth");

  // if (getFoodCost < 0 || getRentCost < 0 || getCloth) {
  //   alert("please enter valid quantity which is equal/greater than 0!");
  // }

  const newTotalExpeneses = getFoodCost + getRentCost + getCloth;

  const getIncome = getIncomeAmount();
  //amount check with condition
  if (newTotalExpeneses > getIncome) {
    alert("Your Expenes Amount is greater than Your Income!");
  } else {
    const expenseiveDefine = document.getElementById("totalExpeneses");
    expenseiveDefine.innerText = newTotalExpeneses;
    return newTotalExpeneses;
  }
}
//get balace
function getBalance() {
  const getIncome = getIncomeAmount();
  const newTotalExpeneses = getExpenesesAmount();

  const balnce = getIncome - newTotalExpeneses;

  const balaceDefine = document.getElementById("balanceAmount");
  //set value condition
  if (isNaN(balnce)) {
    balaceDefine.innerText = 00;
  } else {
    balaceDefine.innerText = balnce;
  }

  return balnce;
}
//get save amount
function getSaveAmount() {
  const jIncome = getIncomeAmount();
  const balanceG = getBalance();
  const getSaving = getInputValue("savingInput");
  // if (getSaving < 0) {
  //   alert("please enter valid quantity which is equal/greater than 0!");
  // }
  const saveAmount = (jIncome * getSaving) / 100;
  //amount check with condition
  if (saveAmount > balanceG) {
    alert("Your Savings Amount is greater than Your Balace!");
  } else {
    const savingsDefine = document.getElementById("savingMoney");
    savingsDefine.innerText = saveAmount;
    return saveAmount;
  }
}
//get remainning balance
function getRemainingBalance() {
  const savedAmount = getBalance();

  const toatalBalace = getSaveAmount();
  const remainingBalace = savedAmount - toatalBalace;

  const remainMoneyDefine = document.getElementById("remainMoney");
  //set value condition
  if (isNaN(remainingBalace)) {
    remainMoneyDefine.innerText = 00;
  } else {
    remainMoneyDefine.innerText = remainingBalace;
  }

  return remainingBalace;
}

//calculation by calculate button
document.getElementById("calculate").addEventListener("click", function () {
  getExpenesesAmount();
  getBalance();
});

//savinns and remaining balance calculte save button
document.getElementById("save").addEventListener("click", function () {
  getSaveAmount();
  getRemainingBalance();
});
