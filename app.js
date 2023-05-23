let count = 0;
const value = document.querySelector("#value");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");

function generateColor(countValue) {
  if (countValue < 0) {
    return "red";
  } else if (countValue > 0) {
    return "green";
  } else {
    return "black";
  }
}

increaseBtn.addEventListener("click", function (e) {
  // console.log("jai cliquer increase btn");
  count++;
  value.textContent = count;
  value.style.color = generateColor(count);
});

decreaseBtn.addEventListener("click", function (e) {
  // console.log("jai cliquer deincrease btn");
  count--;
  value.textContent = count;
  value.style.color = generateColor(count);
});

resetBtn.addEventListener("click", function (e) {
  // console.log("jai cliquer reset btn");
  count = 0;
  value.textContent = count;
  value.style.color = generateColor(count);
});
