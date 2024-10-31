let ul = document.getElementById("ul");
let promptbutton = document.getElementById("promptbutton");
promptbutton.addEventListener("click", () => {
  let info = prompt("შეიყვანეთ ინფორმაცია");
  if (info.length === 0) {
    alert("ინფორმაცია არ არის მოცემული");
  } else {
    let li = document.createElement("li");
    li.textContent = info;
    ul.appendChild(li);
    let washla = document.createElement("button");
    washla.textContent = "click to delete";
    ul.appendChild(washla);
    washla.addEventListener("click", () => {
      ul.removeChild(washla);
      ul.removeChild(li);
    });
  }
});
