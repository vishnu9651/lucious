var items=[
    {
        name:"Today's Deals",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/59724ce1-1f3d-f1f4-c688-c05a0005c8de/original/Circle@3x-16.png?format=webp"
    },
     {
name:"chicken",
img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c777a59e-f2f7-dd37-9ba0-7f385aed3eb3/original/Circle@3x.png?format=webp"
},
{
  name:"fish",
  img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e13f894d-d51e-beea-4ef5-aab1a193d373/original/Circle@3x-13.png?format=webp"  
},
{
    name:"mutton",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/a472a605-1497-bade-9e68-87914d2aebb6/original/Circle@3x-22.png?format=webp"
},
{
    name:"Ready to cook",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/450e3217-59ac-8145-3bee-296e729f03bf/original/Circle@3x-17.png?format=webp"
},
{
    name:"Prawns",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f7ef9035-9baa-b9b5-d56d-97059ffe6c39/original/Circle@3x-18.png?format=webp"
},
{
    name:"cold cuts",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2569efa2-90ca-533c-e7c2-48330c4b3a59/original/Circle@3x-21.png?format=webp"
},
{
    name:"Spreads",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7b500ec8-8001-436b-74ca-430fd4e2ff0b/original/Circle@3x-14.png?format=webp"
},
{name:"Eggs",
img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/27cf80b9-2a8f-d70d-7695-8142c85e5bcb/original/Circle@3x-2.png?format=webp"
},
{
    name:"kabab&tandoor",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c7cde9d8-4e31-8ea5-79a4-cce48c7ed109/original/Circle@3x-15.png?format=webp"
},
{
    name:"combos",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3130cc9b-71e5-ff33-d413-9fcda531afac/original/Circle@3x-20.png?format=webp"
},
{name:"lunchbox spsl",
img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/fc961d16-990b-31de-e3ec-648858625bed/original/v_copy_3@3x_(2).png?format=webp"

},
{name:"snacks",
img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/6455adfa-c60e-6c6a-9a60-a9a291bf6121/original/Circle@3x-17.png?format=webp"

}
]
items.map(function(elem){
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=elem.img
    let p=document.createElement("p")
    p.innerText=elem.name
    div.append(img,p)
    document.querySelector("#cate").append(div)
   
})

var products=[{
    "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c3e459e7-040b-1d2f-9eb2-db48437b49a6/original/ChickenLC.jpg",
    "product": "Chicken Curry Cut (Large Pcs)",
    "item-desc": "Half a chicken cut to chunky pieces including one leg, a wing without the tip, one breast quarter with backbone.",
    "net-weight": "Net wt: 500gms",
    "info-icon src": "https://www.licious.in/img/rebranding/info-dark.png",
    "gross-weight": "Gross: 526gms",
    "rupee": "₹155",
    "rupee 3": "₹155",
    "price": "",
    "offer-discount": ""
  },
  {
    "image": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_5785b9065d7e1/3/prod_display_image/1584770437.9208--2020-03-2111:30:37--738",
    "product": "Chicken Curry Cut (Small Pcs)",
    "item-desc": "Small pieces of bone-in & boneless chicken for curries",
    "net-weight": "Net wt: 500gms",
    "info-icon src": "https://www.licious.in/img/rebranding/info-dark.png",
    "gross-weight": "Gross: 526gms",
    "rupee": "₹155",
    "rupee 3": "₹155",
    "price": "",
    "offer-discount": ""
  },
 {     "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6e77cf6b-0739-4238-65d8-966209e5f7a5/original/Classic-Eggs---Pack-of-12-Hero-Shot.jpg",
     "product": "Classic Eggs - Pack Of 12",
     "item-desc": "White shell eggs laid naturally by healthy hens.",
    "net-weight": "",
    "info-icon src": "",
    "gross-weight": "Pieces: 12",
    "rupee": "₹106",
    "rupee 3": "",
    "price": "₹125",
    "offer-discount": "15% OFF"
  },
  {
    "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/60102695-3e5e-bd65-c64f-2379d1022d27/original/Crispy-Chicken-Wings-Tag_(1).jpg",
    "product": "Crispy Chicken Wings | Ready To Cook",
    "item-desc": "Chicken wings marinated in spices & coated in panko crumbs.",
    "net-weight": "Net wt: 225gms",
    "info-icon src": "https://www.licious.in/img/rebranding/info-dark.png",
    "gross-weight": "Pieces: 7-8",
    "rupee": "₹99",
    "rupee 3": "",
    "price": "₹119",
    "offer-discount": "17% OFF"
  },
  {
    "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/f79ad50f-d2ca-a298-4ab4-715214867e37/original/Classic-Eggs---Pack-of-6--Hero-Shot.jpg",
    "product": "Classic Eggs - Pack Of 6",
    "item-desc": "Pack of 6 naturally laid, white eggs from healthy hens",
    "net-weight": "",
    "info-icon src": "",
    "gross-weight": "Pieces: 6",
    "rupee": "₹65",
    "rupee 3": "₹65",
    "price": "",
    "offer-discount": ""
  },
  {
    "image": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_av4kgtb3l1h/3/prod_display_image/1631077851.1548--2021-09-0810:40:51--1818",
    "product": "Chicken Curry Cut (Small Pcs) - Large Pack",
    "item-desc": "Bone-in chunky pieces of skinless meat including Two leg, wing without tip, & breast quarter.",
    "net-weight": "Net wt: 1000gms",
    "info-icon src": "https://www.licious.in/img/rebranding/info-dark.png",
    "gross-weight": "Gross: 1026gms",
    "rupee": "₹359",
    "rupee 3": "₹359",
    "price": "",
    "offer-discount": ""
  },
  {
    "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6a6d3966-0568-b0ee-d1fc-0ba30b3203a1/original/Creamy-Afghani-Chicken-(Mini)-_-Tag.jpg",
    "product": "Creamy Afghani Chicken (Mini) | Ready to Cook",
    "item-desc": "Boneless pieces of chicken in a creamy marinade.",
    "net-weight": "Net wt: 225gms",
    "info-icon src": "https://www.licious.in/img/rebranding/info-dark.png",
    "gross-weight": "Pieces: 7-9",
    "rupee": "₹161",
    "rupee 3": "",
    "price": "₹169",
    "offer-discount": "5% OFF"
  },
  {
    "image": "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/f61d9b1b-19ff-2027-d87b-b5c39588b563/original/1582540374.0121--2020-02-2416_02_54--472.jpeg",
    "product": "Chicken Drumstick",
    "item-desc": "Bone-in, juicy meat from the lower leg with a unique flavour enhanced by the bone.",
    "net-weight": "Net wt: 450gms",
    "info-icon src": "https://www.licious.in/img/rebranding/info-dark.png",
    "gross-weight": "Gross: 600gms",
    "rupee": "₹225",
    "rupee 3": "",
    "price": "₹265",
    "offer-discount": "15% OFF"
  },
  {
    "image": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_c61k6uqaf5h/3/prod_display_image/1636891873.7065--2021-11-1417:41:13--1818",
    "product": "Chicken Breast-Boneless",
    "item-desc": "Tender, boneless fillets of chicken meat cut from the breast.",
    "net-weight": "Net wt: 400gms",
    "info-icon src": "https://www.licious.in/img/rebranding/info-dark.png",
    "gross-weight": "Gross: 500gms",
    "rupee": "₹229",
    "rupee 3": "₹229",
    "price": "",
    "offer-discount": ""
  },
  {
    "image": "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/e8b0900a-4c94-1711-5c1a-6417417b0f00/original/1600541292.3594--2020-09-2000_18_12--738.jpeg",
    "product": "Premium Chicken Curry Cut",
    "item-desc": "Half a chicken cut into a mix of boneless and bone-in pieces including two drumsticks and boneless breast.",
    "net-weight": "Net wt: 450gms",
    "info-icon src": "https://www.licious.in/img/rebranding/info-dark.png",
    "gross-weight": "Gross: 555gms",
    "rupee": "₹169",
    "rupee 3": "",
    "price": "₹199",
    "offer-discount": "15% OFF"
   }
]
  products.map(function(elem){
    let div=document.createElement("div")
    div.id="div"
    let img=document.createElement("img")
   img.src=elem.image
    
   // console.log(elem.rupee)
    let pname=document.createElement("h3")
    pname.innerText=elem.product
let dis=document.createElement("p")
dis.innerText=elem["item-desc"]
let wp=document.createElement("div")
wp.id="wp"
let weight=document.createElement("h4")
weight.innerText=elem["gross-weight"]

wp.append(weight)
//price,offer,addtocart
let poa=document.createElement("div")    
poa.id="poa"
let p=document.createElement("div")
    p.innerText=elem.rupee
    let disc=document.createElement("div")
    disc.innerText=elem["offer-discount"]
    disc.style.color="green"
    let cart=document.createElement("button")
    cart.addEventListener("click",function(){
      addtocart(elem)
    })    
 
    cart.innerText="ADD TO CART"
    cart.id="addcart"
    poa.append(p,disc,cart)
    div.append(img,pname,dis,wp,poa)
 
    document.querySelector("#products").append(div)
   
})
var totalmoney=JSON.parse(localStorage.getItem("money")) 

var data=JSON.parse(localStorage.getItem("cart")) || []
console.log("length",data.length)
document.querySelector("#number").append(data.length)
if(data.length>0){
  let cartval=document.getElementById("number")
  cartval.style.backgroundColor="yellow"
  cartval.style.height="15px"
  cartval.style.width="15px"
  cartval.style.borderRadius="15px"
}

function addtocart(elem){
  data.push(elem)
  let word=elem.rupee
  let bag=""
  for(var i=1;i<word.length;i++){
bag=bag+word[i]
  }
  console.log(bag)
  totalmoney=totalmoney+Number(bag)
 //
  localStorage.setItem("money",JSON.stringify(totalmoney))
  localStorage.setItem("cart",JSON.stringify(data))
  window.location.reload()
}

