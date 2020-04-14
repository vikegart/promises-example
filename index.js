const p1 = () => new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(console.log(1));
    }, 1000);
})

const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(console.log(2));
        }, 500);
    })
} 

p1()
    .then(() => p2()) // then в себя принимает функцию, поэтому () => {} работает, а просто p2() - нет
    .then(res=>{console.log(res)})


    



//pending
//fulfiled 
    // - rejected
    // - resolved