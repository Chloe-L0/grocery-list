let shoppingListContainer = document.getElementById("shopping-list");
let listItem = document.querySelectorAll(".list-item");
let itemName = document.querySelectorAll("item-name");
let itemQuantity = document.querySelectorAll("item-quantity");
let itemCategory = document.querySelectorAll("item-category");
let toast = document.querySelector(".toast");

let itemQuantityInput = document.getElementById("quantityInput");
let itemNameInput = document.getElementById("nameInput");
let itemCategoryInput = document.getElementById("categoryInput");
let itemSubmitBtn = document.getElementById("itemSubmit");

const itemCategoryArr = [
  "Misc ❔",
  "Produce 🥦",
  "Meat & Fish 🍗",
  "Bakery 🍞",
  "Pantry 🥫",
  "Confectionary 🍭",
  "Diary 🧀",
  "Frozen ❄",
  "Household 🧹",
];

const groceryItemsArr = [
  `        <li class="list-item">
          <span class="item-quantity">2</span>
          <p class="item-name">Cupcakes</p>
          <span class="item-category">Confectionary 🍭</span>
          <span class="delete-item">&#10006;</span>
        </li>`,
];

//populate grocery list
const populateGroceryListHTML = () => {
  shoppingListContainer.innerHTML +=
    groceryItemsArr[groceryItemsArr.length - 1];
};

// populate grocery list on page load
populateGroceryListHTML();

//populate grocery categories for select element
itemCategoryArr.forEach((i) => {
  itemCategoryInput.innerHTML += `<option>${i}</option>`;
});

//clear input information
const clearForm = () => {
  itemQuantityInput.value = "";
  itemNameInput.value = "";
  itemCategory.selectedIndex = -1;
};

//handle item submit
itemSubmitBtn.addEventListener("click", (e, quantity, itemname, category) => {
  e.preventDefault();

  quantity = itemQuantityInput.value;
  itemname =
    itemNameInput.value.charAt(0).toUpperCase() +
    itemNameInput.value.slice(1).toLowerCase();
  category = itemCategoryInput.value;

  // handle blank submission
  if (
    itemNameInput.value.charAt(0) == " " ||
    itemNameInput.value.charAt(0) == ""
  ) {
    //broken toast!
    // toast.classList.add("toast-reveal");
    // setTimeout(function () {
    //   toast.classList.remove('toast-reveal');
    // }, 3000);
  } else {
    pushListItem(quantity, itemname, category);
    populateGroceryListHTML();

    clearForm();
  }
});

// store list items in array;
const pushListItem = (quantity, itemname, category) => {
  groceryItemsArr.push(
    `<li class="list-item"> 
        <span class="item-quantity">${quantity}</span> 
        <p class="item-name">${itemname}</p> 
        <span class="item-category">${category}</span>
        <span class="delete-item">&#10006;</span>
    </li>`
  );
};

//check off item -event listener on the shopping list container to keep track of newly added list items
shoppingListContainer.addEventListener("click", (li) => {
  if (li.target.classList.contains("list-item") || li.target.parentNo) {
    li.target.classList.toggle("strike-through");
  }
});

