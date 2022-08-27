let promise = new Promise((resolve,reject)=> {
 setTimeout(() => reject(new Error('Igor')),1000)
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})


setTimeout(() =>console.log(promise),4000)