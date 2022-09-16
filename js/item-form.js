import  {ProductsController} from './itemsController.js';
const products = new ProductsController(0);


// const button = document.querySelector('button');
const form = document.getElementById('newItemForm');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
//get Id values from form inputs
const newName = document.getElementById('productname');
const newDescription = document.getElementById('newItemDescription');
const newDate = document.getElementById('productdate');
const newImage = document.getElementById('productimage');
const newPrice = document.getElementById('productprice');

//set form input values to variables so we can use them
const name = newName.value;
const description = newDescription.value;
const date = newDate.value;
const image = newImage.value;
const price = newPrice.value;
// form validation
if(name.value == "") {
    alert("Please enter a product name.");
    name.focus();
    return false;
  }
if(description.value == "") {
    alert("Please enter a product description.");
    description.focus();
    return false;
  }
if(image.value == "") {
    alert("Please enter a product image URL.");
    image.focus();
    return false;
  }
if(date.value == "") {
    alert("Please enter a product date.");
    date.focus();
    return false;
  }
if(price.value == 0) {
    alert("Please enter a product price.");
    price.focus();
    return false;
  }

//add item to class array
products.addProduct(name, description, image, date, price);
console.log(products);
//clearing form inputs
newName.value ='';
newDescription.value = '';
newDate.value = '';
newImage.value = '';
newPrice.value = '';
});