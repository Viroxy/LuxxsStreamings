// Récupérer les éléments du formulaire de connexion
const loginForm = document.querySelector("#login form");
const loginEmail = document.querySelector("#login #email");
const loginPassword = document.querySelector("#login #password");

// Écouter l'événement de soumission du formulaire de connexion
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Vérifier les informations de connexion
  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  if (loginEmail.value === savedEmail && loginPassword.value === savedPassword) {
    alert("Connexion réussie !");
    // Effectuer des actions supplémentaires après la connexion
  } else {
    alert("Identifiants incorrects. Veuillez réessayer !");
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
  
  alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
});
