export function renderProducts(
    products,
    container,
    favorites
) {

    container.innerHTML =
        products.map(product => `
      <article
        class="card"
        data-id="${product.id}"
      >

        <img
          src="${product.image}"
          alt="${product.title}"
        >

        <div class="card-content">

          <h3>${product.title}</h3>

          <p>
            ${product.description.slice(0, 80)}...
          </p>

          <p class="price">
            $${product.price}
          </p>

          <p>
            ⭐ ${product.rating}
          </p>

          <button
            class="favorite-btn"
            data-favorite="${product.id}"
          >
            ${favorites.includes(product.id)
                ? "★ Favorited"
                : "☆ Favorite"
            }
          </button>

        </div>

      </article>
    `).join("");
}

export function renderCategories(
    categories,
    select
) {

    select.innerHTML =
        `
      <option value="">
        All Categories
      </option>
    ` +
        categories.map(
            category => `
        <option value="${category.slug}">
          ${category.name}
        </option>
      `
        ).join("");
}

export function renderProductDetail(
    product,
    container
) {

    container.innerHTML = `
    <img
      class="detail-image"
      src="${product.thumbnail}"
      alt="${product.title}"
    >

    <h2>${product.title}</h2>

    <p>${product.description}</p>

    <p>
      <strong>Price:</strong>
      $${product.price}
    </p>

    <p>
      <strong>Rating:</strong>
      ${product.rating}
    </p>

    <p>
      <strong>Brand:</strong>
      ${product.brand}
    </p>

    <p>
      <strong>Category:</strong>
      ${product.category}
    </p>
  `;
}

export function renderStats(
    products,
    container
) {

    const averagePrice =
        (
            products.reduce(
                (sum, p) => sum + p.price,
                0
            ) / products.length
        ).toFixed(2);

    const expensive =
        products.reduce(
            (max, p) =>
                p.price > max.price
                    ? p
                    : max
        );

    container.innerHTML = `
    <div class="stat-card">
      Products:
      ${products.length}
    </div>

    <div class="stat-card">
      Avg Price:
      $${averagePrice}
    </div>

    <div class="stat-card">
      Most Expensive:
      ${expensive.title}
    </div>
  `;
}