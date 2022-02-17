function getInputValue(inputId) {
  let inputField = document.getElementById(inputId);
  let amountText = inputField.value;
  let amountValue = parseFloat(amountText);
  // inputField.value = '';
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
  // if (getFoodCost != Number || getRentCost != Number || getCloth != Number) {
  //   alert("Check your Balance ! Here Not Number amount");
  // } else {
  //   if (getFoodCost < 0 || getRentCost < 0 || getCloth < 0) {
  //     alert("Check your Balance ! Here Have Negative amount");
  //   } else {
      
  //   }
  // }

  const newTotalExpeneses = getFoodCost + getRentCost + getCloth;

      const getIncome = getIncomeAmount();
      if (newTotalExpeneses > getIncome) {
        // Create element:
        const para = document.createElement("p");
        para.innerHTML = "Your Expenes Amount is greater than Your Income!";

        // Append to another element:
        document.getElementById("myDIV1").appendChild(para);
      } else {
        const expenseiveDefine = document.getElementById("totalExpeneses");
        expenseiveDefine.innerText = newTotalExpeneses;
        return newTotalExpeneses;
      }
}

function getBalance() {
  const getIncome = getIncomeAmount();
  const newTotalExpeneses = getExpenesesAmount();

  const balnce = getIncome - newTotalExpeneses;

  const balaceDefine = document.getElementById("balanceAmount");
  if (isNaN(balnce)) {
    balaceDefine.innerText = 00;
  } else {
    balaceDefine.innerText = balnce;
  }

  return balnce;
}

function getSaveAmount() {
  const jIncome = getIncomeAmount();
  const balanceG = getBalance();
  const getSaving = getInputValue("savingInput");
  const saveAmount = (jIncome * getSaving) / 100;

  if (saveAmount > balanceG) {
    // Create element:
    const para = document.createElement("p");
    para.innerHTML = "Your Savings Amount is greater than Your Balace!";

    // Append to another element:
    document.getElementById("myDIV2").appendChild(para);
  } else {
    const savingsDefine = document.getElementById("savingMoney");
    savingsDefine.innerText = saveAmount;
    return saveAmount;
  }
}

function getRemainingBalance() {
  const savedAmount = getBalance();

  const toatalBalace = getSaveAmount();
  const remainingBalace = savedAmount - toatalBalace;

  const remainMoneyDefine = document.getElementById("remainMoney");

  if (isNaN(remainingBalace)) {
    remainMoneyDefine.innerText = 00;
  } else {
    remainMoneyDefine.innerText = remainingBalace;
  }

  return remainingBalace;
}

document.getElementById("calculate").addEventListener("click", function () {
  getExpenesesAmount();
  getBalance();
});

document.getElementById("save").addEventListener("click", function () {
  getSaveAmount();
  getRemainingBalance();
});
