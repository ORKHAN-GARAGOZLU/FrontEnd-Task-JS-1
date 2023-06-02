var userPassword = prompt("Hi\nRegister new password");

while (userPassword.length !== 4) {
    alert("Password must be 4 digits!");
    userPassword = prompt("Reenter password");
}

var userBalance = prompt("Add your salary");

while (userBalance <= 344) {
    alert("Salary must be minimum 345 AZN");
    userBalance = prompt("Add your salary");
    if (userBalance === null) {
        break;
    }
}

var salary = userBalance;
var tryCount = 3;
var isContinue = true;
var trs = [];
var trs2 = [];
var loanTrs = [];
var firstLoan = false;
var count = 0;

while (tryCount > 0) {
    var password = prompt("Include your password");

    if (userPassword == password) {
        console.log("Welcome");
        console.log(`Your balance: ${userBalance} AZN`);

        var choose;

        while (choose !== "C" && choose !== "M") {
            choose = prompt("Pay credit press 'C'\nTake cash press 'M'");

            if (choose === null) {
                break;
            }
        }

        if (choose === "C") {
            while (userBalance >= 0) {
                var creditAmount = Number(prompt("Include credit amount"));

                if (creditAmount <= userBalance) {
                    userBalance -= creditAmount;
                    trs.push([creditAmount, new Date()]);
                    console.log("Your balance: " + userBalance + " AZN");

                    isContinue = confirm("Wanna continue?");

                    if (!isContinue) {
                        var isShow = confirm("Wanna see transaction information?");

                        if (isShow) {
                            for (const tr of trs) {
                                count++;
                                document.write(`${count}.Credit pay: ${tr[0]} AZN | Date: ${tr[1]}<br>`);
                                
                            }
                        }
                        console.log("Thanks");
                        break;
                    }
                } else {
                    console.log("Balance is not enough");
                }

                if (userBalance === 0) {
                    console.log("Balance is not enough");
                    GetLoan(salary);
                    break;
                }
            }

            if (userBalance === 0 || !isContinue) {
                break;
            }

        } else if (choose === "M") {
            while (userBalance >= 0) {
                var cashAmount = Number(prompt("Include cash amount"));

                if (cashAmount <= userBalance) {
                    userBalance -= cashAmount;
                    trs2.push([cashAmount, new Date()]);
                    console.log("Your balance: " + userBalance + " AZN");

                    isContinue = confirm("Wanna continue?");

                    if (!isContinue) {
                        var isShow = confirm("Wanna see transaction information?");

                        if (isShow) {
                            for (const br of trs2) {
                                count++;
                                document.write(`${count}.Cash amount: ${br[0]} AZN | Date: ${br[1]}<br>`);
                            }
                        }
                        console.log("Thanks");
                        break;
                    }
                } else {
                    console.log("Balance is not enough");
                }

                if (userBalance === 0) {
                    console.log("Balance is not enough");
                    GetLoan(salary);
                    break;
                }
            }

            if (userBalance === 0 || !isContinue) {
                break;
            }
        }
    } else {
        tryCount--;

        if (tryCount === 0) {
            console.log("Blocked!");
            break;
        }

        console.log("Password is incorrect, try again, your last try: " + tryCount);
    }
}



function GetLoan(num) {
    if (!firstLoan) {
      var loan = confirm(`Get a personal loan.\nOffer is ${num * 0.45} AZN\nAnd you have to pay 2% commission`);
  
      if (loan) {
        var loanAmount = (num * 0.45) - (num * 0.45 * 0.02);
        userBalance += loanAmount;

        loanTrs.push([loanAmount, new Date()]);
  
        if (!isContinue) {
          var isShow = confirm("Do you want to see transaction information?");
          if (isShow) { 
            for (const lt of loanTrs) {
              count++;
              console.log(`${count}. Loan: ${lt[0]} AZN | Date: ${lt[1]}`);
            }
          }
          console.log("Thanks");
        }
  
        console.log(`Your loan has been approved. New balance: ${userBalance} AZN`);
        firstLoan = true;
        var choose = null;
        while (choose !== "C" && choose !== "M") {
          choose = prompt("Pay credit press 'C'\nTake cash press 'M'");
          if (choose === null) {
            break;
          }
        }
        if (choose === "C") {
        } 
        else if (choose === "M") {
        }
      }
    } else {
      alert("Unfortunately, you can only get a loan once.");
    }
  }
  


