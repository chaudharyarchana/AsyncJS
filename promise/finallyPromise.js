//In this example i will use the .then.catch and .finally method - finally method runs after the promise is resolved/rejected.

const p1 = new Promise ((resolve)=>{
  setTimeout(()=>{
    resolve("hey i am promise")
  },2000)
})

p1.then((res)=>console.log(res))
  .finally(()=> console.log("promise has been finished"))