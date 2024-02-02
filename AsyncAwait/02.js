async function myfun(x){
    console.log("hello 1")
   await fetch('https://dummyjson.com/users')
   console.log("hello 2")
 let fetchX = await fetch(`https://dummyjson.com/users/${x}`)
  fetchX = await fetchX.json()
 console.log(fetchX)
}

myfun(2)