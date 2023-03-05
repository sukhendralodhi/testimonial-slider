// buttons
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const container = document.querySelectorAll(".slide");

let index = 0;

nextBtn.addEventListener("click", () => {
  console.log(container[0]);
  container[index].classList.add("display");
  index++;
  if (index === 3) {
    index = 0;
  }
});
