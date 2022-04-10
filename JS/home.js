const nav_menu = document.querySelector(".nav_menu");
const nav_hidden = document.querySelector(".containers_click");
nav_hidden.onclick = () => {
  if (nav_hidden.classList.contains("change")) {
    nav_hidden.classList.remove("change");
    nav_menu.classList.remove("active");
    document.body.style.overflow = "visible";
  } else {
    nav_hidden.classList.add("change");

    document.body.style.overflow = "hidden";
    nav_menu.classList.add("active");
  }
};
setInterval(() => {
  if (window.screen.width > 855) {
    nav_hidden.classList.remove("change");
    nav_menu.classList.remove("active");
    document.body.style.overflow = "visible";
  }
}, 0);

//slider



function slider(slide,left,right){
  let counter = 0;
  console.log(slide);
 const slides = slide.splice(0, 6);
 console.log(slides)
  console.log(slides.length)
if (counter == 0) {
  left.style.display = "none";
} else {
  left.style.display = "block";
}
right.onclick = () => {
  if (counter >0) {
      left.style.display = "block";
  
  } else  {
    left.style.display = "none";
  }
  counter++;
  for (let i = 0; i < slides.length; i++) {
    if (counter>=3) {
      right.style.display = "none";
        
    } else {
      right.style.display = "block";
       left.style.display = "block";
    }

    slides[i].style.left = -(385 * counter) + "px";
  }
};

left.onclick = () => {
  counter--;
  if (counter == 0) {
    left.style.display = "none";
  } else {
    left.style.display = "block";
  }
  for (let i = 0; i < slides.length; i++) {
    if (counter === 0) {
      right.style.display = "block";

      left.style.display = "none";
}
    else{
        right.style.display = "block";
    }
  slides[i].style.left = -(385 * counter) + "px";
  }
};
}
let slide = document.querySelectorAll(".slide")
let right = document.querySelectorAll(".right-btn");
let left = document.querySelectorAll(".left-btn");
const arrays=[...slide]
const two_sliders = document.querySelectorAll(".two_sliders");
console.log(left[0])
slider(arrays, left[0], right[0]);
slider(arrays, left[1], right[1]);
slider(arrays, left[2], right[2]);
slider(arrays, left[3], right[3]);