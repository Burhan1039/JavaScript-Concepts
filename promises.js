const cart=["shoes","kurta","shirts"];

const promise = createOrder(cart);
promise.then(function(orderid){
    console.log(orderid);
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        if(!validatecart(cart)){
            const err=new Error("cart is not valid");
            reject(err);
        }
        const orderid="12334";
        if(orderid){
            resolve(orderid)
        }
    })
    return pr;
}
function validatecart(cart){
    return false;
}