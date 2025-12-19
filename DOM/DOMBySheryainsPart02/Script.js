// DOM
// for change innerText;
let h1 = document.querySelector("h1");
h1.innerHTML = "Hello"; //work   o/p = <h1>Hello</h1>
h1.innerText = "Hello"; //work  o/p = <h1>Hello</h1>
h1.textContent = "Hello"; //work o/p = <h1>Hello</h1>
console.log(h1);

// attribute manipulation
let a = document.querySelector("a");
a.href = "https://www.google.com";
a.setAttribute("href", "https://www.google.com");

let img = document.querySelector("img");
img.setAttribute("src", "https://www.bing.com/ck/a?!&&p=dac08e77b477160eec04f8e0ae8785b82490a790a36832de6a4047dffc4b365fJmltdHM9MTc2NTkyOTYwMA&ptn=3&ver=2&hsh=4&fclid=01660a8a-2b5f-6b9a-384f-1c9d2aa76a89&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZSZpZD03MTYwOENDMzM2MkRDMjIwMjlDQzYwMTNEQjVGMTlBMjlDQTY2MkY4JkZPUk09SVFGUkJB");

let h2 = document.querySelector("h2");
h2.getAnimations("href");
h2.removeAttribute("href");

// Dynamic DOM manipulation
let h1 = document.createElement("h1"); //create a element
h1.textContent = "Hello"; //add text to the element
document.body.append(h1); //append or prepend the element in body

// style update via .style and classList(add, remove, toggle)
let h1 = document.querySelector("h1");
h1.style.color = "blue"; //via .style method
h1.classList.add("class1"); //via classList method
h1.classList.remove("class1");

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    btn.style.backgroundColor = "red";
})

// Event and Event Handler
let btn1 = document.querySelector("button");
btn1.addEventListener("click", () => {
    alert("Button clicked");
})


// Select all <li> elements and print their text using a loop
let lis = document.querySelectorAll("li");
for(let i=0;i<lis.length;i++){
    console.log(lis[i].textContent);
}

// When should i use textContent and  innerHTML?
// textContent is modarn and faster for plain text updates.
