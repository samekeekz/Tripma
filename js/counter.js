



let adultsCount = 1;
let minorsCount = 0;

function toggleContainer() {
  var wrapper = document.getElementById("myWrapper");
  wrapper.classList.toggle("show");
}

document.addEventListener("click", function(event) {
  var container = document.getElementById("myWrapper");
  var inputWrapper = document.querySelector(".guests");

  if (!container.contains(event.target) && !inputWrapper.contains(event.target)) {
    container.classList.remove("show");
  }
});


const decrementBtn = document.querySelectorAll('.decrement');
const incrementBtn = document.querySelectorAll('.increment');
// input.style.color = 'rgba(124, 141, 176, 1)';
// input.style.fontSize = '16px';
// input.style.fontWeight = '400';


decrementBtn.forEach( function (item) {
  item.addEventListener('click', function(event){
    event.preventDefault();
    if (item.parentElement.previousElementSibling.textContent == 'Adults:'){
      adultsCount--;
      if(adultsCount < 1){
        adultsCount = 1;
      }
      item.nextElementSibling.textContent = adultsCount;
    }

    else if(item.parentElement.previousElementSibling.textContent == 'Minors:'){
      minorsCount--;
      if(minorsCount <= 0){
        minorsCount = 0;
      }
      item.nextElementSibling.textContent = minorsCount;
    }

    if(minorsCount == 0){
      input.value = adultsCount + " Adults";
    }
    else{
      input.value = adultsCount + " Adults, " + minorsCount + " Minors";

    }

  })
});




incrementBtn.forEach( function (item) {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    if(item.parentElement.previousElementSibling.textContent == 'Adults:'){
      adultsCount++;
      item.previousElementSibling.textContent = adultsCount;
    }

    else if(item.parentElement.previousElementSibling.textContent == 'Minors:'){
      minorsCount++;
      item.previousElementSibling.textContent = minorsCount;
    }
    if(minorsCount == 0){
      input.value = adultsCount + " Adults";
    }
    else{
      input.value = adultsCount + " Adults, " + minorsCount + " Minors";

    }
  })
})


