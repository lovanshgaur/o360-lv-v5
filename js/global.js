let navBtn = document.getElementById("nav-icon");
let sidebar = document.getElementById("sidebar");

navBtn.addEventListener("click", () => {
  sidebar.classList.toggle("closed-nav");
  navBtn.classList.toggle("close-icon");
});

let projects = document.querySelectorAll(".project")

var rotate = 0;
var diff = 0;

projects.forEach(function(elem) {
    elem.addEventListener('mousemove', (dets) => {

       
        let rect = elem.getBoundingClientRect()
        let y = dets.clientY - rect.top

        diff = dets.clientX - rotate;
        rotate = dets.clientX;
        


        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: y,
            left: dets.clientX,
            rotate:gsap.utils.clamp(-20, 20, diff * 0.5)

        })
    })

    elem.addEventListener('mouseleave',()=>{
       gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease: Power3,
       }) 
    })
})
const projectsUrl = [
    "https://vkrm100ran.github.io/Vector-Tour/",
    "html/cdis.html",
    "html/wedding.html",
]
projects.forEach((p, index)=>{
    p.addEventListener("click", ()=>{
        window.open(projectsUrl[index], "_blank");
    })
})
