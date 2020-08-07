const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const container = document.getElementById("container");

signUp.addEventListener("click", () => {
  container.classList.add("display-sign-up");
});
signIn.addEventListener("click", () => {
  container.classList.remove("display-sign-up");
});
