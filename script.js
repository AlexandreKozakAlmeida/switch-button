const btn = document.querySelector('#toggleBtn');
const text = document.querySelector('.situation');
const body = document.querySelector("body");

btn.addEventListener('click' , move);

function move() {
  btn.classList.toggle("active");
  if(btn.classList.contains("active")) {
    text.innerHTML = "ON";
    text.style.color = "white";

    btn.style.backgroundColor="purple";

    body.style.background = "black";
   
} else {
    text.innerHTML = "OFF";
    text.style.color = "black";

    btn.style.backgroundColor="gray";

    body.style.background = "initial";
 }
};


