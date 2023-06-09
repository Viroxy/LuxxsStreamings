// Récupérer les éléments du formulaire de connexion
const loginForm = document.querySelector("#login form");
const loginEmail = document.querySelector("#login #email");
const loginPassword = document.querySelector("#login #password");

// Écouter l'événement de soumission du formulaire de connexion
loginForm.addEventListener("submit", function(e) {
  e.preventDefault()});

// Événement de soumission du formulaire de connexion
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Récupérer les informations de connexion
  var email = loginEmail.value;
  var password = loginPassword.value;

  // Vérifier les informations de connexion
  if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {
    alert("Connexion réussie !");
    // Rediriger vers la page de connexion réussie ou effectuer d'autres actions
    window.location.href = "home.html";
  } else {
    alert("Identifiant incorrect !");
  }
});

// Récupérer les éléments du formulaire d'inscription
const signupForm = document.querySelector("#signup form");
const signupUsername = document.querySelector("#signup #username");
const signupEmail = document.querySelector("#signup #newEmail");
const signupPassword = document.querySelector("#signup #newPassword");

// Écouter l'événement de soumission du formulaire d'inscription
signupForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Enregistrer les informations d'inscription
  localStorage.setItem("email", signupEmail.value);
  localStorage.setItem("password", signupPassword.value);
  
  alert ("Inscription réussie ! Vous pouvez maintenant vous connecter.");
});
