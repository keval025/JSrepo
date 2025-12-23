let mainEle = document.querySelector(".main");

mainEle.addEventListener("mouseenter", () => {
    mainEle.style.background = "green";
})

mainEle.addEventListener("mouseleave", () => {
    mainEle.style.background = "red";
})