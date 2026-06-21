
// selecting DOm element 

import { getData } from "./api.js";
import { renderCategories, renderProducts, renderStats } from "./render.js";

const productsContainer = document.getElementById("productsContainer");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const statsContainer = document.getElementById("statsContainer");
const loading = document.getElementById("loading");
const retryBtn = document.getElementById("retryBtn");
const error = document.getElementById("error");
const empty = document.getElementById("empty");
const stats = document.getElementById("stats");
const modal = document.getElementById("productModal");
const detail = - document.getElementById("productDetail");
const closeBtn = document.getElementById("closeModal");


let products = [];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


async function loadProducts() {

    try {

        loading.classList.remove(
            "hidden"
        );

        const data =
            await getData();

        products =
            data.products;

        renderProducts(
            products,
            productsContainer,
            favorites
        );

        renderCategories(
            data.categories,
            categoryFilter
        );

        renderStats(
            products,
            stats
        );

    } catch (err) {

        console.error(err);

        error.classList.remove(
            "hidden"
        );

    } finally {

        loading.classList.add(
            "hidden"
        );
    }
}

function filterProducts() {

    const search =
        searchInput.value
            .toLowerCase();

    const category =
        categoryFilter.value;

    const filtered =
        products.filter(
            product =>
                product.title
                    .toLowerCase()
                    .includes(search)
        )
            .filter(
                product =>
                    !category ||
                    product.category === category
            );

    renderProducts(
        filtered,
        productsContainer,
        favorites
    );

    empty.classList.toggle(
        "hidden",
        filtered.length > 0
    );
}


loadProducts(); 