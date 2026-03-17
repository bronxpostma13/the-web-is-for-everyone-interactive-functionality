//  Select de bloemen 
var button = document.querySelectorAll(".heart");
// Voor elke button in het bestand met de class heart
button.forEach(function(button){
// Event toegevoegd en toggle
button.addEventListener("click", function() {
  button.classList.toggle("yay");
});
})