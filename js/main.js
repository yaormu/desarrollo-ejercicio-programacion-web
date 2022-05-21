let color = document.getElementById("wrapper");

const color1 = () => {
    color.style.backgroundColor = "#191c32";
    localStorage.setItem("colorete", "#191c32");
}

const color2 = () => {
    color.style.backgroundColor = "#79334a";
    localStorage.setItem("colorete", "#79334a");
}

const color3 = () => {
    color.style.backgroundColor = "#30323f";
    localStorage.setItem("colorete", "#30323f");
}

(() => {
    const colorin =  localStorage.getItem("colorete");
    if(colorin === null) {
       color1(); 
    }else {
        color.style.backgroundColor = colorin;
    }
})();  

// Acordeon
let acordeon = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}