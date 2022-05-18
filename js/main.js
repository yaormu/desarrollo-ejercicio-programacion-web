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
