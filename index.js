//
//
//
let input = document.getElementById("input");
let submit = document.getElementById("sub");
let result = document.getElementsByClassName("resultContainer");
// let posts = document.getElementById("posts");

// submit.addEventListener("click", function () {
//   //   e.preventDefault(); //prevent default action of the event
//   //   let task = input.value;
//   //   if (!task) {
//   //     alert("add Task");
//   //   } else {
//   //     console.log("success");
//   var para = document.createElement("p");
//   para.innerText = input.value;
//   //append the paragraph to the container
//   result.appendChild(para);
// });

submit.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  //   paragraph.classList.add(lists);
  paragraph.innerText = input.value;
  result.appendChild(paragraph);
});
