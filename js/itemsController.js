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
}



// module.exports = ProductsController;
// export const productsController = 'itemsController';
// export const addproduct = 'addProduct';
// export {ProductsController.loadItemsFromLocalStorage}