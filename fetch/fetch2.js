const p1 = fetch('https://dummyjson.com/products');

function whichProduct(num){
  return fetch(`https://dummyjson.com/products/${num}`)
}

p1.then((res)=> res.json())
.then((res)=>{
  console.log(res)
  return whichProduct(2)
})
.then((res)=> res.json())
.then((res)=> console.log(res))