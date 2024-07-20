let counter = 0.1;
let intervalId;

function rotateFunction() {
  intervalId = setInterval(() => {
    counter += 0.00001;
    document.querySelector(".counter").innerHTML = counter.toFixed(1);
  }, 100);
  setTimeout(() => {
    clearInterval(intervalId);
  }, 10000000); // stop after 10 seconds
}
