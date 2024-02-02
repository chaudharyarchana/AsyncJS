async function myFun(){
    let req1 =  await fetch('https://dummyjson.com/users')
    let req1Data = await req1.json()
    console.log(req1Data)
}

myFun()