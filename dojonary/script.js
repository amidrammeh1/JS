function likeAlert(e){
  alert("Ninja was liked!");
}

function logOut(element){
if(element.innerText == "Login"){
  element.innerText == "Logout"
} else {
  element.innerText = "Login"
}
}

function removeDefinition(e){
e.remove();
}
