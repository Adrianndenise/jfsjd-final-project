 export class ProductsController {
    constructor(currentId =0){
    this.products = [];
    this.currentId = currentId;
    }
    addProduct(name,description, img, createdAt){
      const product = { 
        id: this.currentId++,
        name: name,
       description: description,
       img: img,
       date: createdAt
       
      }
        this.products.push(product);
        localStorage.setItem("products", JSON.stringify(this.products));

         //saving to json, sendd to backend
        this.save(name, description, img);
    }


    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("products")
        if (storageItems) {
            const products = JSON.parse(storageItems)
            //TODO load the items into the local items structure (this.items)
            for (let i = 0, size = products.length; i < size; i++) {
                const product = products[i];
            this.products.push(product);   
        }
    }
}

save({name, description, imgUrl}){
    const data = { name,  description, imgUrl };

    fetch('http://localhost:8080/products/save', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}
}



// module.exports = ProductsController;
// export const productsController = 'itemsController';
// export const addproduct = 'addProduct';
// export {ProductsController.loadItemsFromLocalStorage}