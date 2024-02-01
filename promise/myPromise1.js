function myPromise(x){
  return new Promise((resolve,reject)=>{
    if(x>5){
      resolve("sucess")
    }
    else{
      reject("error")
    }
  })
} 

myPromise(2).then((res)=>{
  console.log(res)
}).catch((res)=>{
  console.log(res)
})