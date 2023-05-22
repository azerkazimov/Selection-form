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

const categories = [
  {
    name: "Category 1",
    subcategories: ["Subcategory 1-1", "Subcategory 1-2", "Subcategory 1-3"],
  },
  {
    name: "Category 2",
    subcategories: ["Subcategory 2-1", "Subcategory 2-2", "Subcategory 2-3"],
  },
  {
    name: "Category 3",
    subcategories: [],
  },
  {
    name: "Category 4",
    subcategories: ["Subcategory 4-1", "Subcategory 4-2"],
  },
  {
    name: "Category 5",
    subcategories: [],
  },
];

categories.forEach((category) => {
  let option = document.createElement("option");
  option.value = category.name;
  option.text = category.name;
  category1.appendChild(option);
});

category1.addEventListener("change", function (e) {
  e.preventDefault();
  let valueSelect = this.value;
  let selectCategory = categories.find(
    (category) => category.name === valueSelect
  );

  if (selectCategory) {
    category2.innerHTML = `<option value="">Select a category </option>`;

    if (selectCategory.subcategories.length > 0) {
      selectCategory.subcategories.forEach((subcategory) => {
        let option = document.createElement("option");
        option.value = subcategory;
        option.text = subcategory;
        category2.appendChild(option);
      });
    } else {
      category2.innerHTML = `<option value="">Have not category</option>`;
    }
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

  let isAdded = Array.from(box.children).some((child) =>
    child.textContent.includes(category1Value)
  );
  let isAddedSub = Array.from(box.children).some((child) =>
    child.textContent.includes(category2Value)
  );

  if (isAdded && isAddedSub) {
    alert("Added");
  } else if (isAddedSub && category2Value === "Have not category") {
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
