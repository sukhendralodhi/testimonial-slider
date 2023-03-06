// buttons
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const container = document.querySelectorAll(".slide");

let index = 0;

const display = (index) => {
  container.forEach((slide) => {
    console.log(slide);
    slide.style.display = "none";
  });
  container[index].style.display = "flex";
}



const nextSlide = () => {
  index++;
  if(index > container.length-1) {
    index=0;
  }
  console.log(index);
  display(index);
}

const prevSlide = () => {
  index--;
  if(index < 0) {
    index = container.length-1;
  }
  console.log(index);
  display(index);
}

display(index);
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

