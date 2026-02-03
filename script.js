var key = "";


// SAVE
document.querySelector(".save").onclick = function() {
localStorage.setItem( key, value )
	const save = localStorage.getItem(key, value);

    console.log( save )
};

// LOAD
document.querySelector(".update").onclick = function() {
    const load = localStorage.getItem(key);
    console.log( load )

    localStorage.setItem(key, load);
};

// DELETE
document.querySelector(".delete").onclick = function() {
    localStorage.removeItem( key )
    localStorage.clear()

    console.log( ".delete" )
};
