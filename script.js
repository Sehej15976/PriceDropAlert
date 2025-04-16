
document.addEventListener("DOMContentLoaded", function() {
    console.log("Add product script loaded.");

    const addProductForm = document.getElementById("add-product-form");

    if (addProductForm) {
        console.log("Add product form found.");

        addProductForm.addEventListener("submit", function(event) {
            event.preventDefault(); 

            console.log("Form submitted.");

       
            const productName = document.getElementById("product-name").value;
            const productURL = document.getElementById("product-url").value;
            const thresholdPrice = document.getElementById("threshold-price").value;
            const extraContent = document.getElementById("extra-content").value;

            console.log("Product details:", productName, productURL, thresholdPrice, extraContent);

            
            const product = {
                name: productName,
                url: productURL,
                price: thresholdPrice,
                content: extraContent
            };
            localStorage.setItem("newProduct", JSON.stringify(product));

            alert("Product successfully added!");

           
            addProductForm.reset();
        });
    } else {
        console.error("Add product form element not found");
    }
});
