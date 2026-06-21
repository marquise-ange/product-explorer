const BASE_URL =
    "https://dummyjson.com";

export async function getProducts() {

    const response =
        await fetch(
            `${BASE_URL}/products?limit=500`
        );

    if (!response.ok) {
        throw new Error("Fetch failed");
    }

    const data =
        await response.json();

    return data.products.map(
        ({
            id,
            title,
            description,
            price,
            thumbnail,
            category,
            rating
        }) => ({
            id,
            title,
            description,
            price,
            image: thumbnail,
            category,
            rating
        })
    );
}

export async function getCategories() {

    const response =
        await fetch(
            `${BASE_URL}/products/categories`
        );

    if (!response.ok) {
        throw new Error("Category fetch failed");
    }

    return response.json();
}

export async function getProduct(id) {

    const response =
        await fetch(
            `${BASE_URL}/products/${id}`
        );

    if (!response.ok) {
        throw new Error("Product fetch failed");
    }

    return response.json();
}

export async function getData() {

    const [products, categories] =
        await Promise.all([
            getProducts(),
            getCategories()
        ]);

    return {
        products,
        categories
    };
}