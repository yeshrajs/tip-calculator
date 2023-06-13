var bill = document.getElementById("bill-input");
var customer = document.getElementById("customer-number");
var tipBtn = document.getElementsByClassName("tip-btn");

var tipValue;
var tipAmount = document.getElementById("tip-amount");
var totalAmount = document.getElementById("total-amount");
var custom = document.getElementById("custom-Button");

for (let i = 0; i < tipBtn.length; i++) {
    var btn = tipBtn[i];
    btn.addEventListener('click', function () {
        tipValue = this.value;
        tip = (bill.value) * (tipValue) / (100 * (customer.value));
        total = (bill.value) / (customer.value);
        if (bill.value === "") {
            alert("Please enter Bill Amount");
        } else if (customer.value === "") {
            alert("Please enter the number of people");
        } else {
            tipAmount.textContent = "$ " + tip;
            totalAmount.textContent = "$ " + total;
        }

    });
}
custom.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && bill.value === "") {
        alert("Please enter Bill Amount");
    } else if (event.key === 'Enter' && customer.value === "") {
        alert("Please enter the number of people");
    } else if (event.key === 'Enter') {
        tipValue = custom.value;
        tip = (bill.value) * (tipValue) / (100 * (customer.value));
        total = (bill.value) / (customer.value);
        tipAmount.textContent = "$ " + tip;
        totalAmount.textContent = "$ " + total;
    }

})

function reset() {
    bill.value = '';
    customer.value = '';
    custom.value = '';
    tipAmount.textContent = "$ 0.00";
    totalAmount.textContent = "$ 0.00";

}
