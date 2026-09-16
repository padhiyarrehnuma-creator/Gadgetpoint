/* =========================================================
   GADGETPOINT - FINAL SCRIPT
   Theme: White + Orange + Black
   Features:
   - Product cards
   - 3D tilt
   - Single click image = zoom
   - Double click image = product popup
   - Search
   - Categories
   - Filters + sorting
   - Cart
   - Wishlist
   - Checkout
   - Orders
   - Payment pending
   - Order tracking
   - Profile photo
   - Profile editing
   - Address management
   ========================================================= */


/* =========================
   PRODUCTS
   ========================= */

const products = [

{
id:1,
name:"Galaxy S24 Ultra",
price:99999,
category:"phones",
desc:"200MP camera, 12GB RAM, 256GB",
badge:"HOT",
discount:15,
img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=85&auto=format&fit=crop"
},

{
id:2,
name:"iPhone 15 Pro Max",
price:149900,
category:"phones",
desc:"48MP camera, 8GB RAM, 256GB",
badge:"BEST",
discount:10,
img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=85&auto=format&fit=crop"
},

{
id:3,
name:"OnePlus 12",
price:64999,
category:"phones",
desc:"50MP camera, 12GB RAM, 256GB",
badge:"NEW",
discount:0,
img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=85&auto=format&fit=crop"
},

{
id:4,
name:"Pixel 8 Pro",
price:84999,
category:"phones",
desc:"50MP camera, 12GB RAM, 128GB",
badge:"SALE",
discount:20,
img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=85&auto=format&fit=crop"
},

{
id:5,
name:'MacBook Pro 14"',
price:159900,
category:"laptops",
desc:"M3 chip, 16GB, 512GB SSD",
badge:"BEST",
discount:5,
img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&q=85&auto=format&fit=crop"
},

{
id:6,
name:"Dell XPS 16",
price:129900,
category:"laptops",
desc:"Intel Ultra 9, 32GB, 1TB SSD",
badge:"SALE",
discount:25,
img:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=900&q=85&auto=format&fit=crop"
},

{
id:7,
name:"Lenovo Yoga 9i",
price:89900,
category:"laptops",
desc:"Intel i7, 16GB, 512GB SSD",
badge:"NEW",
discount:0,
img:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900&q=85&auto=format&fit=crop"
},

{
id:8,
name:"ASUS ROG Zephyrus",
price:149900,
category:"laptops",
desc:"RTX 4070, 32GB, 1TB SSD",
badge:"HOT",
discount:12,
img:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&q=85&auto=format&fit=crop"
},

{
id:9,
name:"Apple Watch Ultra 2",
price:89900,
category:"watches",
desc:"49mm, GPS + Cellular, rugged",
badge:"BEST",
discount:8,
img:"https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&q=85&auto=format&fit=crop"
},

{
id:10,
name:"Samsung Watch 6",
price:39900,
category:"watches",
desc:"40mm, AMOLED, ECG monitor",
badge:"NEW",
discount:0,
img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=85&auto=format&fit=crop"
},

{
id:11,
name:"Garmin Fenix 7",
price:69900,
category:"watches",
desc:"47mm, GPS, solar charging",
badge:"SALE",
discount:18,
img:"https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&q=85&auto=format&fit=crop"
},

{
id:12,
name:"Pixel Watch 2",
price:34900,
category:"watches",
desc:"41mm, Fitbit integration",
badge:"HOT",
discount:10,
img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=85&auto=format&fit=crop"
},

{
id:13,
name:"iPad Air M2",
price:59900,
category:"tablets",
desc:"10.9 inch, 64GB, Wi-Fi + 5G",
badge:"BEST",
discount:5,
img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=900&q=85&auto=format&fit=crop"
},

{
id:14,
name:"Samsung Galaxy Tab S9",
price:79900,
category:"tablets",
desc:"11 inch AMOLED, 128GB",
badge:"NEW",
discount:12,
img:"https://images.unsplash.com/photo-1561154464-82e9adf32764?w=900&q=85&auto=format&fit=crop"
},

{
id:15,
name:"OnePlus Pad",
price:39900,
category:"tablets",
desc:"11.6 inch, 144Hz, 128GB",
badge:"SALE",
discount:10,
img:"https://images.unsplash.com/photo-1561154464-82e9adf32764?w=900&q=85&auto=format&fit=crop"
},

{
id:16,
name:"Sony WH-1000XM5",
price:29990,
category:"headphones",
desc:"Noise cancelling, 30h battery",
badge:"BEST",
discount:10,
img:"https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=900&q=85&auto=format&fit=crop"
},

{
id:17,
name:"Bose QC 45",
price:24990,
category:"headphones",
desc:"Active noise cancelling, 24h battery",
badge:"HOT",
discount:8,
img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=85&auto=format&fit=crop"
},

{
id:18,
name:"JBL Tune 770",
price:9990,
category:"headphones",
desc:"Wireless, 70h battery, lightweight",
badge:"NEW",
discount:0,
img:"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&q=85&auto=format&fit=crop"
},

{
id:19,
name:"AirPods Pro 2",
price:24900,
category:"earbuds",
desc:"Active noise cancelling, H2 chip",
badge:"BEST",
discount:5,
img:"https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&q=85&auto=format&fit=crop"
},

{
id:20,
name:"Samsung Galaxy Buds 2",
price:9990,
category:"earbuds",
desc:"Noise cancelling, wireless charging",
badge:"SALE",
discount:20,
img:"https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&q=85&auto=format&fit=crop"
},

{
id:21,
name:"Nothing Ear 2",
price:14990,
category:"earbuds",
desc:"Active noise cancelling, transparent design",
badge:"NEW",
discount:0,
img:"https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&q=85&auto=format&fit=crop"
},

{
id:22,
name:"Jabra Elite 5",
price:12990,
category:"earbuds",
desc:"Hybrid ANC, 7h battery, multipoint",
badge:"HOT",
discount:12,
img:"https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&q=85&auto=format&fit=crop"
},

{
id:23,
name:"Boat Rockerz 450",
price:1990,
category:"handsfree",
desc:"Wireless, 15h battery, comfortable",
badge:"HOT",
discount:10,
img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=85&auto=format&fit=crop"
},

{
id:24,
name:"Noise Buds VS104",
price:1490,
category:"handsfree",
desc:"Bluetooth 5.0, 10m range, voice assistant",
badge:"NEW",
discount:0,
img:"https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800&q=85&auto=format&fit=crop"
},

{
id:25,
name:"Sony WI-C200",
price:2290,
category:"handsfree",
desc:"Neckband, 15h battery, lightweight",
badge:"SALE",
discount:8,
img:"https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&q=85&auto=format&fit=crop"
},

{
id:26,
name:"JBL C100SI",
price:799,
category:"handsfree",
desc:"Wired earphones, deep bass",
badge:"HOT",
discount:5,
img:"https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&q=85&auto=format&fit=crop"
},

{
id:27,
name:"Samsung 25W Adapter",
price:1499,
category:"chargers",
desc:"Super fast charging, USB-C",
badge:"HOT",
discount:8,
img:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=85&auto=format&fit=crop"
},

{
id:28,
name:"Apple 20W Charger",
price:1999,
category:"chargers",
desc:"Fast charging, USB-C, compact",
badge:"NEW",
discount:0,
img:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=85&auto=format&fit=crop"
},

{
id:29,
name:"Spigen 100W Charger",
price:3499,
category:"chargers",
desc:"4 ports, GaN technology, LED display",
badge:"SALE",
discount:15,
img:"https://images.unsplash.com/photo-1609592424837-9b9f5f8f2c8b?w=800&q=85&auto=format&fit=crop"
}

];


/* =========================
   CATEGORIES
   ========================= */

const categoryInfo = {

phones:[
"📱",
"Phones",
"Smartphones & flagships",
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80&auto=format&fit=crop"
],

laptops:[
"💻",
"Laptops",
"Power for work & gaming",
"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80&auto=format&fit=crop"
],

watches:[
"⌚",
"Watches",
"Smart everyday wear",
"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80&auto=format&fit=crop"
],

tablets:[
"📟",
"Tablets",
"Big screen, easy carry",
"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80&auto=format&fit=crop"
],

headphones:[
"🎧",
"Headphones",
"Immersive audio",
"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80&auto=format&fit=crop"
],

earbuds:[
"🎵",
"Earbuds",
"Compact wireless sound",
"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&q=80&auto=format&fit=crop"
],

handsfree:[
"📞",
"Hands Free",
"Everyday listening",
"https://images.unsplash.com/photo-1578319439584-104c94d37305?w=500&q=80&auto=format&fit=crop"
],

chargers:[
"🔋",
"Chargers",
"Fast power essentials",
"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80&auto=format&fit=crop"
]

};

const categories = Object.keys(categoryInfo);


/* =========================
   LOCAL STORAGE
   ========================= */

let cart =
JSON.parse(localStorage.getItem("gadgetpoint_cart")) || [];

let wishlist =
JSON.parse(localStorage.getItem("gadgetpoint_wishlist")) || [];

let orders =
JSON.parse(localStorage.getItem("gadgetpoint_orders")) || [];

let account =
JSON.parse(localStorage.getItem("gadgetpoint_account")) || null;

let addresses =
JSON.parse(localStorage.getItem("gadgetpoint_addresses")) || [

{
label:"Home",
detail:"Add your delivery address"
},

{
label:"Office",
detail:"Add your office address"
}

];


/* =========================
   VARIABLES
   ========================= */

let currentCategory = "all";
let currentSearch = "";
let currentPrice = "all";
let currentSort = "default";

let selectedPayment = "cod";
let coupon = 0;


/* =========================
   SHORTCUT
   ========================= */

const $ = id => document.getElementById(id);

const money = amount =>
"₹" + Number(amount).toLocaleString("en-IN");


function saveData(){

localStorage.setItem(
"gadgetpoint_cart",
JSON.stringify(cart)
);

localStorage.setItem(
"gadgetpoint_wishlist",
JSON.stringify(wishlist)
);

localStorage.setItem(
"gadgetpoint_orders",
JSON.stringify(orders)
);

localStorage.setItem(
"gadgetpoint_account",
JSON.stringify(account)
);

localStorage.setItem(
"gadgetpoint_addresses",
JSON.stringify(addresses)
);

}


/* =========================
   TOAST
   ========================= */

function toast(message){

const box = $("toast");

if(!box) return;

box.textContent = message;

box.classList.add("show");

setTimeout(()=>{
box.classList.remove("show");
},2200);

}


/* =========================
   SECTION NAVIGATION
   ========================= */

function showSection(section){

document
.querySelectorAll(".section")
.forEach(s =>
s.classList.add("hidden")
);

const target = $(section);

if(target){
target.classList.remove("hidden");
}

document
.querySelectorAll(".nav-link")
.forEach(link => {

link.classList.toggle(
"active",
link.dataset.section === section
);

});

window.scrollTo({
top:0,
behavior:"smooth"
});

}


/* =========================
   NAVIGATION
   ========================= */

document.addEventListener("click",function(e){

const element =
e.target.closest("[data-section]");

if(!element) return;

e.preventDefault();

showSection(
element.dataset.section
);

});


/* =========================
   AUTH
   ========================= */

function initAuth(){

if(account){

$("accountPage")
.classList.add("hidden");

$("app")
.classList.remove("hidden");

renderProfile();

}else{

$("accountPage")
.classList.remove("hidden");

$("app")
.classList.add("hidden");

}

}


$("switchAuth").onclick = function(){

const signup =
$("signupForm");

const login =
$("loginForm");

signup.classList.toggle("hidden");

login.classList.toggle("hidden");

const isLogin =
!login.classList.contains("hidden");

$("authText").textContent =
isLogin
? "Don't have an account?"
: "Already have an account?";

$("switchAuth").textContent =
isLogin
? "Create one now"
: "Login here";

};


$("signupForm").onsubmit = function(e){

e.preventDefault();

if(
$("accPassword").value !==
$("accConfirm").value
){

toast("❌ Passwords do not match");

return;

}

account = {

name:$("accName").value.trim(),

email:$("accEmail").value.trim(),

phone:$("accPhone").value.trim(),

photo:""

};

saveData();

toast("✅ Account created!");

setTimeout(
initAuth,
350
);

};


$("loginForm").onsubmit = function(e){

e.preventDefault();

if(!account){

toast("Create an account first");

return;

}

toast("✅ Login successful");

setTimeout(
initAuth,
350
);

};


/* =========================
   PASSWORD EYE
   ========================= */

document
.querySelectorAll(".eye")
.forEach(button => {

button.onclick = function(){

const input =
$(button.dataset.target);

if(
input.type === "password"
){

input.type = "text";

button.textContent = "🙈";

}else{

input.type = "password";

button.textContent = "👁";

}

};

});


/* =========================
   CATEGORY RENDER
   ========================= */

function renderCategories(){

$("homeCategories").innerHTML =
categories.map(category => {

const info =
categoryInfo[category];

return `

<button
class="category-card"
data-cat="${category}"
>

<h3>
${info[0]} ${info[1]}
</h3>

<p>
${info[2]}
</p>

<img
src="${info[3]}"
alt="${info[1]}"
>

</button>

`;

}).join("");


$("categoryTabs").innerHTML =

`

<button
class="cat-btn active"
data-cat="all"
>
All
</button>

`

+

categories.map(category => {

const info =
categoryInfo[category];

return `

<button
class="cat-btn"
data-cat="${category}"
>

${info[0]}
${info[1]}

</button>

`;

}).join("");


document
.querySelectorAll(".category-card")
.forEach(button => {

button.onclick = function(){

currentCategory =
button.dataset.cat;

showSection("products");

renderProducts();

};

});


document
.querySelectorAll(".cat-btn")
.forEach(button => {

button.onclick = function(){

document
.querySelectorAll(".cat-btn")
.forEach(x =>
x.classList.remove("active")
);

button.classList.add("active");

currentCategory =
button.dataset.cat;

renderProducts();

};

});

}


/* =========================
   FILTER PRODUCTS
   ========================= */

function filteredProducts(){

let list =
products.filter(product =>

currentCategory === "all" ||

product.category === currentCategory

);


if(currentSearch){

list =
list.filter(product =>

(

product.name +
" " +
product.desc +
" " +
product.category

)
.toLowerCase()
.includes(
currentSearch.toLowerCase()
)

);

}


if(currentPrice !== "all"){

list =
list.filter(product => {

if(currentPrice === "0-10000")
return product.price <= 10000;

if(currentPrice === "10000-50000")
return product.price > 10000 &&
product.price <= 50000;

if(currentPrice === "50000-100000")
return product.price > 50000 &&
product.price <= 100000;

if(currentPrice === "100000+")
return product.price > 100000;

return true;

});

}


if(currentSort === "price-low"){

list.sort(
(a,b)=>a.price-b.price
);

}


if(currentSort === "price-high"){

list.sort(
(a,b)=>b.price-a.price
);

}


return list;

}


/* =========================
   PRODUCT CARD
   ========================= */

function productCard(product){

const wished =
wishlist.some(
item => item.id === product.id
);

const oldPrice =
product.discount
?
Math.round(
product.price /
(1-product.discount/100)
)
:
0;

return `

<article
class="product-card"
data-id="${product.id}"
>

<div class="product-img-wrap">

<span class="badge">
${product.badge}
</span>

<button
class="wish ${wished ? "active":""}"
data-wish="${product.id}"
>
${wished ? "♥":"♡"}
</button>

<img
class="product-img"
src="${product.img}"
alt="${product.name}"
data-img="${product.id}"
>

</div>


<div class="product-info">

<div class="rating">
★★★★★
</div>

<h3>
${product.name}
</h3>

<p>
${product.desc}
</p>

<div>

<span class="price">
${money(product.price)}
</span>

${
oldPrice
?
`
<span class="old-price">
${money(oldPrice)}
</span>
`
:""
}

</div>


<div class="card-actions">

<button
class="outline-btn"
data-view="${product.id}"
>
View
</button>

<button
class="primary-btn"
data-cart="${product.id}"
>
Add
</button>

</div>

</div>

</article>

`;

}


/* =========================
   RENDER PRODUCTS
   ========================= */

function renderProducts(
target = "productGrid",
list = filteredProducts()
){

if(!$(target)) return;

$(target).innerHTML =
list.map(productCard).join("");

if($("resultCount")){

$("resultCount").textContent =
`${list.length} product${list.length !== 1 ? "s":""}`;

}

attachProductEvents(target);

}


/* =========================
   PRODUCT EVENTS
   ========================= */

function attachProductEvents(target){

/* 3D TILT */

document
.querySelectorAll(
`#${target} .product-card`
)
.forEach(card => {

card.addEventListener(
"mousemove",
function(e){

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateX =
-(y / rect.height - .5) * 10;

const rotateY =
(x / rect.width - .5) * 12;

card.style.transform =

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateZ(5px)`;

});


card.addEventListener(
"mouseleave",
function(){

card.style.transform = "";

});

});


/* ADD TO CART */

document
.querySelectorAll(
`#${target} [data-cart]`
)
.forEach(button => {

button.onclick = function(){

addCart(
Number(button.dataset.cart)
);

};

});


/* WISHLIST */

document
.querySelectorAll(
`#${target} [data-wish]`
)
.forEach(button => {

button.onclick = function(){

toggleWishlist(
Number(button.dataset.wish)
);

};

});


/* VIEW POPUP */

document
.querySelectorAll(
`#${target} [data-view]`
)
.forEach(button => {

button.onclick = function(){

openProduct(
Number(button.dataset.view)
);

};

});


/* IMAGE ZOOM */

document
.querySelectorAll(
`#${target} [data-img]`
)
.forEach(image => {

image.onclick = function(){

openZoom(
image.src
);

};


/* DOUBLE CLICK = PRODUCT POPUP */

image.ondblclick = function(){

openProduct(
Number(image.dataset.img)
);

};

});

}


/* =========================
   SEARCH
   ========================= */

$("searchInput").oninput =
function(){

currentSearch =
this.value;

showSection("products");

renderProducts();

};


$("searchBtn").onclick =
function(){

currentSearch =
$("searchInput").value;

showSection("products");

renderProducts();

};


/* =========================
   PRICE / SORT
   ========================= */

$("priceFilter").onchange =
function(){

currentPrice =
this.value;

renderProducts();

};


$("sortFilter").onchange =
function(){

currentSort =
this.value;

renderProducts();

};


/* =========================
   CART
   ========================= */

function addCart(id,quantity=1){

const product =
products.find(
p => p.id === id
);

if(!product) return;

const existing =
cart.find(
p => p.id === id
);

if(existing){

existing.quantity += quantity;

}else{

cart.push({

...product,

quantity

});

}

saveData();

updateCounts();

renderCart();

toast("🛒 Added to cart");

}


function removeCart(id){

cart =
cart.filter(
p => p.id !== id
);

saveData();

updateCounts();

renderCart();

}


function changeQty(id,difference){

const item =
cart.find(
p => p.id === id
);

if(!item) return;

item.quantity += difference;

if(item.quantity <= 0){

removeCart(id);

return;

}

saveData();

renderCart();

updateCounts();

}


/* =========================
   COUNTS
   ========================= */

function updateCounts(){

if($("cartCount")){

$("cartCount").textContent =
cart.reduce(
(total,item) =>
total + item.quantity,
0
);

}

if($("wishCount")){

$("wishCount").textContent =
wishlist.length;

}

}


/* =========================
   CART RENDER
   ========================= */

function renderCart(){

const container =
$("cartItems");

if(!container) return;

if(!cart.length){

container.innerHTML =
`
<p class="muted">
Your cart is empty.
</p>
`;

$("cartTotal").textContent =
"Total: ₹0";

return;

}


container.innerHTML =
cart.map(item => `

<div class="cart-row">

<img
src="${item.img}"
alt="${item.name}"
>

<div style="flex:1">

<b>
${item.name}
</b>

<div>
${money(item.price)}
</div>

<div class="qty">

<button
onclick="changeQty(${item.id},-1)"
  −
</button>

${item.quantity}

<button
onclick="changeQty(${item.id},1)"
>
+
</button>

<button
class="danger-btn"
onclick="removeCart(${item.id})"
>
Remove
</button>

</div>

</div>

</div>

`).join("");


const total =
cart.reduce(
(sum,item) =>
sum + item.price * item.quantity,
0
) - coupon;


$("cartTotal").textContent =
`Total: ${money(Math.max(0,total))}`;

}


/* =========================
   WISHLIST
   ========================= */

function toggleWishlist(id){

const product =
products.find(
p => p.id === id
);

if(!product) return;

const index =
wishlist.findIndex(
p => p.id === id
);

if(index >= 0){

wishlist.splice(index,1);

toast(
"Removed from wishlist"
);

}else{

wishlist.push(product);

toast(
"❤️ Added to wishlist"
);

}

saveData();

updateCounts();

renderProducts();

renderFeatured();

renderWishlist();

}


function renderWishlist(){

const container =
$("wishlistItems");

if(!container) return;

if(!wishlist.length){

container.innerHTML =
`
<p class="muted">
No saved products yet.
</p>
`;

return;

}


container.innerHTML =
wishlist.map(item => `

<div class="cart-row">

<img
src="${item.img}"
alt="${item.name}"
>

<div style="flex:1">

<b>
${item.name}
</b>

<div>
${money(item.price)}
</div>

<button
class="primary-btn small"
onclick="addCart(${item.id})"
>
Add to cart
</button>

</div>

</div>

`).join("");

}


/* =========================
   DRAWERS
   ========================= */

function openDrawer(id){

$(id).classList.add("open");

$("drawerShade")
.classList.add("open");

renderCart();

renderWishlist();

}


function closeDrawer(id){

$(id).classList.remove("open");

if(
!document.querySelector(".drawer.open")
){

$("drawerShade")
.classList.remove("open");

}

}


$("cartBtn").onclick =
()=>openDrawer("cartDrawer");


$("wishlistBtn").onclick =
()=>openDrawer("wishlistDrawer");


$("drawerShade").onclick =
function(){

closeDrawer("cartDrawer");

closeDrawer("wishlistDrawer");

};


/* =========================
   COUPON
   ========================= */

$("applyCoupon").onclick =
function(){

const code =
$("couponInput")
.value
.trim()
.toUpperCase();


if(code === "SAVE10"){

coupon = 500;

toast(
"✅ SAVE10 applied: ₹500 off"
);

}

else if(
code === "ELECTRO20"
){

coupon = 1000;

toast(
"✅ ELECTRO20 applied: ₹1000 off"
);

}

else{

coupon = 0;

toast(
"❌ Invalid coupon"
);

}

renderCart();

};

/* =========================
   PRODUCT POPUP
   ========================= */

function openProduct(id){

const product =
products.find(
p => p.id === id
);

if(!product) return;


$("productModalContent")
.innerHTML = `

<div class="product-modal-grid">

<img
src="${product.img}"
alt="${product.name}"
onclick="openZoom(this.src)"
>

<div>

<span class="eyebrow">
${product.badge}
</span>

<h2>
${product.name}
</h2>

<div class="rating">
★★★★★
</div>

<p>
${product.desc}
</p>

<h3>
${money(product.price)}
</h3>

<p class="muted">
Single click image = zoom.
<br>
Double click product image = popup.
</p>

<button
class="primary-btn full"
onclick="addCart(${product.id})"
>
Add to Cart
</button>

</div>

</div>

`;

$("productModal")
.classList.add("open");

}


/* =========================
   IMAGE ZOOM
   ========================= */

function openZoom(image){

$("zoomImage").src =
image;

$("imageModal")
.classList.add("open");

}


/* =========================
   MODAL CLOSE
   ========================= */

document
.querySelectorAll("[data-close]")
.forEach(button => {

button.onclick =
function(){

const id =
button.dataset.close;

$(id).classList.remove("open");

if(id.includes("Drawer")){

$("drawerShade")
.classList.remove("open");

}

};

});


document
.querySelectorAll(".modal")
.forEach(modal => {

modal.addEventListener(
"click",
function(e){

if(e.target === modal){

modal.classList.remove("open");

}

});

});


/* =========================
   CHECKOUT
   ========================= */

$("checkoutBtn").onclick =
function(){

if(!cart.length){

toast(
"Cart is empty"
);

return;

}

openCheckout();

};


function openCheckout(){

const total =
Math.max(

0,

cart.reduce(
(sum,item) =>
sum +
item.price *
item.quantity,
0
) - coupon

);


$("checkoutContent")
.innerHTML = `

<h2>
Confirm Order
</h2>

<p class="muted">
Choose payment method and confirm your order.
</p>


<h3>
📍 Delivery Address
</h3>

<div>

${addresses.map(
(address,index) => `

<label
style="
display:block;
border:1px solid #ddd;
padding:12px;
border-radius:12px;
margin:8px 0;
"
>

<input
type="radio"
name="addr"
value="${index}"
${index === 0 ? "checked":""}
>

<b>
${address.label}
</b>

—

${address.detail}

</label>

`
).join("")}

</div>


<h3>
💳 Payment Method
</h3>


<div class="payment-options">

<button
class="payment-option selected"
data-pay="cod"
>
Cash on Delivery
</button>

<button
class="payment-option"
data-pay="upi"
>
UPI
</button>

<button
class="payment-option"
data-pay="card"
>
Credit / Debit Card
</button>

<button
class="payment-option"
data-pay="netbanking"
>
Net Banking
</button>

</div>


<div
id="cardFields"
class="hidden"
>

<input
placeholder="Card Number"
>

<input
placeholder="MM / YY"
>

<input
placeholder="CVV"
>

</div>


<div class="checkout-total">

Payable:
${money(total)}

</div>


<button
id="placeOrderBtn"
class="primary-btn full"
>
🚀 Place Order
</button>

`;


document
.querySelectorAll("[data-pay]")
.forEach(button => {

button.onclick =
function(){

document
.querySelectorAll("[data-pay]")
.forEach(
x =>
x.classList.remove("selected")
);

button.classList.add(
"selected"
);

selectedPayment =
button.dataset.pay;

$("cardFields")
.classList.toggle(
"hidden",
selectedPayment !== "card"
);

};

});


$("placeOrderBtn").onclick =
function(){

placeOrder(total);

};


$("checkoutModal")
.classList.add("open");

}
/* =========================
   PLACE ORDER
   ========================= */

function placeOrder(total){

const addressInput =
$("checkoutContent")
.querySelector(
'input[name="addr"]:checked'
);


const addressIndex =
addressInput
?
Number(addressInput.value)
:
0;


const createdAt =
Date.now();


const orderId =
"GP" +
String(createdAt)
.slice(-8);


const paid =
selectedPayment === "cod"
?
0
:
total;


const pending =
Math.max(
0,
total - paid
);


const order = {

id:orderId,

date:
new Date(
createdAt
).toLocaleString(
"en-IN"
),

createdAt,

status:
"Ordered",

items:
cart.map(item => ({

id:item.id,

name:item.name,

price:item.price,

quantity:item.quantity,

img:item.img

})),

total,

paid,

pending,

paymentMethod:
selectedPayment,

address:
addresses[addressIndex]

};


orders.unshift(order);

cart = [];

coupon = 0;

saveData();

updateCounts();

renderCart();

renderProfile();

$("checkoutModal")
.classList.remove("open");

closeDrawer("cartDrawer");

toast(
`✅ Order ${orderId} placed successfully`
);

showSection("profile");

const orderTab =
document.querySelector(
'[data-tab="orders"]'
);

if(orderTab)
orderTab.click();

}


/* =========================
   ORDER TRACKING
   ========================= */

function getOrderStatus(order){

const age =
Date.now() -
order.createdAt;


/*
  Demo tracking:
  0-30 sec = Ordered
  30-90 sec = Shipped
  90+ sec = Delivered
*/

if(age > 90000)
return 2;

if(age > 30000)
return 1;

return 0;

}


function statusText(status){

return [

"Ordered",

"Shipped",

"Delivered"

][status];

}


/* =========================
   ORDERS TAB
   ========================= */

function renderOrders(){

const container =
$("tab-orders");

if(!container) return;


if(!orders.length){

container.innerHTML = `

<div class="order-card">

<h3>
No orders yet
</h3>

<p class="muted">
Your purchased products will appear here after checkout.
</p>

</div>

`;

return;

}


container.innerHTML =
orders.map(order => {

const status =
getOrderStatus(order);


return `

<div class="order-card">


<div class="order-head">

<div>

<b>
${order.id}
</b>

<div class="muted">
${order.date}
</div>

</div>

<span class="status">
${statusText(status)}
</span>

</div>


<div class="tracker">

${[
"Ordered",
"Shipped",
"Delivered"
]
.map(
(step,index) => `

<div
class="
track-step
${index < status ? "done":""}
${index === status ? "current":""}
"
>

${index < status ? "✓ ":""}

${step}

</div>

`
)
.join("")}

</div>


<div class="order-items">

${order.items.map(item => `

<div class="mini-item">

<img
src="${item.img}"
alt="${item.name}"
>

<div>

<b>
${item.name}
</b>

<small>
Qty ${item.quantity}
<br>
${money(
item.price *
item.quantity
)}
</small>

</div>

</div>

`).join("")}

</div>


<div class="order-head">

<b>
Total:
${money(order.total)}
</b>

<span>
Payment:
${order.paymentMethod}
</span>

</div>


<p class="muted">

Delivery:
${order.address.label}
—
${order.address.detail}

</p>


</div>

`;

}).join("");

}

 /* =========================
   PAYMENTS TAB
   ========================= */

function renderPayments(){

const container =
$("tab-payments");

if(!container) return;


const total =
orders.reduce(
(sum,order) =>
sum + order.total,
0
);


const paid =
orders.reduce(
(sum,order) =>
sum + order.paid,
0
);


const pending =
orders.reduce(
(sum,order) =>
sum + order.pending,
0
);


container.innerHTML = `

<div class="payment-summary">

<div class="money-box">

<small>
Total Orders Value
</small>

<br>

<b>
${money(total)}
</b>

</div>


<div class="money-box">

<small>
Paid
</small>

<br>

<b>
${money(paid)}
</b>

</div>


<div class="money-box">

<small>
Payment Pending
</small>

<br>

<b>
${money(pending)}
</b>

</div>

</div>


${
orders.length

?

orders.map(order => `

<div class="payment-card">

<div class="order-head">

<b>
${order.id}
</b>

<span>
${order.paymentMethod}
</span>

</div>


<p>

Total:
${money(order.total)}

·

Paid:
${money(order.paid)}

·

<span class="pending">

Pending:
${money(order.pending)}

</span>

</p>

</div>

`).join("")

:

`

<div class="payment-card">

No payment history yet.

</div>

`

}

`;

}


/* =========================
   ADDRESS TAB
   ========================= */

function renderAddresses(){

const container =
$("tab-addresses");

if(!container) return;


container.innerHTML =

addresses.map(
(address,index) => `

<div class="address-card">

<div>

<b>
📍 ${address.label}
</b>

<p class="muted">
${address.detail}
</p>

</div>

<button
class="danger-btn small"
onclick="deleteAddress(${index})"
>
Delete
</button>

</div>

`
).join("")

+

`

<button
class="primary-btn"
onclick="addAddress()"
>
+ Add Address
</button>

`;

}


function addAddress(){

const label =
prompt(
"Address label (Home / Office)"
);

if(!label) return;


const detail =
prompt(
"Full delivery address"
);

if(!detail) return;


addresses.push({

label,

detail

});


saveData();

renderAddresses();

toast(
"✅ Address added"
);

}


function deleteAddress(index){

if(addresses.length <= 1){

toast(
"Keep at least one address"
);

return;

}


addresses.splice(
index,
1
);

saveData();

renderAddresses();

toast(
"Address deleted"
);

        }

/* =========================
   PROFILE
   ========================= */

function renderProfile(){

if(!account) return;


$("profileName")
.textContent =
account.name ||
"Gadget User";


$("profileContact")
.textContent =
`${account.email || ""} · ${account.phone || ""}`;


$("profilePhoto").src =
account.photo ||

`https://ui-avatars.com/api/?name=${encodeURIComponent(
account.name || "Gadget User"
)}&background=ff6a00&color=fff&size=240`;


renderOrders();

renderPayments();

renderAddresses();

}


/* =========================
   PROFILE TABS
   ========================= */

document
.querySelectorAll(".profile-tab")
.forEach(button => {

button.onclick =
function(){

document
.querySelectorAll(".profile-tab")
.forEach(
x =>
x.classList.remove("active")
);

document
.querySelectorAll(".profile-content")
.forEach(
x =>
x.classList.add("hidden")
);

button.classList.add(
"active"
);

$("tab-" + button.dataset.tab)
.classList.remove("hidden");

};

});


/* =========================
   EDIT PROFILE
   ========================= */

function editProfile(){

$("editProfileBox")
.classList.remove("hidden");


$("editName").value =
account.name || "";


$("editEmail").value =
account.email || "";


$("editPhone").value =
account.phone || "";

}


$("editProfileBtn").onclick =
editProfile;


$("editProfileBtn2").onclick =
editProfile;


$("cancelProfile").onclick =
function(){

$("editProfileBox")
.classList.add("hidden");

};


$("saveProfile").onclick =
function(){

account.name =
$("editName")
.value
.trim();


account.email =
$("editEmail")
.value
.trim();


account.phone =
$("editPhone")
.value
.trim();


saveData();

renderProfile();

$("editProfileBox")
.classList.add("hidden");

toast(
"✅ Profile updated"
);

};


/* =========================
   PROFILE PHOTO
   ========================= */

$("photoInput").onchange =
function(e){

const file =
e.target.files[0];

if(!file) return;


const reader =
new FileReader();


reader.onload =
function(){

account.photo =
reader.result;

saveData();

renderProfile();

toast(
"📷 Profile photo updated"
);

};


reader.readAsDataURL(file);

};


/* =========================
   LOGOUT
     ========================= */

$("logoutBtn").onclick =
function(){

if(
confirm(
"Logout from GadgetPoint?"
)
){

localStorage.removeItem(
"gadgetpoint_account"
);

account = null;

initAuth();

}

};


/* =========================
   MOBILE MENU
   ========================= */

$("mobileMenu").onclick =
function(){

$("navLinks")
.classList.toggle(
"open"
);

};


/* =========================
   TOP BUTTON
   ========================= */

$("topBtn").onclick =
function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


window.addEventListener(
"scroll",
function(){

if(
window.scrollY > 500
){

$("topBtn")
.style.display =
"block";

}else{

$("topBtn")
.style.display =
"none";

}

});


/* =========================
   FEATURED PRODUCTS
   ========================= */

function renderFeatured(){

renderProducts(
"featuredGrid",
products.slice(0,8)
);

}


/* =========================
   INITIAL LOAD
   ========================= */

renderCategories();

renderFeatured();

renderProducts();

updateCounts();

renderCart();

renderWishlist();

initAuth();


/* =========================
   LIVE ORDER STATUS REFRESH
   ========================= */

setInterval(
function(){

if(
account &&
orders.length
){

renderOrders();

}

},
5000
);
  
