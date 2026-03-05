// Dark Mode Toggle

let button = document.getElementById("modeToggle");

button.onclick = function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
button.textContent="☀️";
}
else{
button.textContent="🌙";
}

};

// Search Fish

let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase();

let cards = document.querySelectorAll(".fish-card");

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.includes(filter)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});