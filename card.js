myButton.addEventListener("click", function () {
    myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
});

var vadaapav = [
    ["VADAPAV", 20],
    ["BUTTER VADAPAV", 25],
    ["CHEESE VADAPAV", 35],
    ["GRILL VADAPAV", 35],
    ["CHEESE GRILL VADAPAV", 50],
    ["JUMBO VADAPAV", 30],
    ["CHEESE JUMBO VADAPAV", 50]
] ;

var container = document.getElementById('accordion0');
var id= "A"
vadaapav.forEach((result, idx) => {
// Create card element
 id += 1;
const card = document.createElement('div');
card.classList = 'card-body';

// Construct card content
const content = `
<div class=" d-lg-inline-flex col-lg-3">
  <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
  <div class="card-body card mt-2" id="${id}">
        <div class="mb-3 title">${result[0]}</div>
        <div class="quantity"><input type="number" class="col-5 bg-transparent border-warning text-center" style="color: solid black;font-size: 20px;" name="qunt" id="" value="1"></div>
        <td class="mb-3"><p>${result[1]} Rs</p></td>
        <button id="button" class="btn" type="button" onclick="addtocart(${id})">order now<button>
  </div>
</div>
</div>
`;
// Append newyly created card element to the container
container.innerHTML += content;
});

var ulta =[
    ["ULTA VADAPAV", 40],
    ["PULTA VADAPAV", 40],
    ["ULTA CHEESE VADAPAV", 60],
    ["PULTA CHEESE VADAPAV", 60],
    ["ULTA FIRE DOUBLE CHEESE VADAPAV", 80]
];

var container = document.getElementById('accordion1');
var id= "B"
ulta.forEach((result, idx) => {
// Create card element
id += 1;
const card = document.createElement('div');
card.classList = 'card-body';

// Construct card content
const content = `
<div class=" d-lg-inline-flex col-lg-3">
  <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion1">
  <div class="card-body card title mt-2" id="${id}">
        <div class=" mb-3">${result[0]}</div>
        <div class="quantity"><input type="number" class="col-5 bg-transparent border-warning text-center" style="color: solid black;font-size: 20px;" name="qunt" id="" value="1"></div>
        <td class="mb-3"><p>${result[1]} Rs</p></td>
        <button id="button" class="btn" onclick="addtocart(${id})">order now<button>
  </div>
</div>
</div>
`;
// Append newyly created card element to the container
container.innerHTML += content;
});

var pakora =[

    ["BREAD PAKORA", 20],
    ["BUTTER BREAD PAKORA", 25],
    ["CHEESE BREAD PAKORA", 30],
    ["BIT BREAD PAKORA", 25]
];

var container = document.getElementById('accordion2');
var id= "C"
pakora.forEach((result, idx) => {
// Create card element
id += 1;
const card = document.createElement('div');
card.classList = 'card-body';

// Construct card content
const content = `
<div class=" d-lg-inline-flex col-lg-3">
  <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion2">
  <div class="card-body card title mt-2" id="${id}">
        <div class=" mb-3">${result[0]}</div>
        <div class="quantity"><input type="number" class="col-5 bg-transparent border-warning text-center" style="color: solid black;font-size: 20px;" name="qunt" id="" value="1"></div>
        <td class="mb-3"><p>${result[1]} Rs</p></td>
        <button id="button" class="btn" onclick="addtocart(${id})">order now<button>
  </div>
</div>
</div>
`;
// Append newyly created card element to the container
container.innerHTML += content;
});

var frenkee=[

    ["VEG. FRENKEE", 50],
    ["VEG. SCHEZWAN FRENKEE", 60],
    ["VEG. MAYONNAISE FRENKEE", 60],
    ["SCHEZWAN MAYONNAISE FRENKEE", 70],
    ["VEG. CHEESE FRENKEE", 70],
    ["VEG. CHEESE SCHEZWAN FRENKEE", 80],
    ["VEG. CHEESE MAYONNAISE FRENKEE", 80],
    ["VEG. CHEESE SCHAZWAN MAYONNAISE FRENKEE", 100]
];

var container = document.getElementById('accordion3');
var id= "D"
frenkee.forEach((result, idx) => {
// Create card element
id += 1;
const card = document.createElement('div');
card.classList = 'card-body';

// Construct card content
const content = `
<div class=" d-lg-inline-flex col-lg-3">
  <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion3">
  <div class="card-body card title mt-2" id="${id}">
        <div class=" mb-3">${result[0]}</div>
        <div class="quantity"><input type="number" class="col-5 bg-transparent border-warning text-center" style="color: solid black;font-size: 20px;" name="qunt" id="" value="1"></div>
        <td class="mb-3"><p>${result[1]} Rs</p></td>
        <button id="button" class="btn" onclick="addtocart(${id})">order now<button>
  </div>
</div>
</div>
`;
// Append newyly created card element to the container
container.innerHTML += content;
});

var momos=[

    ["VEG. MOMOS", 60],
    ["FRIED MOMOS", 70],
    ["CHEESE MOMOS", 80],
    ["FRIED CHEESE MOMOS", 90]
];

var container = document.getElementById('accordion4');
var id= "E"
momos.forEach((result, idx) => {
// Create card element
id += 1;
const card = document.createElement('div');
card.classList = 'card-body';

// Construct card content
const content = `
<div class=" d-lg-inline-flex col-lg-3">
  <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion4">
  <div class="card-body card title mt-2" id="${id}">
        <div class="mb-3">${result[0]}</div>
        <div class="quantity"><input type="number" class="col-5 bg-transparent border-warning text-center" style="color: solid black;font-size: 20px;" name="qunt" id="" value="1"></div>
        <td class="mb-3"><p>${result[1]} Rs</p></td>
        <button id="button" class="btn" onclick="addtocart(${id})">order now<button>
  </div>
</div>
</div>
`;
// Append newyly created card element to the container
container.innerHTML += content;
});

var drink=[
    ["WATER", 10]
];

var container = document.getElementById('accordion5');
var id= "F"
drink.forEach((result, idx) => {
// Create card element
id += 1;
const card = document.createElement('div');
card.classList = 'card-body';

// Construct card content
const content = `
<div class=" d-lg-inline-flex col-lg-3">
  <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion5">
  <div class="card-body card title mt-2" id="${id}">
        <div class=" mb-3">${result[0]}</div>
        <div class="quantity"><input type="number" class="col-5 bg-transparent border-warning text-center" style="color: solid black;font-size: 20px;" name="qunt" id="" value="1"></div>
        <td class="mb-3"><p>${result[1]} Rs</p></td>
        <button id="button" class="btn" onclick="addtocart(${id})">order now<button>
  </div>
</div>
</div>
`;
// Append newyly created card element to the container
container.innerHTML += content;
});

var addItemid = 0;

function addtocart(item){
    addItemid += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemid);
    // var img = document.createElement('img');
    // img.setAttribute('src',item.children[0].currentSrc);
    var title = document.createElement('td');
    title.innerText =" Item : "+item.children[0].innerText+"\n";
    var br = document.createElement('br');
    var lable = document.createElement('td');
    lable.innerText =" Q : "+item.children[1].children[0].innerText;
    var select = document.createElement('span');
    select.innerText = item.children[1].children[0].value;
    var del = document.createElement('button');
    del.classList.add("fa", "fa-close")
    del.setAttribute('onclick','del('+addItemid+')')
    var cartItems = document.getElementById('title');
    // selectedItem.append(img);
    selectedItem.append("  "+"("+addItemid+")"+" ");
    selectedItem.append(title);
    selectedItem.append(br);
    selectedItem.append(lable);
    selectedItem.append("   ");
    selectedItem.append("   ");
    selectedItem.append(del);
    lable.append(select);
    cartItems.append(selectedItem);
    alert('item added !! \n '+item.children[0].innerText+'\n Check your cart');
    im = addItemid.valueOf(item.children[0].innerText);
    updateCartCount(im);

}

function del(item){
  var text = "Are your Sure you want to remove this ??\n" ;
  if(confirm(text)==true){
    document.getElementById(item).remove();
    }
}

// var notification = document.getElementById('notification');
// var cartButton = document.getElementById('button');

// var cls = document.getElementsByName('dlt');
//     function updateCartCount() {
//       cartCount = im;
//       if (cartCount > 0) {
//         notification.innerHTML = cartCount;
//         notification.classList.add('visible');
//       } else {
//         notification.classList.remove('visible');
//       }
//     }
//     cartButton.addEventListener('click', function() {
//       cartCount++;
//       updateCartCount();
//       // Add your additional logic for cart functionality here
//     });



function sendMessage() {
  var message =  document.getElementById('title').textContent+"  "; // Replace with your desired dynamic message
  // Replace the country code and phone number with the recipient's number
  var countryCode = "91"; // e.g., 91 for India
  var phoneNumber = "6351585391"; // Replace with recipient's phone number

  // Construct the WhatsApp URL with the pre-filled message
  var url = "https://wa.me/" + countryCode + phoneNumber + "?text=" + encodeURIComponent(message);

  // Open WhatsApp in a new tab or window
  window.open(url);
  }
