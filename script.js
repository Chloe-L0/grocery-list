let shoppingListContainer = document.getElementById("shopping-list");
let listItem = document.querySelectorAll(".list-item");
let itemName = document.querySelectorAll("item-name");
let itemQuantity = document.querySelectorAll("item-quantity");
let itemCategory = document.querySelectorAll("item-category");

let itemQuantityInput = document.getElementById("quantityInput");
let itemNameInput = document.getElementById("nameInput");
let itemCategoryInput = document.getElementById("categoryInput");
let itemSubmitBtn = document.getElementById("itemSubmit");

const itemCategoryArr = [
  "Produce 🥦",
  "Meat & Fish 🍗",
  "Bakery 🍞",
  "Pantry 🥫",
  "Confectionary 🍭",
  "Diary 🧀",
  "Frozen ❄",
  "Household 🧹",
  "Misc ❔",
];

//populate grocery categories

itemCategoryArr.forEach((i) => {
  itemCategoryInput.innerHTML += `<option> ${i}</option>`;
});

//handle submit

itemSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault;

  //clear input information
  itemQuantityInput.innerHTML = "";
  itemNameInput.innerHTML = "";
  itemCategory.innerHTML = "";

  // get inputted values
});

// store list items;



const submitListItem = function () {};
