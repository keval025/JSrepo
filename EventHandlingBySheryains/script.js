// common eventlistner click, dblclick, mouseover, mouseout, 
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    btn.style.backgroundColor = "red";
})

let p = document.querySelector("p");
p.addEventListener("dblclick", function(){
    p.style.fontFamily = "Arial";
})

// project 1 : Button Click Counter
let btn1 = document.querySelector("#btn1");
let count = 0;
btn1.addEventListener("click" , () => {
    cnt++;
    btn1.innerHTML = cnt;
});

// project 2 : live charcter counter
let text = qocument.querySelector("#text");
let countchr = qocument.querySelector("#countchar");

text.addEventListener("input", () => {
    count.innerHTML = text.value.length;
})

let cnt = 0;
text.addEventListener("input", (e) => {
    if(e.data != null){
        console.log(e.data);
        cnt++;
    }
})
console.log(cnt);

// project 4 : add toggle btn to toggle theme
let btntgl = document.querySelector("#btntgl");
let isDark = false;

btntgl.addEventListener("click", () => {
    if(!isDark){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        isDark = true;
    }else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        isDark = false;
    }
})

// project 5 : get selected value from dropdown
let sel = document.querySelector("#sel");
let device = document.querySelector("#device");

sel.addEventListener("chang", (e) => {
    device.textContent = "Device Slected: " + e.target.value;
})

// project 6 : show mouse coordinates
document.addEventListener("mousemove", (e) => {
    document.getElementById("x").textContent = e.clientX;
    document.getElementById("y").textContent = e.clientY;
})

// Advanced mini projects
// project 1 : dynamic todo app
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

document.getElementById("addBtn").addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerText = input.value;
  list.appendChild(li);
  input.value = "";
});

/* Event Delegation */
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});