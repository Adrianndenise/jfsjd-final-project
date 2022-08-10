

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const address = document.getElementById("address");
const address2 = document.getElementById("address2");
const cityOrCounty = document.getElementById("cityOrCounty");
const state = document.getElementById("state");
const zipCode = document.getElementById("zipCode");

//card info

const cardNum = document.getElementById("cardNum");
const date = document.getElementById("date");
const cw = document.getElementById("cw");
const chName = document.getElementById("chName");
const gridCheck = document.getElementById("gridCheck");

class ItemForm {
    constructor(firstName, lastName, email, password, address, address2, cityOrCounty, state, zipCode )
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.address = address;
    this.address2 = address2;
    this.cityOrCounty = cityOrCounty;
    this.cardName = cardNum;
    this.date = date;
    this.cw = cw;
    this.chName = chName;
    this.gridCheck = gridCheck;
}   

ItemForm.addEventListener('click', ItemForm);