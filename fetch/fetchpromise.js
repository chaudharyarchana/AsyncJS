const p1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
const p2 = fetch('https://dummyjson.com/products/1')

p1.then((res)=> res.json())
.then((res)=>{
  console.log(res)
  return p2})
.then((res)=> res.json())
.then((res)=>console.log(res))