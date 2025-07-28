document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.querySelector('#productName');
  if (productSelect) {
    const products = ["iPhone 14", "Galaxys 22", "Sony Headphones", "Switch Console", "Dell xps 13" ]
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product;
      option.textContent = product;
      productSelect.appendChild(option);
    }); 
  }
});

