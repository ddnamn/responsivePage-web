var time = new Date();
document.getElementById("datetime").innerHTML = time.toLocaleString();

const x = document.querySelector(".burger input");
const header = document.querySelector("header ul");

x.addEventListener("click", () => {
  header.classList.toggle("move");
  console.log("klick");
});
