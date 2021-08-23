// function for taking input from inputfield
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountvalue = parseFloat(inputAmountText);
  //clear input field...
  inputField.value = "";
  return amountvalue;
}

//function for update total value
function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const prevTotal = parseFloat(totalElement.innerText);
  totalElement.innerText = prevTotal + amount;
  // console.log(depositTotalText);
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const previousbalance = parseFloat(balanceTotal.innerText);
  return previousbalance;
}
//function for update balance
function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousbalance = getCurrentBalance();
  //   const previousbalance = parseFloat(balanceTotal.innerText);
  if (isAdd == true) {
    balanceTotal.innerText = previousbalance + amount;
  } else {
    balanceTotal.innerText = previousbalance - amount;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue("deposit-input");
    //validation if balance is less than zero
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    }

    //get and update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = parseFloat(depositTotal.innerText);
    depositTotal.innerText = depositTotalText + depositAmount;
    console.log(depositTotalText); */

    // update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const previousbalance = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousbalance + depositAmount; */
  });

//handle withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // const withdrawInput = document.getElementById('withdraw-input')
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
      updateTotalField("withdraw-total", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }

    if(withdrawAmount > currentBalance){
        console.log('error its not possible');
    }

    // get and update withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText)
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

    // update balance after withdraw
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousbalanceTotal - withdrawAmount; */
  });
