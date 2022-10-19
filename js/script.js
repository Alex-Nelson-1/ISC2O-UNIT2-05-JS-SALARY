/* Created by: Alex.Nelson
 * Created on: Oct 2022
 * This file contains the JavaScript for index.html
 */
/* FUnction */
function calculatePay() {
  /* Input */
  const hoursWorked = parseInt(document.getElementById("hoursWorked").value)
  const wage = parseInt(document.getElementById("hourlyRate").value)
  const TAX_RATE = 0.18
  const pay = hoursWorked * wage * (1 - TAX_RATE)
  const taxes = hoursWorked * wage * TAX_RATE
  /* Output */
  document.getElementById("pay").innerHTML = `Your pay will be: $ ${pay.toFixed(
    2
  )}`
  document.getElementById("governmentPortion").innerHTML =
    "The government will take: $" + taxes.toFixed(2)
}
