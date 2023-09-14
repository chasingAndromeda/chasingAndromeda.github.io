const budgetInput = document.querySelector('#budgetInput');
const monthlyBudgetHeader = document.querySelector('#monthlyBudget');
const enterBtn = document.querySelector('#enterBtn');
const resetBtn = document.querySelector('#resetBtn');
const expenseContainer = document.querySelector('#budgetExpensesContainer');
const expenseList = document.querySelector('#expenseList');
const expenseEnterBtn = document.querySelector('#expenseEnterBtn');
const expenseTypeInput = document.querySelector('#expenseTypeInput')
const expenseInput = document.querySelector('#expenseInput');
const totalExpensesVal = document.querySelector('#totalExpenses');
const totalExpensesHeader = document.querySelector('#totalExpensesHeader');
const remainingVal = document.querySelector('#remainingTotal');
const percentageVisual = document.querySelector('progress');

let totalExpenses = 0;
let overBudget = false;
let monthlyBudget = 0;
let remainingTotal = 0;
let percentageAmount = 0;


enterBtn.addEventListener('click', function () {
    if(checkIfAmountIsValid(parseInt(budgetInput.value))){
        budgetInput.classList.remove("is-danger");
        monthlyBudget = budgetInput.value;
        monthlyBudgetHeader.textContent = `Budget: $${monthlyBudget}`
        budgetInput.setAttribute("disabled", "");
        enterBtn.setAttribute("disabled", "");
        expenseContainer.removeAttribute('hidden');
        totalExpensesHeader.removeAttribute('hidden');
        totalExpensesVal.removeAttribute('hidden');
        totalExpensesVal.textContent = `Total Expenses: $${totalExpenses}`;
        remainingTotal = monthlyBudget - totalExpenses;
        remainingVal.textContent = `$${remainingTotal} remaining this month`
        expenseInput.removeAttribute("disabled");
        expenseTypeInput.removeAttribute("disabled");
        expenseEnterBtn.removeAttribute("disabled");
    }
    else {
       budgetInput.classList.add("is-danger");
    }
})

resetBtn.addEventListener('click', function () {
    budgetInput.value = "";
    budgetInput.removeAttribute("disabled");
    enterBtn.removeAttribute("disabled");
    remainingVal.textContent = "";
    expenseInput.setAttribute("disabled", "");
    expenseTypeInput.setAttribute("disabled", "");
    expenseEnterBtn.setAttribute("disabled", "");
    totalExpenses = 0;
    remainingTotal = "--";
    monthlyBudget = 0;
    expenseTypeInput.value = "";
    expenseTypeInput.value = "";
    totalExpensesVal.textContent = `Total Expenses: $${totalExpenses}`;
    monthlyBudgetHeader.textContent = `Budget: $${monthlyBudget}`
    remainingVal.textContent = `$${remainingTotal} remaining this month`
    percentageVisual.setAttribute("value", "0");
    expenseInput.classList.remove("is-danger");
    deleteExpenseItems();

})

expenseEnterBtn.addEventListener('click', function () {
    const expenseItem = document.createElement('li');
    if(checkIfAmountIsValid(parseInt(expenseInput.value))){
        expenseInput.classList.remove("is-danger");
        expenseItem.textContent = `${expenseTypeInput.value} - $${expenseInput.value}`;
        expenseItem.classList.add('expenseItemEl');
        expenseList.append(expenseItem);
        totalExpenses = totalExpenses + parseInt(expenseInput.value);
        expenseInput.value = "";
        expenseTypeInput.value = "";
        console.log(totalExpenses);
        totalExpensesVal.textContent = `Total Expenses: $${totalExpenses}`;
        remainingTotal = monthlyBudget - totalExpenses;
        remainingVal.textContent = `$${remainingTotal} remaining this month`;
        percentageAmount = `${totalExpenses/monthlyBudget * 100}`;
        console.log("hello");
        percentageVisual.setAttribute("value", percentageAmount);
        if (totalExpenses > monthlyBudget) {
            console.log("you're overboard boy!");
        }
    }
    else {
        expenseInput.classList.add("is-danger");
    }
})

function deleteExpenseItems(){
    let expenseItemEls = document.querySelectorAll('.expenseItemEl')
    for(let expenseItemEl of expenseItemEls){
        expenseItemEl.remove();
    }
}

function checkIfAmountIsValid(amount){
    if(isNaN(amount)){
        return false;
    }
    else {
        return true;
    }
}