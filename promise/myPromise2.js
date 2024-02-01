function myPromiseOne(x){
  return new Promise((resolve,reject)=>{
    if(x>3){
      resolve("x is greater than 3")
    }
    else{
      reject("x is smaller then 3")
    }
  })
}

function myPromiseTwo(y){
  return new Promise((resolve,reject)=>{
    if(y>5){
      resolve("y is greater than 5")
    }
    else{
      reject("y is smaller then 5")
    }
  })
}

myPromiseOne(30).then((res)=>{
  console.log(res)
 return myPromiseTwo(2)
}).then((res)=>{
  console.log(res)
  return myPromiseOne(1)
}).then((res)=>{
  console.log(res)
})
.catch((res)=>{
  console.log(res)
})