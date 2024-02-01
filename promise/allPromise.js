const p1 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("promise 1")
  },5000)
})

const p2 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("promise 2")
  },8000)
})

Promise.all([p1,p2]).then(([res1,res2])=>{
  console.log(res1,res2)
})