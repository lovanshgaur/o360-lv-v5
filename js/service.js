let schoolImgArray = [
  "../img/vr-classroom.jpg",
  "../img/school-tour.jpg",
  "../img/live-show.jpg",
];

let schoolNames = document.querySelectorAll(".school-service-name");
let schoolProfile = document.getElementById("school-service-profile");
let isMobile = window.innerWidth <= 768;

function responsive() {
  if (isMobile) {

      schoolProfile.style.display = "none";

      schoolNames.forEach((e) => {
        let value = e.getAttribute("data-value") - 1;
        e.classList.add("active");
        e.style.backgroundImage = `url(${schoolImgArray[value]})`;
      });
  }
  else {
    schoolProfile.style.display = "block";
    schoolNames.forEach((n) => {
      n.style.backgroundImage = "none";
    });
  }
}

responsive();

  schoolNames.forEach((n) => {
    n.addEventListener("mouseover", () => {
      schoolNames.forEach((e) => {
        e.classList.remove("active");
      });

      let value = n.getAttribute("data-value") - 1;
      console.log(value);

      n.classList.add("active");
      schoolProfile.style.backgroundImage = `url(${schoolImgArray[value]})`;
    });
  });

  
let left = document.getElementById('slide-left')
let right = document.getElementById('slide-right')

function hover(side1, side2) {
    side1.classList.add('slide-on')
    side2.classList.add('slide-off')
}
function hoverOff(side1, side2) {
    side1.classList.remove('slide-on')
    side2.classList.remove('slide-off')
}

left.addEventListener('mouseenter', () => {hover(left, right)})
left.addEventListener('mouseleave', () => { hoverOff(left, right)})

right.addEventListener('mouseenter', () => { hover(right, left) })
right.addEventListener('mouseleave', () => { hoverOff(right, left) })


