// const productsController = require("./itemsController.js");
import  {ProductsController} from './itemsController.js';
const pro = new ProductsController();
function addItemCard(products){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+products.img +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+ products.name +'</h5>\n' +
        '        <p class="card-text">'+products.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
function saveToLocalStorage(){
    if(!localStorage.getItem("products")){
const sampleItems = [{'name':'gold Ticket',
'img':'https://www.gs1india.org/media/Juice_pack.jpg',
'description':'3 day ticket'},
{'name':'silver Ticket',
'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
'description':'2 day ticket'}];
localStorage.setItem("products", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromproductsController(){
    for(let i = 0, size = pro.products.length; i < size ; i++){
        const product = pro.products[i];
        addItemCard(product);
    }
}

saveToLocalStorage();
pro.loadItemsFromLocalStorage();
loadCardsListFromproductsController();