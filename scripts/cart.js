import navbar from "/navbar/navbar.js"
    
document.getElementById("navbar").innerHTML=navbar()
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

import footer from "/navbar/footer.js"
    
    document.getElementById("footer").innerHTML=footer()

let cart=JSON.parse(localStorage.getItem("cart")) || []
console.log(cart)
cart.map(function(el,index){
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.image
    let pr=document.createElement("div")
    let pricediv=document.createElement("div")
    let price=document.createElement("p")
    price.innerText=`M.R.P. ${el.rupee}`
    let product=document.createElement("p")
    product.innerText=el.product
    let removediv=document.createElement("div")
    let remove=document.createElement("button")
    remove.innerText="Remove from cart"
    remove.addEventListener("click",function(){
        removepro(el,index)
    })
    pr.id="pr"
    pricediv.append(price)
    removediv.append(remove)
    pr.append(pricediv,removediv)
    div.append(img,product,pr)
document.querySelector("#container").append(div)
})

var totalmoney=JSON.parse(localStorage.getItem("money")) 
function removepro(el,index){
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
console.log(el.rupee)
let word=el.rupee
  let bag=""
  for(var i=1;i<word.length;i++){
bag=bag+word[i]
  }
//  console.log(bag)
  totalmoney=totalmoney-Number(bag)
  localStorage.setItem("money",JSON.stringify(totalmoney))
    window.location.reload()
}
console.log(totalmoney)
let div =document.createElement("div")
let deli=document.createElement("P")

document.querySelector("#sub").append(totalmoney)
document.querySelector("#tot").append(totalmoney+Number(39))

if((totalmoney+Number(39))<399){
  document.querySelector("#extra").innerText="Your cart value is less than ₹399 & delivery charge applies"
}
else{
  document.querySelector("#extra").innerText="Congratulations, Your delivery charge is waived off!!!"
}