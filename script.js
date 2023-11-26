// Variables
// Input 
var inputFirstName = document.getElementById("inputFirstName")
var inputLastName = document.getElementById("inputLastName")
var inputAge = document.getElementById("inputAge")
// Buttons
var addBtn = document.getElementById("addBtn")
var removeFirstBtn = document.getElementById("removeFirstBtn")
var removeLastBtn = document.getElementById("removeLastBtn")
// Table
var table = document.getElementById("appendTable")


// Functions
function addContent(){
    if(inputFirstName.value == "" || inputLastName.value == "" || inputAge.value == "" || inputAge.value <= 0){
        alert("Prašome įvesti duomenis")
    } else {
        var row = table.insertRow(-1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)

        cell1.innerHTML = inputFirstName.value
        cell2.innerHTML = inputLastName.value
        cell3.innerHTML = inputAge.value
    }
    // Resets input values
        inputFirstName.value = ""
        inputLastName.value = ""
        inputAge.value = ""
}

function removeFirst() {
    var rowCount = table.rows.length
    if (rowCount > 1){
        table.deleteRow(1)
    } else {
        alert("Nėra ką trinti")
    }
}

function removeLast() {
    var rowCount = table.rows.length
    if (rowCount > 1) {
        table.deleteRow(-1)
    } else {
        alert("Nėra ką trinti")
    }
}
