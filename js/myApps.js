var slider = document.getElementsByClassName("slider")[0];
var pvCount = document.getElementsByClassName("pageview-count")[0];
var price = document.getElementsByClassName("p-value")[0];
var progress = document.getElementsByClassName("slider-progress")[0];
var toggle = document.getElementsByClassName("toggle-slide")[0];
var isToggle = document.getElementsByClassName("toggle-cb")[0];
var billing = 0;

toggle.addEventListener("click", function () {
  if (isToggle.checked) {
    isToggle.checked = false;
    billing = 0;
    pricing(slider.value, billing);
  } else {
    isToggle.checked = true;
    billing = 0.25;
    pricing(slider.value, billing);
  }
});

slider.oninput = function () {
  pricing(this.value, billing);
  progress.style.width = this.value * 25 + "%";
};

function pricing(value, discount) {
  if (value == 0) {
    pvCount.innerHTML = "10K";
    price.innerHTML = 8 - 8 * discount;
  } else if (value == 1) {
    pvCount.innerHTML = "50K";
    price.innerHTML = 12 - 12 * discount;
  } else if (value == 2) {
    pvCount.innerHTML = "100K";
    price.innerHTML = 16 - 16 * discount;
  } else if (value == 3) {
    pvCount.innerHTML = "500K";
    price.innerHTML = 24 - 24 * discount;
  } else if (value == 4) {
    pvCount.innerHTML = "1M";
    price.innerHTML = 32 - 32 * discount;
  }
}
