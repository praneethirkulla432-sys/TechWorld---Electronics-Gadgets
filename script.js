const products = [
{id:1,name:"iPhone 15 Pro",brand:"Apple",price:99999,oldPrice:109999,category:"phones",rating:4.8,stock:12,emoji:"📱",image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85",tag:"Bestseller",specs:["6.1-inch Super Retina XDR","A17 Pro chip","48MP camera","256GB storage"]},
{id:2,name:"Galaxy S24 Ultra",brand:"Samsung",price:124999,oldPrice:134999,category:"phones",rating:4.9,stock:9,emoji:"📱",image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",tag:"Top Rated",specs:["6.8-inch QHD+ display","Snapdragon processor","200MP camera","256GB storage"]},
{id:3,name:"Pixel 9 Pro",brand:"Google",price:99999,oldPrice:109999,category:"phones",rating:4.7,stock:15,emoji:"📱",image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",tag:"New",specs:["6.3-inch OLED","Tensor G4","50MP camera","256GB storage"]},
{id:4,name:"OnePlus 13",brand:"OnePlus",price:69999,oldPrice:74999,category:"phones",rating:4.6,stock:18,emoji:"📱",image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85",tag:"Deal",specs:["6.82-inch AMOLED","Snapdragon 8 Elite","50MP triple camera","256GB storage"]},
{id:5,name:"MacBook Pro 16",brand:"Apple",price:249999,oldPrice:269999,category:"laptops",rating:4.9,stock:6,emoji:"💻",image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",tag:"Pro Choice",specs:["16.2-inch Liquid Retina XDR","M4 Pro chip","24GB RAM","512GB SSD"]},
{id:6,name:"MacBook Air 15",brand:"Apple",price:134999,oldPrice:149999,category:"laptops",rating:4.8,stock:11,emoji:"💻",image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",tag:"Popular",specs:["15.3-inch Liquid Retina","M3 chip","16GB RAM","512GB SSD"]},
{id:7,name:"HP Spectre x360",brand:"HP",price:119999,oldPrice:129999,category:"laptops",rating:4.5,stock:8,emoji:"💻",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",tag:"2-in-1",specs:["14-inch OLED touch","Intel Core Ultra","16GB RAM","1TB SSD"]},
{id:8,name:"Sony WH-1000XM5",brand:"Sony",price:29999,oldPrice:34999,category:"audio",rating:4.8,stock:20,emoji:"🎧",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",tag:"Bestseller",specs:["Industry-leading ANC","30-hour battery","Multipoint connection","Hi-Res Audio"]},
{id:9,name:"AirPods Pro 2",brand:"Apple",price:24999,oldPrice:26999,category:"audio",rating:4.7,stock:22,emoji:"🎧",image:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",tag:"Popular",specs:["Active Noise Cancellation","USB-C case","Adaptive Audio","Up to 6h listening"]},
{id:10,name:"Galaxy Watch 7",brand:"Samsung",price:29999,oldPrice:32999,category:"wearables",rating:4.5,stock:14,emoji:"⌚",image:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=85",tag:"New",specs:["44mm AMOLED","Health tracking","GPS","Up to 40h battery"]},
{id:11,name:"Pixel Watch 3",brand:"Google",price:39999,oldPrice:42999,category:"wearables",rating:4.6,stock:10,emoji:"⌚",image:"https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=85",tag:"Smart Pick",specs:["45mm Actua display","Fitness tracking","GPS","24h battery"]},
{id:12,name:"Anker 65W GaN Charger",brand:"Anker",price:3999,oldPrice:4999,category:"accessories",rating:4.7,stock:30,emoji:"🔌",tag:"Deal",specs:["65W fast charging","GaN technology","3 USB ports","Travel compact"]},
{id:13,name:"Logitech MX Master 3S",brand:"Logitech",price:8999,oldPrice:9999,category:"accessories",rating:4.6,stock:17,emoji:"🖱️",tag:"Popular",specs:["8K DPI sensor","Quiet clicks","Multi-device","USB-C charging"]},
{id:14,name:"Samsung T7 Shield 1TB",brand:"Samsung",price:10999,oldPrice:12999,category:"accessories",rating:4.8,stock:16,emoji:"💾",tag:"Fast",specs:["1TB capacity","USB 3.2 Gen 2","1050MB/s read","Rugged design"]},
{id:15,name:"Apple Watch SE",brand:"Apple",price:24999,oldPrice:27999,category:"wearables",rating:4.6,stock:18,emoji:"⌚",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",tag:"Great Value",specs:["Retina display","Activity and workout tracking","Fall detection","Up to 18h battery"]},
{id:16,name:"Garmin Venu 3",brand:"Garmin",price:44999,oldPrice:49999,category:"wearables",rating:4.8,stock:7,emoji:"⌚",image:"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=900&q=85",tag:"Fitness Pick",specs:["AMOLED touchscreen","Advanced health tracking","Built-in GPS","Up to 14 days battery"]},
{id:17,name:"Fitbit Charge 6",brand:"Fitbit",price:14999,oldPrice:16999,category:"wearables",rating:4.4,stock:21,emoji:"⌚",image:"https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=900&q=85",tag:"Fitness Tracker",specs:["Color touchscreen","Heart rate and sleep tracking","GPS connectivity","Up to 7 days battery"]}
];

const state = {
  cart: JSON.parse(localStorage.getItem("tw_cart") || "[]"),
  user: JSON.parse(localStorage.getItem("tw_user") || "null"),
  wishlist: JSON.parse(localStorage.getItem("tw_wishlist") || "[]"),
  orders: JSON.parse(localStorage.getItem("tw_orders") || "[]")
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => "₹" + Number(n).toLocaleString("en-IN");
const save = () => {
  localStorage.setItem("tw_cart", JSON.stringify(state.cart));
  localStorage.setItem("tw_user", JSON.stringify(state.user));
  localStorage.setItem("tw_wishlist", JSON.stringify(state.wishlist));
  localStorage.setItem("tw_orders", JSON.stringify(state.orders));
};

function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(window.__toast); window.__toast=setTimeout(()=>t.classList.remove("show"),2600); }
function product(id){ return products.find(p=>p.id===Number(id)); }
function stars(r){ return "★".repeat(Math.round(r)) + "☆".repeat(5-Math.round(r)); }
function productVisual(p){ return p.image?`<img src="${p.image}" alt="${p.name}" loading="lazy">`:`<span class="emoji" aria-hidden="true">${p.emoji}</span>`; }

function updateHeader(){
  $("#cartCount").textContent = state.cart.reduce((a,i)=>a+i.qty,0);
  const area=$("#authArea");
  if(state.user){
    const initials=(state.user.first[0]+state.user.last[0]).toUpperCase();
    area.innerHTML=`<div class="auth-mini"><a class="icon-btn" href="#account" title="Account">${initials}</a><span class="user-name">${state.user.first}</span><button class="icon-btn" id="logoutBtn" title="Logout"><i class="fa-solid fa-right-from-bracket"></i></button></div>`;
    $("#logoutBtn").onclick=()=>{state.user=null;save();toast("You have been logged out.");location.hash="#home";updateHeader();};
  }else{
    area.innerHTML=`<a class="btn btn-primary" style="padding:9px 13px;font-size:11px" href="#login">Login</a>`;
  }
}

function productCard(p){
  const wished=state.wishlist.includes(p.id);
  return `<article class="product-card">
    <div class="product-img"><span class="badge">${p.tag}</span><button class="wish-btn ${wished?"active":""}" onclick="toggleWish(${p.id})">${wished?"♥":"♡"}</button>${productVisual(p)}</div>
    <div class="product-body"><div class="product-brand">${p.brand}</div><a href="#detail/${p.id}" class="product-name">${p.name}</a>
    <div class="rating">${stars(p.rating)} <span>${p.rating}</span></div>
    <div class="price-row"><div><span class="price">${money(p.price)}</span><span class="old-price">${money(p.oldPrice)}</span></div><button class="add-btn" onclick="addToCart(${p.id})" title="Add to cart"><i class="fa-solid fa-cart-plus"></i></button></div></div>
  </article>`;
}

function renderFeatured(){ $("#featuredGrid").innerHTML=products.slice(0,8).map(productCard).join(""); }

function renderProducts(){
  const q=($("#productSearch")?.value||"").toLowerCase().trim();
  const cat=$("#categoryFilter")?.value||"all", brand=$("#brandFilter")?.value||"all", sort=$("#sortFilter")?.value||"featured";
  const max=Number($("#priceFilter")?.value||300000), four=$("#fourPlus")?.checked, stock=$("#inStock")?.checked;
  const categoryNames={phones:"Smartphones",laptops:"Laptops & Tablets",audio:"Audio",wearables:"Wearables",accessories:"Accessories"};
  $("#products .page-title h1").textContent=categoryNames[cat]||"All Products";
  let list=products.filter(p=>(!q||`${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q))&&(cat==="all"||p.category===cat)&&(brand==="all"||p.brand===brand)&&p.price<=max&&(!four||p.rating>=4)&&(!stock||p.stock>0));
  if(sort==="low")list.sort((a,b)=>a.price-b.price); if(sort==="high")list.sort((a,b)=>b.price-a.price); if(sort==="rating")list.sort((a,b)=>b.rating-a.rating);
  $("#productCount").textContent=`Showing ${list.length} product${list.length===1?"":"s"}`;
  $("#productsGrid").innerHTML=list.length?list.map(productCard).join():`<div class="empty" style="grid-column:1/-1"><i class="fa-solid fa-box-open"></i><h2>No products found</h2><p>Try changing your filters or search term.</p></div>`;
  $("#priceValue").textContent=money(max);
}

function resetFilters(){ $("#productSearch").value="";$("#categoryFilter").value="all";$("#brandFilter").value="all";$("#sortFilter").value="featured";$("#priceFilter").value=300000;$("#fourPlus").checked=false;$("#inStock").checked=false;renderProducts(); }

function addToCart(id){
  const item=state.cart.find(i=>i.id===id); if(item)item.qty++; else state.cart.push({id,qty:1});
  save();updateHeader();toast("Product added to your cart.");
}
function changeQty(id,delta){ const i=state.cart.find(x=>x.id===id); if(!i)return; i.qty+=delta; if(i.qty<=0)state.cart=state.cart.filter(x=>x.id!==id);save();updateHeader();renderCart(); }
function removeCart(id){state.cart=state.cart.filter(x=>x.id!==id);save();updateHeader();renderCart();toast("Item removed from cart.");}
function toggleWish(id){ const i=state.wishlist.indexOf(id); if(i>=0){state.wishlist.splice(i,1);toast("Removed from wishlist.");}else{state.wishlist.push(id);toast("Added to wishlist.");}save();renderProducts();renderFeatured(); }

function renderCart(){
  const el=$("#cartContent");
  if(!state.cart.length){el.innerHTML=`<div class="empty"><i class="fa-solid fa-cart-shopping"></i><h2>Your cart is empty</h2><p>Add some tech products and they will appear here.</p><a class="btn btn-primary" href="#products">Browse Products</a></div>`;return;}
  let subtotal=0;
  const items=state.cart.map(i=>{const p=product(i.id);subtotal+=p.price*i.qty;return `<div class="cart-item"><div class="mini-img">${p.emoji}</div><div><h3>${p.name}</h3><p>${p.brand} • ${money(p.price)} each</p></div><div class="cart-actions"><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${i.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div><b>${money(p.price*i.qty)}</b><button class="cart-remove" onclick="removeCart(${p.id})">Remove</button></div></div>`}).join("");
  const shipping=subtotal>=999?0:79, total=subtotal+shipping;
  el.innerHTML=`<div class="cart-layout"><div class="card">${items}</div><div class="card summary"><h2>Order Summary</h2><div class="summary-line"><span>Subtotal</span><b>${money(subtotal)}</b></div><div class="summary-line"><span>Shipping</span><b>${shipping?money(shipping):"FREE"}</b></div><div class="summary-line"><span>Tax</span><b>Included</b></div><div class="summary-line summary-total"><span>Total</span><b>${money(total)}</b></div><a class="btn btn-primary full" href="#checkout">Proceed to Checkout</a><a class="btn btn-outline full" href="#products">Continue Shopping</a></div></div>`;
}

function renderDetail(id){
  const p=product(id); const el=$("#detailContent");
  if(!p){el.innerHTML=`<div class="empty"><h2>Product not found</h2><a class="btn btn-primary" href="#products">Back to Products</a></div>`;return;}
  el.innerHTML=`<div class="detail-grid"><div><a href="#products" class="eyebrow">← BACK TO PRODUCTS</a><div class="detail-image">${productVisual(p)}</div></div><div class="detail-info"><div class="product-brand">${p.brand} • ${p.category}</div><h1>${p.name}</h1><div class="rating">${stars(p.rating)} <span>${p.rating} (${Math.floor(p.rating*210)} reviews)</span></div><div class="price">${money(p.price)} <span class="old-price">${money(p.oldPrice)}</span></div><p>Experience dependable performance and modern design with this TechWorld featured device. Product information shown here is demo content for the frontend internship project.</p><table class="spec-table">${p.specs.map((s,i)=>`<tr><td>${["Display","Performance","Camera / Features","Storage / Battery"][i]||"Specification"}</td><td>${s}</td></tr>`).join("")}</table><p><b>Stock:</b> ${p.stock>0?`<span style="color:#168858">${p.stock} units available</span>`:"Out of stock"}</p><div class="qty-row"><div class="qty"><button onclick="detailQty(-1)">−</button><span id="detailQty">1</span><button onclick="detailQty(1)">+</button></div><button class="btn btn-primary" onclick="addDetailToCart(${p.id})">Add to Cart <i class="fa-solid fa-cart-plus"></i></button><button class="icon-btn" onclick="toggleWish(${p.id})">♡</button></div><button class="btn btn-outline full" onclick="buyNow(${p.id})">Buy Now</button></div></div>`;
  window.__detailQty=1;
}
function detailQty(d){window.__detailQty=Math.max(1,(window.__detailQty||1)+d);$("#detailQty").textContent=window.__detailQty}
function addDetailToCart(id){for(let i=0;i<(window.__detailQty||1);i++)addToCart(id);window.__detailQty=1}
function buyNow(id){addDetailToCart(id);location.hash="#checkout"}

function renderCheckout(){
  if(!state.cart.length){$("#checkoutSummary").innerHTML=`<div class="empty"><h2>Your cart is empty</h2><a class="btn btn-primary" href="#products">Shop Now</a></div>`;return;}
  let subtotal=state.cart.reduce((s,i)=>s+product(i.id).price*i.qty,0), shipping=subtotal>=999?0:79;
  $("#checkoutSummary").innerHTML=`<h2>Order Summary</h2>${state.cart.map(i=>{const p=product(i.id);return `<div class="summary-line"><span>${p.name} × ${i.qty}</span><b>${money(p.price*i.qty)}</b></div>`}).join("")}<div class="summary-line"><span>Shipping</span><b>${shipping?"₹79":"FREE"}</b></div><div class="summary-line summary-total"><span>Total</span><b>${money(subtotal+shipping)}</b></div>`;
}

function renderAccount(){
  const el=$("#accountContent");
  if(!state.user){el.innerHTML=`<div class="empty"><i class="fa-solid fa-user"></i><h2>Login required</h2><p>Sign in or create a new account to view your profile and orders.</p><a class="btn btn-primary" href="#login">Login</a> <a class="btn btn-outline" href="#register">Create Account</a></div>`;return;}
  const orders=state.orders;
  el.innerHTML=`<div class="account-head"><div><span class="eyebrow" style="color:#9eeeff">MY TECHWORLD</span><h1>Hello, ${state.user.first}!</h1><p>${state.user.email}</p></div><div class="account-avatar">${(state.user.first[0]+state.user.last[0]).toUpperCase()}</div></div><div class="account-grid"><div class="card"><span class="eyebrow">ORDERS</span><h2>${orders.length}</h2><p style="font-size:11px;color:var(--muted)">Completed demo orders</p></div><div class="card"><span class="eyebrow">WISHLIST</span><h2>${state.wishlist.length}</h2><p style="font-size:11px;color:var(--muted)">Saved products</p></div><div class="card"><span class="eyebrow">ACCOUNT</span><h2>Active</h2><p style="font-size:11px;color:var(--muted)">Frontend demo session</p></div></div><div class="card" style="margin-top:20px"><h2 style="font-size:18px">Order history</h2>${orders.length?orders.map(o=>`<div class="cart-item"><div class="mini-img">📦</div><div><h3>Order ${o.id}</h3><p>${o.date} • ${o.items} item(s) • ${o.payment.toUpperCase()}</p></div><b>${money(o.total)}</b></div>`).join(""):`<p style="color:var(--muted);font-size:12px">No orders yet. Your completed checkout orders will appear here.</p>`}</div>`;
}

function showPage(route){
  const base=route.split("/")[0]||"home";
  const categoryRoute=["phones","laptops","audio","wearables","accessories"].includes(base);
  const page=categoryRoute?"products":base;
  $$(".page-section").forEach(s=>s.classList.add("hidden"));
  const target=$("#"+(page==="detail"?"detail":page));
  if(target)target.classList.remove("hidden");
  if(page==="products"){if(categoryRoute)$("#categoryFilter").value=base;renderProducts();}
  if(base==="detail")renderDetail(route.split("/")[1]);
  if(base==="cart")renderCart();
  if(base==="checkout")renderCheckout();
  if(base==="account")renderAccount();
  $$(".nav-links a").forEach(a=>a.classList.toggle("active",categoryRoute?a.dataset.category===base:a.dataset.route===base));
  window.scrollTo({top:0,behavior:"smooth"});
  $("#navLinks").classList.remove("open");
}
function route(){const hash=location.hash.replace("#","")||"home";showPage(hash)}

document.addEventListener("DOMContentLoaded",()=>{
  updateHeader();renderFeatured();renderProducts();route();
  $("#mobileToggle").onclick=()=>$("#navLinks").classList.toggle("open");
  $("#searchBtn").onclick=()=>{location.hash="#products";setTimeout(()=>$("#productSearch").focus(),80)};
  ["productSearch","categoryFilter","brandFilter","sortFilter","priceFilter","fourPlus","inStock"].forEach(id=>{const e=$("#"+id);if(e)e.addEventListener("input",renderProducts);});
  $("#clearFilters").onclick=resetFilters;
  document.addEventListener("click",e=>{
    const cat=e.target.closest("[data-category-link]"); if(cat){setTimeout(()=>{const v=cat.dataset.categoryLink;$("#categoryFilter").value=v;renderProducts()},50)}
    const fcat=e.target.closest("[data-footer-cat]"); if(fcat){setTimeout(()=>{const v=fcat.dataset.footerCat;$("#categoryFilter").value=v;renderProducts()},50)}
  });
  $("#loginForm").addEventListener("submit",e=>{e.preventDefault();const fd=new FormData(e.target);state.user={first:"TechWorld",last:"User",email:fd.get("email"),password:fd.get("password")};save();toast("Login successful.");location.hash="#account";updateHeader();});
  $("#registerForm").addEventListener("submit",e=>{e.preventDefault();const fd=new FormData(e.target);if(fd.get("password")!==fd.get("confirm")){toast("Passwords do not match.");return}state.user={first:fd.get("first"),last:fd.get("last"),email:fd.get("email"),password:fd.get("password")};save();toast("Account created successfully.");location.hash="#account";updateHeader();});
  $("#checkoutForm").addEventListener("submit",e=>{e.preventDefault();if(!state.user){toast("Please login before placing an order.");location.hash="#login";return}let subtotal=state.cart.reduce((s,i)=>s+product(i.id).price*i.qty,0),shipping=subtotal>=999?0:79;const fd=new FormData(e.target);state.orders.unshift({id:"TW"+Date.now().toString().slice(-7),date:new Date().toLocaleDateString("en-IN"),items:state.cart.reduce((s,i)=>s+i.qty,0),total:subtotal+shipping,payment:fd.get("payment")});state.cart=[];save();updateHeader();e.target.reset();$("#checkoutSummary").innerHTML=`<div class="success"><h2>Order placed successfully 🎉</h2><p>Your demo order has been saved locally in your account.</p><a class="btn btn-primary" href="#account">View My Orders</a></div>`;toast("Order placed successfully.");});
  $("#contactForm").addEventListener("submit",e=>{e.preventDefault();e.target.reset();toast("Thanks! Your message was submitted in this demo.");});
});
window.addEventListener("hashchange",route);
