var day = new Date();
var time = day.getHours();
if (time < 12) {
  document.write("Good morning, dear MEC member!");
} else if (time < 15) {
  document.write("Good afternoon!");
} else if (time == 16) {
  alert("pack up, it's time to close for the day!");
} else {
  document.write("Have a good night rest!");
}




const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");
const warning = document.getElementById("warning");
warning.style.visibility = "hidden";

 

  addToDoButton.addEventListener("click", function () {
    if (inputField.value === "") {
      warning.style.visibility = "visible";
    } else {
      warning.style.visibility = "hidden";

      var paragraph = document.createElement("li");
      paragraph.style.backgroundColor = "#eeeeee";
      paragraph.style.padding = "10px";
      paragraph.style.borderRadius = "8px";
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

  inputField.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
      if (inputField.value === "") {
        warning.style.visibility = "visible";
      } else {
        warning.style.visibility = "hidden";
      var paragraph = document.createElement("li");
      paragraph.style.backgroundColor = "#eeeeee";
      paragraph.style.padding = "10px";
      paragraph.style.borderRadius = "8px";
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
  }});

