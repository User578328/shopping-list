document.addEventListener("DOMContentLoaded", function () {
    const shoppingList = document.getElementById("shopping-list");
    const itemContainer = document.querySelector(".container");
    const btnAdd = document.querySelector(".btn-add");
    const btnDelete = document.querySelectorAll(".btn-delete");
    const btnMarkDone = document.querySelector(".btn-mark-done");
    const btnAddUser = document.querySelector(".btn-add-user");
    const btnArchive = document.querySelector(".btn-archive");
    const btnCreateList = document.querySelector(".btn-create-list");
    const btnClearList = document.querySelector(".btn-clear-list");

    btnAdd.addEventListener("click", function () {
        const item = document.createElement("li");
        const itemName = document.querySelector(".item-name").value;
        const itemQuantity = document.querySelector(".item-quantity").value;
        if (itemName) {
            item.innerHTML = `${itemName} (${itemQuantity} ks) <button class="btn-delete">Odebrat</button>`;
            shoppingList.appendChild(item);
        }
    });

    shoppingList.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-delete")) {
            e.target.parentElement.remove();
        }
    });

    btnMarkDone.addEventListener("click", function () {
        const items = shoppingList.children;
        for (let item of items) {
            item.classList.toggle("done");
        }
    });

    btnAddUser.addEventListener("click", function () {
        alert("Error");
    });

    btnArchive.addEventListener("click", function () {
        alert("Error");
    });

    btnCreateList.addEventListener("click", function () {
        alert("Error");
    });

    btnClearList.addEventListener("click", function () {
        shoppingList.innerHTML = "";
    });
});
