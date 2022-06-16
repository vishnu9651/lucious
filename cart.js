let cart=JSON.parse(localStorage.getItem("cart")) || []
console.log(cart)
cart.map(function(el,index){
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.image
    let price=document.createElement("p")
    price.innerText=el.rupee;
    let product=document.createElement("p")
    product.innerText=el.product
    let remove=document.createElement("button")
    remove.innerText="remove from cart"
    remove.addEventListener("click",function(){
        removepro(el,index)
    })
    div.append(img,product,price,remove)
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