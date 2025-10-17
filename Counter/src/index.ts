const counter = document.getElementById("counter");
let incrementbtn = document.getElementById("increment");
let decrementbtn = document.getElementById("decrement");
let reset = document.getElementById("reset");

console.log("Script loaded");
let count = 0;
function updateCounter() {
  if (counter) {
    counter.textContent = count.toString();
  }
}

incrementbtn?.addEventListener("click", () => {
  count++;
  updateCounter();
});
decrementbtn?.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCounter();
  }
});
reset?.addEventListener("click", () => {
  count = 0;
  updateCounter();
});
