




const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");
const warning = document.getElementById("warning");
warning.style.visibility = "hidden";

addToDoButton.addEventListener("click", function () {
  if (inputField === " ") {
    warning.style.visibility = "visible";
  } else {
    warning.style.visibility = "hidden";
  }
  var paragraph = document.createElement("li");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});

inputField.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    var paragraph = document.createElement("li");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener("click", function () {
      paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener("dblclick", function () {
      toDoContainer.removeChild(paragraph);
    });
  }
});

