// Services List Section
let imgArray = [
    "img/service/Game_Development_b040715d49.webp",
    "img/service/Ar_Vr_6457bd100c.webp",
    "img/service/Apple_Vision_Pro_502b8b4e92.webp",
    "img/service/Metaverse_265d03b695.webp",
    "img/service/artanimation_29cd606519.webp",
    "img/service/Appstore_4f8e4d5625.webp",
  ];
  
  // Get all elements with class "name"
  let names = document.querySelectorAll(".service-name");
  let box = document.querySelectorAll(".service-text-box");
  let profile = document.getElementById("service-profile");
  
  // Function to update background for smaller screens
  function updateResponsiveBackground() {
    let isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
  
    if (isMobile) {
      // Hide the profile container
      profile.style.display = "none";
  
      // Set background image directly on service names
      names.forEach((name)=>{
          name.classList.add("active");
      })

      box.forEach((b, index) => {
        b.style.backgroundImage = `url(${imgArray[index]})`;
      });
    } else {
      // Show the profile container
      profile.style.display = "block";
  
      // Remove background images from service names
      names.forEach((n) => {
        n.style.backgroundImage = "none";
      });
    }
  }
  
  // Attach mouseover and click events
  names.forEach((n) => {
    n.addEventListener("mouseover", () => {
      if (window.innerWidth > 768) { // Only activate on larger screens
        names.forEach((e) => {
          e.classList.remove("active");
        });
        let value = n.getAttribute("data-value") - 1;
        n.classList.add("active");
        profile.style.backgroundImage = `url(${imgArray[value]})`;
      }
    });
  
    n.addEventListener("click", () => {
      const url = `html/${n.id}.html`;
      if (url) {
        window.open(url, "_blank"); // Opens in a new tab
      }
    });
  });
  
  // Initial setup
  updateResponsiveBackground();
  
  // Update on window resize
  window.addEventListener("resize", updateResponsiveBackground);
  
  


let vrLink = document.getElementById('containerVr')
vrLink.addEventListener('click', ()=>{
  window.location.href = "html/buy-vr.html"
  
})