
// Step 1: Create a key name
const key = "SaveData";

// Get elements
const inputBox = document.getElementById("inputBox");
const deleteKeyInput = document.getElementById("deleteKey");

const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const deleteBtn = document.getElementById("deleteBtn");


// ---------------------
// Save Data
// ---------------------
saveBtn.addEventListener("click", function () {

    // a. get value from first input
    let value = inputBox.value;

    // b & c. store value in localStorage using the key
    localStorage.setItem(key, value);

    // d. clear the input
    inputBox.value = "";
});


// ---------------------
// Display Stored Data
// ---------------------
loadBtn.addEventListener("click", function () {

    // a & b. get item using the key
    let storedData = localStorage.getItem(key);

    // c & d. display the stored value in the input box
    inputBox.value = storedData;
});


// ---------------------
// Delete Data
// ---------------------
deleteBtn.addEventListener("click", function () {

    // get key name from delete input
    let deleteKey = deleteKeyInput.value;

    // remove item from localStorage
    localStorage.removeItem(deleteKey);
});