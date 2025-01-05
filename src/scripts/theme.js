document.addEventListener("DOMContentLoaded", () => {
    const buttonChangeTheme = document.querySelector(".icon")
    const iconeImg = document.getElementById("buttonNightImg")

    
    const isDarkMode = localStorage.getItem("dark-mode")

    if (isDarkMode === "true"){
        document.body.classList.add("dark-mode")
        iconeImg.src = "../src/assets/icons/sun.svg"
    }

    buttonChangeTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")){
            iconeImg.src = "../src/assets/icons/sun.svg"; 
        } else {
            iconeImg.src = "../src/assets/icons/moon.svg"; 
        }

        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });
});
