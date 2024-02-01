const p1 = new Promise ((resolve)=>{
  setTimeout(()=>{
    resolve("i am resolved in 3 sec")
  },10000)
})

const p2 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("i am resolved after 7sec")
  },7000)
})

p1.then((res)=>{
  console.log(res)
  return p2
}).then((res)=>{
  console.log(res)
})