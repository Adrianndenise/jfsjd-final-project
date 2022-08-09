class ProductsController {
    constructor(currentId =0){
    this.products = [];
    this.currentId = currentId;
    }
    addProduct(name,description, img, createdAt){
      const product = { 
        name: name,
       description: description,
       imgUrl: img,
       date: createdAt,
       id: this.currentId++
      };
        this.products.push(product)
    }
}

// let goldTickets = new ProductsController;
// goldTickets.addProduct('gold ticket', 'gold ticket with 1st row seating', 'photoshop.com', "2020-01-01");
// console.log(goldTickets);
// console.log(goldTickets.products[0]);

function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+products.img +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+products.name+'</h5>\n' +
        '        <p class="card-text">'+products.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}