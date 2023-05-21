// JavaScript code to handle category selection and add data
// document.getElementById("addButton").addEventListener("click", function () {
//   var categoryForm = document.getElementById("categoryForm");
//   var category1 = categoryForm.elements["category1"].value;
//   var category2 = categoryForm.elements["category2"].value;

//   if (category1 && category2) {
//     var dataList = document.getElementById("dataList");
//     var listItem = document.createElement("li");
//     listItem.textContent =
//       "Category: " + category1 + " | Subcategory: " + category2;
//     dataList.appendChild(listItem);
//   }
// });

// ===========
// MY SOLUTION
// ===========

let form = document.getElementById("categoryForm");
let category1 = document.getElementById("category1");
let category2 = document.getElementById("category2");
let button = document.querySelector("#addButton");

let data = ["Subcategory B.A", "Subcategory B.B", "Subcategory B.C"];

category1.addEventListener("change", function (e) {
  e.preventDefault();
  let valueSelect = this.value;
  if (valueSelect === "B") {
    category2.innerHTML = '<option value="">Select a category</option>';
    for (let i in data) {
      category2.innerHTML += `<option value="${i}">${data[i]}</option>`;
    }
  } else {
    category2.innerHTML = '<option value="">Have not category</option>';
  }
});

button.addEventListener("click", function (e) {
  e.preventDefault();
  let box = document.querySelector(".box");
  let content = document.createElement("div");
  content.className = "badge bg-primary text-wrap p-3 m-2";
  let close = document.createElement("button");
  close.className = "btn-close m-2";
  close.type = "button";

  let category1Value = category1.options[category1.selectedIndex].text;
  let category2Value = category2.options[category2.selectedIndex].text;

  if (category2Value === "Have not category") {
    content.textContent = `${category1Value}`;
    box.appendChild(content);
    content.appendChild(close);
  } else if (category2Value === "Select a category") {
    alert("Select a category");
  } else if (category1Value && category2Value) {
    content.textContent = `${category1Value} & ${category2Value}`;
    box.appendChild(content);
    content.appendChild(close);
  }

  close.addEventListener("click", function (e) {
    e.preventDefault();
    box.removeChild(content);
  });
});
