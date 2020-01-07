

// You can use the console window at the bottom
var myDiv = document.querySelector('#item-list');
console.log(myDiv.innerHTML)

var letters = ["a", "b", "c", "d", "e", "f", "g"]

for(var i=0; i < letters.length; i++){
  
 myDiv.innerHTML += `${letters[i]}<br>`

 console.log(myDiv.innerHTML)
}
//myDiv.innerHTML = myDiv.innerHTML + '<div>b</div> </br>'
var n_var=10;
var str = `n is ${n_var}`
console.log(str);

  
var items = [
  {
    "name": "Sbadri",
    "color": "White",
    "quantity": 0,
    "price": "120$",
    "img": "http://www.acotee.fr/image/cache/data/category_30/giuseppe-zanotti-design-white-baskets-white-kriss-homme-baskets-chaussures-homme-9u9-4296-500x500.jpg"
  },
  {
    "name": "Klasset",
    "color": "Tacos",
    "quantity": 0,
    "price": "20$",
    "img": "https://images.asos-media.com/products/asos-socquettes-a-motif-tacos/4808541-2?$XXL$&wid=513&fit=constrain"
  },
  {
    "name": "Kartaba",
    "color": "Brown",
    "quantity": 0,
    "price": "80$",
    "img": "http://www.kivoatoo.fr/imgs/cate_4/640/Anello-Cuir-carr%C3%A9-en-forme-de-sac-%C3%A0-dos-Brown-ATB1211-M0nDmf1p2YJ4-bfa0.jpg"
  }
]

var itemListDiv = document.querySelector('#item-list');
itemListDiv.innerHTML = ""

for(var i=0; i < items.length; i++){
  var item = items[i]
  var itemHTML = `<div class="cart-item">
     <div class="cancel-container item-container">
       <button class="cancel">X</button>
     </div>
     <div class="item-img-container item-container">
     	<img src="${item.img}", alt=""/>
     </div> 
     <div class="item-container item-details-container">
       <span class="name">${item.name}</span>
       <br>
       <span class="color">${item.color}</span>
     </div>
     <div class="item-quantity-container item-container">
       <button class="plus-item">+</button>
       <span class="item-quantity">${item.quantity}</span>
       <button class="minus-item">-</button>
     </div>
  	 <div class="item-price-container item-container">${item.price}</div>
</div>
` //????  
  itemListDiv.innerHTML += itemHTML
}

const deleteButtons = document.querySelectorAll(".cancel")
Array.from(deleteButtons).map(el => el.addEventListener('click' , ()=> {
  el.parentElement.parentElement.remove()
}) )

const plusButtons = document.querySelectorAll(".plus-item")
Array.from(plusButtons).map(el => el.addEventListener('click' , ()=> {
  let unitPrice = parseInt(el.parentElement.nextElementSibling.innerHTML.replace('$', ''))
  let total = el.parentElement.parentElement.parentElement.previousElementSibling.children[2].innerHTML.replace('$', '')
 
  el.parentElement.parentElement.parentElement.previousElementSibling.children[2].innerHTML =  parseInt(total) + unitPrice
  // total.innerHTML = parseInt(total) + unitPrice
  el.nextElementSibling.innerHTML++
}) )


const moinsButtons = document.querySelectorAll(".minus-item")
Array.from(moinsButtons).map(el => el.addEventListener('click' , ()=> {

  if(el.previousElementSibling.innerHTML > 0){
    let unitPrice = parseInt(el.parentElement.nextElementSibling.innerHTML.replace('$', ''))
  let total = el.parentElement.parentElement.parentElement.previousElementSibling.children[2].innerHTML.replace('$', '')
 
  el.parentElement.parentElement.parentElement.previousElementSibling.children[2].innerHTML =  parseInt(total) - unitPrice
  // total.innerHTML = parseInt(total) + unitPrice
    el.previousElementSibling.innerHTML--
  }
}) )

