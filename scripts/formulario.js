const products = [
{
id: "prod001",
name: "Produto Premium"
},
{
id: "prod002",
name: "Produto Standard"
},
{
id: "prod003",
name: "Produto Básico"
},
{
id: "prod004",
name: "Produto Profissional"
}
];

const productSelect = document.querySelector("#product");

if (productSelect) {

products.forEach((product) => {

    const option = document.createElement("option");

    option.value = product.id;

    option.textContent = product.name;

    productSelect.appendChild(option);
});


}

const currentYear = document.querySelector("#currentyear");

if (currentYear) {

currentYear.textContent =
    new Date().getFullYear();


}

const lastModified = document.querySelector("#lastModified");

if (lastModified) {

lastModified.textContent =
    `Última modificação: ${document.lastModified}`;


}

const reviewCounter =
document.querySelector("#reviewCounter");

if (reviewCounter) {

const urlParams =
    new URLSearchParams(window.location.search);


const product =
    urlParams.get("product");

const rating =
    urlParams.get("rating");

const installDate =
    urlParams.get("installDate");


let reviewCount =
    Number(localStorage.getItem("reviewCount")) || 0;


const validSubmission =
    product &&
    rating &&
    installDate;


if (validSubmission) {

    const alreadyCounted =
        sessionStorage.getItem("reviewCounted");


    if (!alreadyCounted) {

        reviewCount++;

        localStorage.setItem(
            "reviewCount",
            reviewCount
        );

        sessionStorage.setItem(
            "reviewCounted",
            "true"
        );
    }
}


reviewCounter.textContent =
    reviewCount;


}