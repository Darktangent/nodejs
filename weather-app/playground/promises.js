var asyncAdd=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a==='number' && typeof b==='number'){
                resolve(a+b)
            } else{
                reject('Args must be numbers')
            }
        },1500)
    })
}
asyncAdd(10,9).then((result)=>{
    console.log('Result', result)
    return asyncAdd(result,33)
}).then((res)=>{
    console.log(res)
})
.catch(err=>console.log(err))


// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         //resolve('Hey it worked')
//         reject('Unable to fulfill promise')
//     },2500)
    
// })

// somePromise.then((message)=>{
//     console.log('Success:', message)
// })
// .catch(err=>console.log('Error:',err))


