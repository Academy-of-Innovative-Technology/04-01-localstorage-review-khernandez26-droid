
var key = "savedName";

const dataInput = document.querySelector(".data-input");
const deleteInput = document.querySelector(".delete-input");



// SAVE
document.querySelector(".save").onclick = function() {

	const value = dataInput.value;

 localStorage.setItem( key, value );

 dataInput.value = "";

    console.log("Saved", value )
};

// LOAD
document.querySelector(".update").onclick = function() {

    const load = localStorage.getItem(key);
    
    dataInput.value = load;

    console.log( "Loaded", load )
};

// DELETE
document.querySelector(".delete").onclick = function() {

   const deleteKey = deleteInput.value;

   localStorage.removeItem(deleteKey);

   console.log("DeletedKey:", deleteKey);
};
