const p1 = fetch('https://dummyjson.com/products/1')
const p2 = fetch('https://dummyjson.com/products/2')
const p3 = fetch('https://dummyjson.com/products/3')

Promise.all([p1,p2,p3]).then(([r1,r2,r3])=>{
   return Promise.all([r1.json(),r2.json(),r3.json()])
}).then(([res1,res2,res3])=>{
  console.log(res1,res2,res3)
})