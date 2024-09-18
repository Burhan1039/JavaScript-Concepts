
const p=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("value returned");
    },10000);
});

async function datapromise(){
    const value=await p;
    console.log(value);
}
datapromise();